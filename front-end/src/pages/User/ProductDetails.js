import React from 'react'
import "../../styles/productdetails.css"
import Crumb from '../../components/Crumb'
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import ProductFrame from '../../components/ProductFrame';
import Title from '../../components/Title';

function ProductDetails() {
    const images = [
        "https://bizweb.dktcdn.net/thumb/medium/100/519/812/products/den.png?v=1727671911573",
        "https://bizweb.dktcdn.net/thumb/medium/100/519/812/products/xam-den-305e9a94-6669-43d9-8856-e76b1cca1ff0.png?v=1727671912567",
        "https://bizweb.dktcdn.net/thumb/medium/100/519/812/products/do-den.png?v=1727671913517",
        "https://bizweb.dktcdn.net/thumb/medium/100/519/812/products/xanh-den.png?v=1727671914233",
    ];

    const versions = [
        "Phiên bản Cao Cấp",
        "Phiên bản Đặc Biệt",
        "Phiên bản Thể Thao",
        "Phiên bản Tiêu Chuẩn",
    ];
    const tabs = [
        { id: "description", label: "Mô tả sản phẩm", content: "Nội dung mô tả sản phẩm..." },
        { id: "specs", label: "Thông số kỹ thuật", content: "Nội dung thông số kỹ thuật..." },
        { id: "guide", label: "Hướng dẫn mua hàng", content: "Nội dung hướng dẫn mua hàng..." },
        { id: "reviews", label: "Đánh giá sản phẩm", content: "Nội dung đánh giá sản phẩm..." },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [selectedVersion, setSelectedVersion] = useState(versions[0]);

    const [selectedImage, setSelectedImage] = useState(images[0]);
    return (
        <>
            <Helmet>
                <title>Sản phẩm</title>
            </Helmet>
            <Crumb
                name='Sản phẩm' />
            <div className='container mt-5'>
                <h4>Vario 160</h4>
                <div className='row mt-3' style={{ borderBottom: '1px solid #D71920', fontSize: '16px', fontWeight: '600' }}>
                    <div className='col-md-3'>
                        <p>
                            <sapn style={{ color: '#D71920', marginRight: '8px' }}>Loại:</sapn>
                            <sapn>Xe tay ga</sapn>
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <p>
                            <sapn style={{ color: '#D71920', marginRight: '8px' }}>Thương hiệu:</sapn>
                            <sapn>Honda</sapn>
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <p>
                            <sapn style={{ color: '#D71920', marginRight: '8px' }}>Tình trạng:</sapn>
                            <sapn>Còn hàng</sapn>
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <p>
                            <sapn style={{ color: '#D71920', marginRight: '8px' }}>Mã sản phẩm:</sapn>
                            <sapn>Đang cập nhật</sapn>
                        </p>
                    </div>
                </div>
                <div className='mt-4 row'>
                    <div className='col-md-5'>
                        <div className='d-flex align-items-center' style={{ border: '2px solid #D71920', borderRadius: '10px', height: '526px', width: '100%' }}>
                            <img src={selectedImage} alt="Selected" width="100%" />
                        </div>
                        <div className='row mt-3'>
                            {images.map((img, index) => (
                                <div className='col-md-3'>

                                    <div key={index} className='d-flex align-items-center' style={{ border: selectedImage === img ? "2px solid #D71920" : "2px solid #d8d7d7", height: '113px', borderRadius: '5px', cursor: 'pointer' }}>
                                        <img src={img} alt={`Option ${index}`} width="100%" onClick={() => setSelectedImage(img)} />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <p style={{ fontWeight: '600' }}>Giá bán:</p>
                        <div className='price-box'>51.990.000
                            <span className='line-under'>đ</span>
                        </div>
                        <p style={{ fontWeight: '600' }}>Phiên bản:</p>
                        <div className="d-flex flex-wrap gap-2">
                            {versions.map((version, index) => (
                                <div
                                    key={index}
                                    variant="outline-dark"
                                    className='d-flex align-items-center border-2 '
                                    style={{ border: selectedVersion === version ? "2px solid #D71920" : "2px solid #d8d7d7", borderRadius: '5px', cursor: 'pointer', padding: '4px' }}
                                    onClick={() => setSelectedVersion(version)}
                                >

                                    {version}
                                </div>
                            ))}
                        </div>
                        <p style={{ fontWeight: '600', marginTop: '12px' }}>Màu sắc: Xanh</p>
                        <div className='d-flex align-items-center'>
                            <p className='m-0' style={{ fontWeight: '600' }}>Số lượng:</p>
                            <div className='input-number-product'>
                                <button>-</button>
                                <input type='number' value={1} />
                                <button>+</button>

                            </div>
                            <button className='addtocart'>Thêm vào giỏ hàng</button>

                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <button className='buynow'>Mua ngay</button>
                            <button className='buynow'>Liên hệ</button>
                        </div>
                        <div className='service-pro mt-4'>
                            <div className='title'>
                                Danh sách khuyến mãi
                            </div>
                            <div className='d-flex align-items-center p-2' style={{ fontSize: '13px' }}>
                                <img src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/km_product1.png?1741709416058' alt='' />
                                <p className='m-0'>Áp dụng Phiếu quà tặng/ Mã giảm giá theo sản phẩm</p>
                            </div>
                            <div className='d-flex align-items-center p-2' style={{ fontSize: '13px' }}>
                                <img src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/km_product1.png?1741709416058' alt='' />
                                <p className='m-0'>Giảm giá 10% khi mua từ 5 sản phẩm trở lên</p>
                            </div>
                            <div className='d-flex align-items-center p-2' style={{ fontSize: '13px' }}>
                                <img src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/km_product3.png?1741709416058' alt='' />
                                <p className='m-0'>Tặng 100.000₫ mua hàng tại website thành viên Euro moto, áp dụng khi mua Online tại Hồ Chí Minh và 1 số khu vực khác.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='service-pro'>
                            <div className='title'>
                                Cam kết bán hàng
                            </div>
                            <ul>
                                <li>
                                    <img className='thumb-img' src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/camket_1.png?1741709416058 ' alt='' />
                                    <b>Sản phẩm</b>
                                    <p>Chính hãng</p>
                                </li>
                                <li>
                                    <img className='thumb-img' src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/camket_2.png?1741709416058 ' alt='' />
                                    <b>Giá tốt</b>
                                    <p>Trực tiếp</p>
                                </li>
                                <li>
                                    <img className='thumb-img' src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/camket_3.png?1741709416058' alt='' />
                                    <b>Combo quà</b>
                                    <p>Chất lượng</p>
                                </li>
                                <li>
                                    <img className='thumb-img' src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/camket_4.png?1741709416058 ' alt='' />
                                    <b>Trả góp</b>
                                    <p>Lãi suất thấp</p>
                                </li>
                                <li>
                                    <img className='thumb-img' src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/camket_5.png?1741709416058' alt='' />
                                    <b>Bảo hành</b>
                                    <p>3-5 năm</p>
                                </li>
                                <li>
                                    <img className='thumb-img' src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/camket_6.png?1741709416058' alt='' />
                                    <b>Giao hàng</b>
                                    <p>Tận nhà</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='col-md-9'>
                        <div className='product-tab'>
                            <div className='title-tab'>
                                Thông tin sản phẩm
                            </div>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className="d-flex flex-column gap-2">
                                        {tabs.map((tab) => (
                                            <div
                                                key={tab.id}
                                                style={{
                                                    border: activeTab === tab.id ? "none" : "2px solid #d8d7d7",
                                                    background: activeTab === tab.id ? "#D71920" : "#fff",
                                                    color: activeTab === tab.id ? "#fff" : "#000",
                                                    borderRadius: '20px', cursor: 'pointer', padding: '8px',
                                                    fontWeight: '500',
                                                    marginTop: '8px'
                                                }}
                                                onClick={() => setActiveTab(tab.id)}
                                            >
                                                {tab.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    <div className="">
                                        {tabs.find((tab) => tab.id === activeTab)?.content}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='col-md-3'>

                    </div>
                </div>
                {/*  */}
                <Title
                    titleName='Sản phẩm'
                    titleDes='liên quan'
                ></Title>
                <div className='ms-4 d-flex'>
                    <ProductFrame
                        name='GALAXY 50'
                        image='https://bizweb.dktcdn.net/100/519/812/products/artboard-12.png?v=1727684685893'
                        price='18.480.000'
                    />
                    <ProductFrame
                        name='ALGELA 50'
                        image='https://bizweb.dktcdn.net/100/519/812/products/1-2.png?v=1727684508933'
                        price='18.730.000'
                    />
                    <ProductFrame
                        name='NEW GALAXY 125'
                        image='https://bizweb.dktcdn.net/100/519/812/products/1-1-6.jpg?v=1727684143323'
                        price='25.2000.000'
                    />
                    <ProductFrame
                        name='JUPITER FI'
                        image='https://bizweb.dktcdn.net/100/519/812/products/2022-t115fs-5ltd-ms1-vnm-004.png?v=1727682487937'
                        price='30.240.000'
                    />
                    <ProductFrame
                        name='MT-15'
                        image='https://bizweb.dktcdn.net/100/519/812/products/mt15-gp-004.png?v=1727682058583'
                        price='69.000.000'
                    />
                </div>
            </div>


        </>
    )
}

export default ProductDetails