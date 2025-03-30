import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/product.css"
import Crumb from '../../components/Crumb'
import { Helmet } from "react-helmet-async";
import ProductFrame from "../../components/ProductFrame";

function Product() {
    return (
        <div>
            <Helmet>
                <title>Sản phẩm</title>
            </Helmet>
            <Crumb
                name='Sản phẩm' />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className='content-menu d-flex flex-column'>
                            <h5 style={{ color: '#d71920', fontSize: '18px' }}>Danh mục sản phẩm</h5>
                            <Link>Xe ga</Link>
                            <Link>Xe côn tay</Link>
                            <Link>Xe số</Link>
                        </div>
                        <div className='content-menu mt-3'>
                            <h5 style={{ color: '#d71920', fontSize: '18px' }}>Chọn mức giá</h5>
                            <div className="form-check m-2 chose-price">
                                <input className="form-check-input custom-checkbox" type="checkbox" defaultValue value="all" defaultChecked />
                                <label className="form-check-label" htmlFor="checkbox1" style={{ fontSize: '17px', margin: '0' }}>
                                    Tất cả sản phẩm
                                </label>
                            </div>
                            <div className="form-check m-2 chose-price">
                                <input className="form-check-input custom-checkbox" type="checkbox" value="all" />
                                <label className="form-check-label" htmlFor="checkbox1" style={{ fontSize: '17px', margin: '0' }}>
                                    Dưới 1 triệu
                                </label>
                            </div>
                            <div className="form-check m-2 chose-price">
                                <input className="form-check-input custom-checkbox" type="checkbox" value="all" />
                                <label className="form-check-label" htmlFor="checkbox1" style={{ fontSize: '17px', margin: '0' }}>
                                    1 triệu đến 10 triệu
                                </label>
                            </div>
                            <div className="form-check m-2 chose-price">
                                <input className="form-check-input custom-checkbox" type="checkbox" value="all" />
                                <label className="form-check-label" htmlFor="checkbox1" style={{ fontSize: '17px', margin: '0' }}>
                                    10 triệu đến 20 triệu
                                </label>
                            </div>
                            <div className="form-check m-2 chose-price">
                                <input className="form-check-input custom-checkbox" type="checkbox" value="all" />
                                <label className="form-check-label" htmlFor="checkbox1" style={{ fontSize: '17px', margin: '0' }}>
                                    20 triệu đến 50 triệu
                                </label>
                            </div>
                            <div className="form-check m-2 chose-price">
                                <input className="form-check-input custom-checkbox" type="checkbox" value="all" />
                                <label className="form-check-label" htmlFor="checkbox1" style={{ fontSize: '17px', margin: '0' }}>
                                    Trên 50 triệu
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-10'>
                        <div className='row'>
                            <div className='col-md-6 image-hover1'>
                                <img style={{ width: '100%', height: '200px' }} src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/banner_col_1.png?1741709416058' />
                            </div>
                            <div className='col-md-6 image-hover1'>
                                <img style={{ width: '100%', height: '200px' }} src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/banner_col_2.png?1741709416058' />
                            </div>
                        </div>
                        <div className='mt-3 d-flex align-items-center'>
                            <p className='m-0'>Xếp theo:</p>
                            <div className='arrange'>
                                Tên A-Z
                            </div>
                            <div className='arrange'>
                                Tên Z-A
                            </div>
                            <div className='arrange'>
                                Hàng mới
                            </div>
                            <div className='arrange'>
                                Giá thấp đến cao
                            </div>
                            <div className='arrange'>
                                Giá cao đến thấp
                            </div>

                        </div>
                        <div className='d-flex flex-wrap mt-3' style={{ rowGap: '20px' }}>
                            <ProductFrame
                                name='MT-15'
                                image='https://bizweb.dktcdn.net/100/519/812/products/mt15-gp-004.png?v=1727682058583'
                                price='69.000.000'
                            />
                            <ProductFrame
                                name='MT-15'
                                image='https://bizweb.dktcdn.net/100/519/812/products/mt15-gp-004.png?v=1727682058583'
                                price='69.000.000'
                            />
                            <ProductFrame
                                name='MT-15'
                                image='https://bizweb.dktcdn.net/100/519/812/products/mt15-gp-004.png?v=1727682058583'
                                price='69.000.000'
                            />
                            <ProductFrame
                                name='MT-15'
                                image='https://bizweb.dktcdn.net/100/519/812/products/mt15-gp-004.png?v=1727682058583'
                                price='69.000.000'
                            />
                            <ProductFrame
                                name='MT-15'
                                image='https://bizweb.dktcdn.net/100/519/812/products/mt15-gp-004.png?v=1727682058583'
                                price='69.000.000'
                            />
                            <ProductFrame
                                name='MT-15'
                                image='https://bizweb.dktcdn.net/100/519/812/products/mt15-gp-004.png?v=1727682058583'
                                price='69.000.000'
                            />
                            <ProductFrame
                                name='MT-15'
                                image='https://bizweb.dktcdn.net/100/519/812/products/mt15-gp-004.png?v=1727682058583'
                                price='69.000.000'
                            />
                            <ProductFrame
                                name='MT-15'
                                image='https://bizweb.dktcdn.net/100/519/812/products/mt15-gp-004.png?v=1727682058583'
                                price='69.000.000'
                            />
                        </div>
                        {/* phân trang */}
                        <div className='d-flex align-items-center justify-content-center pagination mt-3'>
                            <Link>1</Link>
                            <Link>2</Link>
                            <Link>{">>"}</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product