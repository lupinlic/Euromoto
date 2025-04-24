import React, { useState, useEffect } from 'react';
import AccountForm from './AccountForm';
import authUser from '../../../api/authUser';

function Account() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [user, setUser] = useState(null);
    const openForm = () => {
        // setSelectedUserId(userId);
        setIsFormVisible(true);
    };

    // Đóng form
    const closeForm = () => {
        setIsFormVisible(false);
    };

    // Lấy danh sách tài khoản
    const getAllUser = async () => {
        try {
            const response = await authUser.get_all();
            setUser(response.data);
        } catch (error) {
            console.error('Có lỗi khi lấy danh sách tài khoản:', error);
        }
    };
    useEffect(() => {
        getAllUser();
    }, []);
    return (
        <div>
            <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingLeft: '4px' }}>
                <div className="container supplier pt-3">
                    <button type="button" class="btn btn-success " onClick={() => openForm()}>Thêm</button>
                    {isFormVisible && (
                        <>
                            <div className="overLay"></div> {/* Lớp overlay */}
                            <AccountForm
                                onClose={closeForm} /> {/* Form */}
                        </>
                    )}
                </div>

                <div className='container pt-4'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Email</th>
                                <th>SĐT</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm mr-2"
                                        onClick={() => openForm()}
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        style={{ marginLeft: '8px' }}
                                        className="btn btn-danger btn-sm"
                                    // onClick={() => deleteUser(item.user_id)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Account