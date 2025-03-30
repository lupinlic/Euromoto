import React, { useState } from 'react'
import Crumb from '../../components/Crumb'
import { Helmet } from "react-helmet-async";
import "../../styles/checkout.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Checkout() {
    const [selectedPayment, setSelectedPayment] = useState("");
    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value); // Cập nhật trạng thái khi chọn thanh toán
    };
    const navigate = useNavigate();

    const handleToThanks = () => {
        navigate('/Thanks'); // Chuyển đến trang Pay
    };
    return (
        <>
            <Helmet>
                <title>Thanh toán</title>
            </Helmet>
            <Crumb
                name='Thanh toán' />
            <div className='container '>
                <div className='row mt-5'>
                    <div className='col-md-4 checkout'>
                        <h6>Thông tin nhận hàng</h6>
                        <input type='text' placeholder='Họ tên' />
                        <input type='text' placeholder='Số điện thoại ' />
                        <input type='text' placeholder='Địa chỉ' />
                        <select>
                            <option>Tỉnh/Thành phố</option>
                        </select>
                        <select>
                            <option>Quận/Huyện</option>
                        </select>
                        <select>
                            <option>Phường/xã</option>
                        </select>
                        <textarea placeholder='Ghi chú'></textarea>
                    </div>
                    <div className='col-md-4'>
                        <h6>Vận chuyển</h6>
                        <div className='d-flex align-items-center justify-content-between' style={{ border: '1px solid #ddd', padding: '8px', borderRadius: '5px' }}>
                            <p className='m-0'>Giao hàng tận nơi</p>
                            <p className='m-0'>40.000đ</p>
                        </div>
                        <h6 className='mt-4'>Thanh toán</h6>
                        <div style={{ border: '1px solid #a4a4a4', borderRadius: '5px' }}>
                            <div className="d-flex align-items-center p-2" style={{ borderBottom: '1px solid #a4a4a4' }}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="bank"
                                    checked={selectedPayment === "bank"}
                                    onChange={handlePaymentChange}
                                />
                                <label ><img style={{ margin: '0 12px' }} src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=6" />Thanh toán qua tài khoản ngân hàng</label>
                            </div>
                            {selectedPayment === "bank" && (
                                <div style={{ marginTop: "20px", textAlign: "center" }}>
                                    <img src="/qr.jpg" alt="QR Code" width="200" />
                                </div>
                            )}
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
                            {selectedPayment === "cod" && (
                                <div className="text-center p-3 ">Chỉ áp dụng đơn hàng nhỏ hơn 3.000.000đ</div>
                            )}


                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h6>
                            <span>Đơn hàng</span>
                            <span>(2 sản phẩm)</span>
                        </h6>
                        <div className='row align-items-center mt-3 pb-3' style={{ borderBottom: '1px solid #fff' }}>
                            <div className='col-md-9 d-flex align-items-center position-relative mt-2'>
                                <img style={{ width: '50px', height: '50px', borderRadius: '5px', border: '1px solid #ddd' }} src='https://bizweb.dktcdn.net/thumb/thumb/100/519/812/products/logo-noronx-jpg-1.jpg?v=1727669436970' />
                                <div style={{ position: 'absolute', width: '25px', height: '25px', borderRadius: '50%', background: '#d71920', textAlign: 'center', top: '-15%', left: '15%', color: '#fff' }}>1</div>
                                <p style={{ marginLeft: '24px' }}>LEAD</p>
                            </div>
                            <p className='col-md-3 text-end' >68.000đ</p>

                        </div>
                        <div className='mt-2' style={{ borderBottom: '1px solid #fff' }}>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p>Tạm tính</p>
                                <p>100.000đ</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p>Phí vận chuyển</p>
                                <p>40.000đ</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <p>Tổng cộng</p>
                            <p style={{ color: '#d71920', fontSize: '24px' }}>140.000đ</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <Link to='/Cart' style={{ color: '#d71920' }}> Quay về giỏ hàng</Link>
                            <button onClick={handleToThanks} style={{ width: '100px', height: '40px', borderRadius: '5px', border: 'none', background: '#d71920', color: '#fff' }}>Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout