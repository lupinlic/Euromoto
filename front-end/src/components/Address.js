import React from 'react'
import { useState } from "react";
import AddressForm from './AddressForm';

const Address = () => {
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
        <div className='mt-3 pt-2 d-flex align-items-center justify-content-between' style={{ borderTop: '1px solid #ddd' }}>
            <div>
                <p>
                    <span style={{ fontWeight: '500' }}>Họ tên:</span>
                    <span>Hứa Tùng Lâm</span>
                    <span style={{ color: '#27AE60', fontSize: '12px', marginLeft: '9px' }}>Địa chỉ mặc định</span>
                </p>
                <p>
                    <span style={{ fontWeight: '500' }}>Địa chỉ:</span>
                    <span>Hứa Tùng Lâm</span>
                </p>
                <p>
                    <span style={{ fontWeight: '500' }}>Số điện thoại:</span>
                    <span>Hứa Tùng Lâm</span>
                </p>
            </div>
            <div>
                <p style={{ color: 'red', cursor: 'pointer' }}>Đặt làm địa chỉ mặc định</p>
                <p onClick={() => openForm()} style={{ color: '#2D9CDB', cursor: 'pointer' }}>Chỉnh sửa địa chỉ</p>
            </div>
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
        </div>
    )
}

export default Address