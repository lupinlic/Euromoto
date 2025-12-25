import React, { useState, useEffect } from 'react'
import Crumb from '../../components/Crumb'
import { Helmet } from "react-helmet-async";
import "../../styles/checkout.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import addressApi from '../../api/addressApi';
import orderApi from '../../api/orderApi';
import customerApi from '../../api/customerApi';
import dayjs from "dayjs";
import cartApi from '../../api/cartApi';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import productApi from '../../api/productApi';
import { ethers } from 'ethers';
import AddressForm from '../../components/AddressForm';
import { toast } from 'react-toastify';

function Checkout() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { fetchCartCount } = useContext(CartContext);
    const location = useLocation();
    const selectedProducts = location.state?.selectedProducts || [];
    const userId = localStorage.getItem('user_id');
    const [selectedPayment, setSelectedPayment] = useState("");
    const [addresses, setAddresses] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleAddSuccess = () => {
        fetchAddresses(); // Gọi API load lại địa chỉ
        closeForm();      // Ẩn form
    };

    const [isFormVisible, setIsFormVisible] = useState(false);
    const openForm = () => {

        setIsFormVisible(true);
    };

    // Đóng form
    const closeForm = () => {
        setIsFormVisible(false);
    };


    const totalItems = selectedProducts.length;
    const totalPrice = selectedProducts.reduce(
        (total, item) => total + item.product.ProductPrice * item.Quantity,
        0
    );
    const total = totalPrice + 40000; // Tổng cộng bao gồm phí vận chuyển
    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value); // Cập nhật trạng thái khi chọn thanh toán
    };
    const navigate = useNavigate();
    const payload = {
        CustomerID: customer.CustomerID,
        AddressID: addresses.AddressID,
        Method: selectedPayment,
        TotalPrice: total,
        OrderDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        items: selectedProducts.map((item) => ({
            ProductID: item.product.ProductID,
            ProductVersionID: item.ProductVersionID,
            ProductColorID: item.ProductColorID,
            Quantity: item.Quantity,
        })),
        // Gửi thông tin địa chỉ và khách hàng
        paymentMethod: selectedPayment,
        emailContent: "Đã thanh toán",
        customerEmail: addresses.Email,
        orderDetails: selectedProducts.map(item => ({
            ProductName: item.product.ProductName,
            Quantity: item.Quantity,
            Price: item.product.ProductPrice,
        })),
        orderId: Math.floor(Math.random() * 1000),
        totalPrice: total,
        shippingAddress: `${addresses.SpecificAddress}, ${addresses.Wards}, ${addresses.Districts}, ${addresses.Provinces}`, // Địa chỉ nhận hàng
        customerName: addresses.FullName, // Tên người nhận
        customerPhone: addresses.PhoneNumber,
    };
    const cartid = selectedProducts.map(item => item.CartID).filter(Boolean);
    console.log("cartIds:", cartid);
    const handlePayMomo = async () => {
        try {

            const res = await orderApi.getpayUrl(total, cartid, payload);
            console.log("payUrl:", res.payUrl);
            window.location.href = res.payUrl; // Chuyển hướng đến trang thanh toán MoMo
        } catch (error) {
            toast.error('chỉ áp chụng cho đơn hàng dưới 50.000.000đ')
            console.error("Lỗi khi lấy payUrl:", error.response?.data || error.message);
        }
    };

    const handlePaymentCod = async () => {
        try {
            const res = await orderApi.addOrder(payload);
            console.log("Đặt hàng thành công:", payload);
            // xóa sản phẩm sau khi đặt hàng thành công
            await Promise.all(
                selectedProducts.map(item =>
                    item.CartID ? cartApi.removetocart(item.CartID) : null
                )
            );
            fetchCartCount(); // Cập nhật lại số lượng giỏ hàng
            // Điều hướng sang trang cảm ơn
            sendEmailNotification();
            navigate('/Thanks?payment=cod')
        } catch (err) {
            navigate('/order-failed')
            if (err.response?.data?.errors) {
                console.log("Lỗi validate:", err.response.data.errors);
                alert(JSON.stringify(err.response.data.errors));
            } else {
                console.error("Lỗi không xác định:", err);
            }
        }
    }

    const handleToThanks = async () => {
        if (selectedPayment === 'momo') {
            await handlePayMomo();
        } else if (selectedPayment === 'cod') {
            await handlePaymentCod();
        } else {
            toast.error('Vui lòng chọn phương thức thanh toán!');
        }
    };


    const fetchAddresses = async () => {
        try {
            setLoading(true); // 🔄 bắt đầu quay
            const res = await addressApi.getDefaultAddress(userId);
            setAddresses(res.data);
        } catch (err) {
            console.error("Lỗi lấy địa chỉ:", err);
        } finally {
            setLoading(false); // ✅ dừng quay
        }
    };
    const fetchCustomer = async () => {
        try {
            let res;
            res = await customerApi.getByIdUser(userId);
            setCustomer(res.data);

        } catch (err) {
            console.error("Lỗi lấy sản phẩm:", err);
        }
    };
    const fetchProducts = async () => {
        const productIds = selectedProducts.map(item => item.ProductID);
        console.log("productIds", productIds);

        // Gọi API cho từng ProductID và lưu kết quả vào mảng
        const productPromises = productIds.map(id => productApi.getproductbyID(id));
        const productResponses = await Promise.all(productPromises);

        // Lấy dữ liệu từ tất cả các cuộc gọi API và set lại state
        const products = productResponses.map(res => res);
        setProduct(products);
        console.log("Sản phẩm:", products);
        console.log("Sản phẩm:", products[0].thumbnail.split('/').pop());
    };


    useEffect(() => {

        fetchAddresses();
        fetchCustomer();
        fetchProducts();
    }, [userId]);

    // metamask
    const [ethAmount, setEthAmount] = useState(0);
    const [isConnected, setIsConnected] = useState(false);
    const [userAddress, setUserAddress] = useState(null);
    const [transactionHash, setTransactionHash] = useState(null);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=VND');
                const data = await response.json();
                const ethToVndRate = data.ethereum.vnd;
                const ethAmountCalculated = total / ethToVndRate;
                console.log(total)
                setEthAmount(ethAmountCalculated);
                console.log("ETH Amount:", ethAmount);
            } catch (error) {
                console.error("Failed to fetch exchange rate", error);
            }
        };

        fetchExchangeRate();
    }, [total]);
    // Kết nối với Metamask
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                console.log(address)
                setUserAddress(address);

                setIsConnected(true);
            } catch (error) {
                console.error("User rejected the request");
            }
        } else {
            alert('Please install MetaMask!');
        }
    };
    // Xử lý thanh toán
    const handlePayment = async () => {
        if (!userAddress) return;

        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = provider.getSigner();

            const tx = await signer.sendTransaction({
                to: '0x997c7a2fc1Fc2dB6b32325A850CaaE17ca3cb201', // Địa chỉ ví của bạn
                value: ethers.parseEther(ethAmount.toString()) // Chuyển số tiền vào
            });

            await tx.wait(); // Đợi giao dịch hoàn tất
            setTransactionHash(tx.hash);

            // Gửi email thông báo thanh toán thành công

        } catch (error) {
            console.error("Payment failed", error);
        }
    };
    const sendEmailNotification = async () => {
        const paymentMethod = selectedPayment; // Đảm bảo đây là phương thức thanh toán đã chọn (COD hoặc Metamask)
        const emailContent = paymentMethod === 'Metamask'
            ? 'Thanh toán qua Metamask'
            : 'Thanh toán khi nhận hàng';

        try {
            const response = await fetch(`${apiUrl}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentMethod: paymentMethod, // Gửi phương thức thanh toán
                    emailContent: emailContent,
                    customerEmail: addresses.Email, // Email của khách hàng
                    orderDetails: selectedProducts.map(item => ({
                        ProductName: item.product.ProductName,
                        Quantity: item.Quantity,
                        Price: item.product.ProductPrice,
                    })),
                    orderId: Math.floor(Math.random() * 1000), // Giả định ID đơn hàng
                    totalPrice: total, // Tổng số tiền
                    shippingAddress: `${addresses.SpecificAddress}, ${addresses.Wards}, ${addresses.Districts}, ${addresses.Provinces}`, // Địa chỉ nhận hàng
                    customerName: addresses.FullName, // Tên người nhận
                    customerPhone: addresses.PhoneNumber, // Số điện thoại người nhận

                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }
            console.log('Email đã được gửi thành công');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
    console.log("payment", selectedPayment);
    return (
        <>
            <Helmet>
                <title>Thanh toán</title>
            </Helmet>
            <Crumb
                name='Thanh toán' />
            <div className='container '>
                <div className='row mt-5'>
                    <div className="col-md-4 checkout">
                        <h6>Thông tin nhận hàng</h6>

                        {/* 1️⃣ Loading */}
                        {loading && (
                            <div className="d-flex justify-content-center my-3">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}

                        {/* 2️⃣ Có địa chỉ */}
                        {!loading && addresses && Object.keys(addresses).length > 0 && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Họ tên"
                                    value={addresses.FullName || ''}
                                    readOnly
                                />
                                <input
                                    type="text"
                                    placeholder="Số điện thoại"
                                    value={addresses.PhoneNumber || ''}
                                    readOnly
                                />
                                <input
                                    type="text"
                                    placeholder="Địa chỉ"
                                    value={addresses.SpecificAddress || ''}
                                    readOnly
                                />

                                <select value={addresses.Provinces || ''} disabled>
                                    <option>{addresses.Provinces}</option>
                                </select>

                                <select value={addresses.Districts || ''} disabled>
                                    <option>{addresses.Districts}</option>
                                </select>

                                <select value={addresses.Wards || ''} disabled>
                                    <option>{addresses.Wards}</option>
                                </select>

                                <textarea placeholder="Ghi chú"></textarea>
                            </>
                        )}

                        {/* 3️⃣ Không có địa chỉ */}
                        {!loading && (!addresses || Object.keys(addresses).length === 0) && (
                            <div>
                                <p>Bạn chưa có địa chỉ nhận hàng!</p>

                                <button
                                    style={{
                                        width: '150px',
                                        height: '40px',
                                        borderRadius: '5px',
                                        border: 'none',
                                        background: '#d71920',
                                        color: '#fff',
                                    }}
                                    className="btadd mt-2"
                                    onClick={openForm}
                                >
                                    Thêm địa chỉ
                                </button>

                                {isFormVisible && (
                                    <>
                                        <div className="overlay"></div>
                                        <AddressForm
                                            onClose={closeForm}
                                            onSuccess={handleAddSuccess}
                                        />
                                    </>
                                )}
                            </div>
                        )}
                    </div>


                    <div className='col-md-4 mb-1 mb-md-0'>
                        <h6>Vận chuyển</h6>
                        <div className='d-flex align-items-center justify-content-between' style={{ border: '1px solid #ddd', padding: '8px', borderRadius: '5px' }}>
                            <p className='m-0'>Giao hàng tận nơi</p>
                            <p className='m-0'>40.000đ</p>
                        </div>
                        <h6 className='mt-4'>Thanh toán</h6>
                        <div style={{ border: '1px solid #a4a4a4', borderRadius: '5px' }}>
                            {/* crypto */}
                            {/* <div className="d-flex align-items-center p-2" style={{ borderBottom: '1px solid #a4a4a4' }}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="crypto"
                                    checked={selectedPayment === "crypto"}
                                    onChange={handlePaymentChange}
                                />
                                <label ><img style={{ margin: '0 12px' }} src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=6" />Thanh toán qua ví tiền mã hóa</label>
                            </div> */}
                            {selectedPayment === "crypto" && (

                                !isConnected ? (
                                    <div className='d-flex align-items-center justify-content-center' style={{ marginTop: "10px", textAlign: "center" }}>
                                        <button onClick={connectWallet} style={{ borderRadius: '5px', backgroundColor: 'white', border: '1px solid ##a4a4a4', padding: '10px', marginBottom: '10px' }}>Kết nối ví metamask</button>
                                    </div>
                                ) : (
                                    <div>
                                        <h3>Order Amount: {total} VND ({ethAmount.toFixed(6)} ETH)</h3>
                                        <button onClick={handlePayment}>Confirm Payment</button>
                                    </div>
                                )
                            )}
                            {/* tt momo */}
                            <div className="d-flex align-items-center p-2" style={{ borderBottom: '1px solid #a4a4a4', borderTop: '1px solid #a4a4a4' }}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="momo"
                                    checked={selectedPayment === "momo"}
                                    onChange={handlePaymentChange}
                                />
                                <label ><img style={{ margin: '0 12px', width: '50px' }} src="https://developers.momo.vn/v3/vi/assets/images/icon-52bd5808cecdb1970e1aeec3c31a3ee1.png" />Thanh toán bằng ví Momo</label>
                            </div>
                            {/*TT nhận hàng */}
                            <div className="d-flex align-items-center p-2 " style={{ borderTop: '1px solid #a4a4a4' }}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={selectedPayment === "cod"}
                                    onChange={handlePaymentChange}
                                />
                                <label><img style={{ margin: '0 12px' }} src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6" />Thanh toán khi nhận hàng</label>

                            </div>

                        </div>
                    </div>
                    <div className='col-md-4 '>
                        <h6>
                            <span>Đơn hàng</span>
                            <span>({totalItems} sản phẩm)</span>
                        </h6>
                        {product.map((item, index) => (
                            <div key={index} className='row align-items-center mt-3 pb-3' style={{ borderBottom: '1px solid #ddd' }}>
                                <div className='col-md-8 d-flex align-items-center position-relative mt-2 col-8'>
                                    <img
                                        style={{ width: '50px', height: '50px', borderRadius: '5px', border: '1px solid #ddd' }}
                                        alt={item.ProductName}
                                        src={`${apiUrl}/image/${item.category?.parent?.CategoryParentName}/${item.category?.CategoryName}/${item.ProductName}/${item.thumbnail?.split('/').pop()}`} />
                                    <div style={{ position: 'absolute', width: '25px', height: '25px', borderRadius: '50%', background: '#d71920', textAlign: 'center', top: '-15%', left: '15%', color: '#fff' }}>
                                        {selectedProducts.find(p => p.product.ProductID === item.ProductID).Quantity}
                                    </div>
                                    <p style={{ marginLeft: '24px' }}>{item.ProductName}</p>
                                </div>
                                <p className='col-md-4 text-end m-0 col-4' >{Number(item.ProductPrice).toLocaleString('vi-VN')} đ</p>

                            </div>
                        ))}
                        <div className='mt-2' style={{ borderBottom: '1px solid #fff' }}>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p>Tạm tính</p>
                                <p>{totalPrice.toLocaleString('vi-VN')}₫</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p>Phí vận chuyển</p>
                                <p>40.000đ</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <p>Tổng cộng</p>
                            <p style={{ color: '#d71920', fontSize: '24px' }}>{total.toLocaleString('vi-VN')} đ</p>
                        </div>
                        {selectedPayment === "bank" && (
                            <div className='d-flex align-items-center justify-content-between'>
                                <p></p>
                                <p style={{ color: '#d71920', fontSize: '24px' }}>~{ethAmount} Eth</p>
                            </div>
                        )}
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <Link to='/Cart' style={{ color: '#d71920' }}> Quay về giỏ hàng</Link>
                            <button onClick={handleToThanks} style={{ width: '100px', height: '40px', borderRadius: '5px', border: 'none', background: '#014686', color: '#fff' }}>Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout