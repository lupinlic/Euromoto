import React, { useState } from "react";
import Crumb from '../../components/Crumb'
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();

    const handletocheckout = () => {
        navigate("/Checkout"); // Chuyển sang trang success khi đặt hàng thành công
    };


    return (
        <>
            <Helmet>
                <title>Giỏ hàng</title>
            </Helmet>
            <Crumb
                name='Giỏ hàng' />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div style={{ border: '1px solid #cecccc' }}>
                            <div className="row w-100 m-0 pt-2 pb-2">
                                <div className="col-md-6">
                                    <b>Thông tin sản phẩm</b>
                                </div>
                                <div className="col-md-2">
                                    <b>Đơn giá</b>
                                </div>
                                <div className="col-md-2">
                                    <b>Số lượng</b>
                                </div>
                                <div className="col-md-2">
                                    <b>Thành tiền</b>
                                </div>
                            </div>
                            {/* sản phẩm */}
                            <div className="row w-100 m-0 align-items-center pt-2 pb-2" style={{ borderTop: '1px solid #cecccc' }}>
                                <div className="col-md-6 d-flex align-items-center">
                                    <img style={{ width: '108px', height: '72px' }} src="https://bizweb.dktcdn.net/thumb/compact/100/519/812/products/logo-noronx-jpg-1.jpg" />
                                    <div className="ms-3">
                                        <b>LEAD</b>
                                        <p className="m-0">Cao cấp / Xanh</p>
                                        <p className="delete">Xóa</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <b style={{ color: '#ec3d40' }}>39.557.000 đ</b>
                                </div>
                                <div className="col-md-2">
                                    <div className='input-number-product m-0'>
                                        <button>-</button>
                                        <input type='number' value={1} />
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <b style={{ color: '#ec3d40' }}>39.557.000 đ</b>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-9">

                            </div>
                            <div className="col-md-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="m-0">Tổng tiền:</p>
                                    <b style={{ color: '#ec3d40' }}>39.557.000 đ</b>
                                </div>
                                <button onClick={handletocheckout} className="bt-thanhtoan">Thanh toán</button>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6>Chọn thời gian giao hàng</h6>
                        <div className="row">
                            <div className="col-md-6">
                                <input placeholder="chọn ngày" type="date" className="date-pick" />

                            </div>
                            <div className="col-md-6">
                                <select className="date-pick">
                                    <option>Chọn thời gian</option>
                                    <option>Sáng</option>
                                    <option>Chiều</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart