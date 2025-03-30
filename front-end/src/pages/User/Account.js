import React from 'react'
import Crumb from '../../components/Crumb'
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import ChangePassword from '../../components/ChangePassword';
import AddressForm from '../../components/AddressForm';
import Address from '../../components/Address';

function Account() {
    const orders = [];
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedSection, setSelectedSection] = useState("info");
    const openForm = () => {

        setIsFormVisible(true);
    };

    // Đóng form
    const closeForm = () => {
        setIsFormVisible(false);
    };
    return (
        <>
            <Helmet>
                <title>Tài khoản</title>
            </Helmet>
            <Crumb
                name='Tài khoản' />
            <div className='container mt-5 accountpage'>
                <div className='row'>
                    <div className='col-md-3 '>
                        <p>TRANG TÀI KHOẢN</p>
                        <p>
                            <span>Xin chào,</span>
                            <span style={{ color: 'red' }}>Lupin!</span>
                        </p>
                        <ul className="list-unstyled mt-3">
                            <li
                                className={selectedSection === "info" ? "active" : ""}
                                onClick={() => setSelectedSection("info")}
                            >
                                Thông tin tài khoản
                            </li>
                            <li
                                className={selectedSection === "orders" ? "active" : ""}
                                onClick={() => setSelectedSection("orders")}
                            >
                                Đơn hàng của bạn
                            </li>
                            <li
                                className={selectedSection === "password" ? "active" : ""}
                                onClick={() => setSelectedSection("password")}
                            >
                                Đổi mật khẩu
                            </li>
                            <li
                                className={selectedSection === "addresses" ? "active" : ""}
                                onClick={() => setSelectedSection("addresses")}
                            >
                                Số địa chỉ (0)
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-9'>
                        <div className="content">
                            {selectedSection === "info" && (
                                <div>
                                    <h5>THÔNG TIN TÀI KHOẢN</h5>
                                    <p><strong>Họ tên:</strong> Lâm Hứa</p>
                                    <p><strong>Email:</strong> huatunglam1205@gmail.com</p>
                                </div>
                            )}
                            {selectedSection === "orders" && (
                                <div>
                                    <h5>ĐƠN HÀNG CỦA BẠN</h5>
                                    <table bordered className="mt-3 w-100 orders-table">
                                        <thead>
                                            <tr className="text-white text-center" style={{ backgroundColor: "#FFA726" }}>
                                                <th>Đơn hàng</th>
                                                <th>Ngày</th>
                                                <th>Địa chỉ</th>
                                                <th>Giá trị đơn hàng</th>
                                                <th>TT thanh toán</th>
                                                <th>TT vận chuyển</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.length === 0 ? (
                                                <tr>
                                                    <td colSpan="6" className="text-center">Không có đơn hàng nào.</td>
                                                </tr>
                                            ) : (
                                                orders.map((order, index) => (
                                                    <tr key={index} className="text-center">
                                                        <td>{order.id}</td>
                                                        <td>{order.date}</td>
                                                        <td>{order.address}</td>
                                                        <td>{order.total} VNĐ</td>
                                                        <td>{order.paymentStatus}</td>
                                                        <td>{order.shippingStatus}</td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {selectedSection === "password" && (
                                <div>
                                    <ChangePassword />
                                </div>
                            )}
                            {selectedSection === "addresses" && (
                                <div>
                                    <p> ĐỊA CHỈ CỦA BẠN</p>
                                    <button className='btadd mt-2' onClick={() => openForm()}>Thêm địa chỉ</button>
                                    {isFormVisible && (
                                        <>
                                            <div className="overlay"></div> {/* Lớp overlay */}
                                            {isFormVisible && (
                                                <AddressForm
                                                    onClose={closeForm}

                                                />
                                            )}
                                        </>
                                    )}
                                    <Address />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <style jsx>{`
                .accountpage   ul li {
          cursor: pointer;
          padding: 8px;
          transition: 0.3s;
        }
        .accountpage ul li:hover,
        .accountpage ul li.active {
          color: orange;
          font-weight: bold;
        }
        .orders-table {
  border-collapse: separate;
  border-spacing: 2px; /* Tạo khoảng trắng giữa các cột */
}

.orders-table thead tr {
  background-color: #FFA726;
}

.orders-table thead th {
  color: white;
  text-align: center;
}
.btadd{
    background: #ffb42e !important;
    border: 1px solid #ffb42e !important;
    color: #fff !important;
    padding: 0 16px !important;
    border-radius: 3px !important;
    font-size: 14px;
    height:40px
}
      `}</style>
            </div>
        </>
    )
}

export default Account