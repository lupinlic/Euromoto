import React from 'react'
import "../../styles/header.css"
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className='header container'>
            <div className='h-100 row align-items-center'>
                <div className='col-md-2'>
                    <img className='w-100' src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/logo.png?1741709416058' alt='' />

                </div>
                <div className='col-md-10'>
                    <div className='header-topbar row'>
                        <div className='col-md-3'> </div>
                        <div className='col-md-5'>
                            <ul className='header-topbar-list d-flex h-100 align-items-center justify-content-center'>
                                <Link to='/StoreSystem'>
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i>
                                        Hệ thống cửa hàng
                                    </li>
                                </Link>
                                <Link to='/Account'>
                                    <li>
                                        <i class="fas fa-user"></i>
                                        Tài khoản
                                    </li>
                                </Link>
                                <Link to='/Login'>
                                    <li>
                                        <i class="fas fa-sign-out-alt"></i>
                                        Đăng xuất
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className='col-md-4 social-icons align-items-center justify-content-center'>

                            <a href="#" className="facebook"><i className="fab fa-facebook-f" /></a>
                            <a href="#" className="youtube"><i className="fab fa-youtube" /></a>
                            <a href="#" className="twitter"><i className="fab fa-twitter" /></a>
                            <a href="#" className="pinterest"><i className="fab fa-pinterest" /></a>
                            <a href="#" className="instagram"><i className="fab fa-instagram" /></a>


                        </div>

                    </div>

                    <div className='header-menu row'>
                        <div className='col-md-9'>
                            <ul className='h-100 d-flex align-items-center justify-content-between'>
                                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                    <li>Trang chủ</li>
                                </NavLink>

                                <NavLink to="/Introduce" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                    <li>Giới thiệu</li>
                                </NavLink>
                                <Link className='position-relative header-menu-parent'>
                                    <li>Sản phẩm</li>
                                    <div className="dropdown-cate-item position-absolute d-flex align-items-center header-menu-child ">
                                        <ul> Honda
                                            <Link to='/Product'>
                                                <li>Xe ga</li>
                                            </Link>
                                            <Link to=''>
                                                <li>Xe côn tay</li>
                                            </Link>
                                            <Link to=''>
                                                <li>Xe số</li>
                                            </Link>

                                        </ul>
                                        <ul> Yamaha
                                            <Link to=''>
                                                <li>Xe ga</li>
                                            </Link>
                                            <Link to=''>
                                                <li>Xe thể thao</li>
                                            </Link>
                                            <Link to=''>
                                                <li>Xe số</li>
                                            </Link>

                                        </ul>
                                        <ul> SYM
                                            <Link to=''>
                                                <li>Xe ga</li>
                                            </Link>
                                            <Link to=''>
                                                <li>Xe côn tay</li>
                                            </Link>
                                            <Link to=''>
                                                <li>Xe số</li>
                                            </Link>

                                        </ul>
                                    </div>

                                </Link>
                                <NavLink to="/News" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                    <li>Tin tức</li>
                                </NavLink>
                                <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                    <li>Liên hệ</li>
                                </NavLink>
                                <NavLink to="/Question" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                    <li>Câu hỏi thường gặp</li>
                                </NavLink>
                            </ul>
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-2 d-flex align-items-center justify-content-between'>
                            <div className='icon'>
                                <i className="fas fa-search" />
                            </div>
                            <Link to='/LikeProduct'>
                                <div className="icon">
                                    <i className="fas fa-heart" />
                                    <span className="badge">3</span>
                                </div>
                            </Link>
                            <Link to='/Cart'>
                                <div className="icon">
                                    <i className="fas fa-shopping-cart" />
                                    <span className="badge">5</span>
                                </div>
                            </Link>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header