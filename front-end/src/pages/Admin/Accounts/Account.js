import React, { useState, useEffect } from 'react';
import AccountForm from './AccountForm';
import authUser from '../../../api/authUser';

function Account() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [user, setUser] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const openForm = (userId = null) => {
        setSelectedUserId(userId);
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


            if (!searchTerm.trim()) {
                setFiltered(response.data);
            }
        } catch (error) {
            console.error('Có lỗi khi lấy danh sách tài khoản:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await authUser.delete_user(id);
            getAllUser(); // cập nhật danh sách
        } catch (error) {
            console.error('Có lỗi khi xóa tài khoản:', error);
        }
    };

    const handleSearch = () => {
        const lowerSearch = searchTerm.toLowerCase();
        const result = user.filter(u =>
            u.name.toLowerCase().includes(lowerSearch) ||
            u.email.toLowerCase().includes(lowerSearch)
        );
        setFiltered(result);
    };

    const handleShowAll = () => {
        setSearchTerm('');
        setFiltered(user);
    };

    useEffect(() => {
        getAllUser();
    }, []);
    return (
        <div>
            <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingLeft: '4px' }}>
                <div className="container supplier pt-3 d-flex justify-content-between align-items-center mb-3">
                    <button type="button" class="btn btn-success " onClick={() => openForm()}>Thêm</button>
                    {isFormVisible && (
                        <>
                            <div className="overLay"></div> {/* Lớp overlay */}
                            <AccountForm
                                userId={selectedUserId}
                                onUpdate={getAllUser}
                                onClose={closeForm} /> {/* Form */}
                        </>
                    )}
                    <div className="d-flex align-items-center justify-content-between" style={{ height: '50px' }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tìm theo tên hoặc email"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={handleSearch}>Tìm</button>
                        <button className="btn btn-secondary" onClick={handleShowAll} style={{ width: '100px' }}>Tất cả</button>
                    </div>
                </div>

                <div className='container pt-4'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning btn-sm mr-2"
                                            onClick={() => openForm(item.id)}

                                        >
                                            Sửa
                                        </button>
                                        <button
                                            style={{ marginLeft: '8px' }}
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteUser(item.id)}
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Account