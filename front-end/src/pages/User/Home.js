import React, { useState, useEffect } from "react";
import Title from '../../components/Title'
import CategoryCard from '../../components/CategoryCard'
import "../../styles/home.css"
import ProductFrame from "../../components/ProductFrame";
import Bt from "../../components/Bt";
import { Helmet } from "react-helmet-async";

function Home() {
    const [timeLeft, setTimeLeft] = useState({
        days: 128,
        hours: 14,
        minutes: 58,
        seconds: 24,
    });

    // Hàm đếm ngược
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    } else if (hours > 0) {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    } else if (days > 0) {
                        days--;
                        hours = 23;
                        minutes = 59;
                        seconds = 59;
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <Helmet>
                <title>Trang chủ </title>
            </Helmet>
            <div>
                <img className='w-100' src='https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/slider_1.jpg?1741709416058' />
                <div className='container'>
                    <Title
                        titleName='Danh mục'
                        titleDes='nổi bật'
                    ></Title>
                    <div className='row'>
                        <div className='col-md-3 p-1'>
                            <CategoryCard
                                imgUrl='https://bizweb.dktcdn.net/thumb/large/100/519/812/collections/xe-tay-ga.jpg?v=1727746181450'
                                categoryName='Xe tay ga'
                            ></CategoryCard>
                        </div>
                        <div className='col-md-3 p-1'>
                            <CategoryCard
                                imgUrl='https://bizweb.dktcdn.net/thumb/large/100/519/812/collections/xe-so.jpg?v=1727746174140'
                                categoryName='Xe số'
                            ></CategoryCard>
                        </div>
                        <div className='col-md-3 p-1'>
                            <CategoryCard
                                imgUrl='https://bizweb.dktcdn.net/thumb/large/100/519/812/collections/xe-con-tay.jpg?v=1727746225237'
                                categoryName='Xe côn tay'
                            ></CategoryCard>
                        </div>
                        <div className='col-md-3 p-1'>
                            <CategoryCard
                                imgUrl='https://bizweb.dktcdn.net/thumb/large/100/519/812/collections/xe-pkl.jpg?v=1727746209677'
                                categoryName='Xe phân khối lớn'
                            ></CategoryCard>
                        </div>
                    </div>
                    {/* deal */}
                    <Title
                        titleName='Deal'
                        titleDes='nổi bật'
                    ></Title>
                    <div className='block-product-list mt-5'>
                        <div className='count-down d-flex align-items-center justify-content-center'>
                            <strong>{timeLeft.days}</strong> Ngày :
                            <strong>{timeLeft.hours}</strong> Giờ :
                            <strong>{timeLeft.minutes}</strong> Phút :
                            <strong>{timeLeft.seconds}</strong> Giây
                        </div>


                        <div className='block-product-flash d-flex'>
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
                        <div className="d-flex align-items-center justify-content-center mt-4 block-product-bt">
                            <Bt
                                name='Xem tất cả'
                            />
                        </div>
                    </div>
                    {/*  */}
                    <div className="row mt-5 ">
                        <div className="col-md-6 image-hover1">
                            <img className="w-100" src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/banner_three_1.jpg?1741709416058" />
                        </div>
                        <div className="col-md-6 image-hover1">
                            <img className="w-100" src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/banner_three_2.jpg?1741709416058" />
                        </div>
                    </div>
                    {/*  */}
                    <Title
                        titleName='Sản phẩm'
                        titleDes='nổi bật'
                    ></Title>
                    <div className="row" style={{ height: '500px', borderRadius: '15px', width: '100%', background: '#f0efef' }}>
                        <div className="col-md-6 p-0 image-hover1">
                            <img style={{ borderRadius: '15px', width: '100%', height: '500px' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/image_product_3.png?1741709416058" />
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className=" row align-items-center justify-content-center">
                                <div className="col-md-6 d-flex align-items-center justify-content-end">
                                    <ProductFrame
                                        image='https://bizweb.dktcdn.net/100/519/812/products/above-me-only-sky-004.png?v=1727682764433'
                                        name='Exciter 155 VVA'
                                        price='54.000.000'
                                    />
                                </div>
                                <div className="col-md-6" style={{ paddingRight: '0' }}>
                                    <ProductFrame
                                        image='https://bizweb.dktcdn.net/100/519/812/products/2022-t115fs-5ltd-ms1-vnm-004.png?v=1727682487937'
                                        name='Jupiter FI'
                                        price='30.240.000'
                                    />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mt-3 block-product-bt">
                                <Bt
                                    name='Xem thêm'
                                />
                            </div>
                        </div>
                    </div>
                    {/* all sản phẩm */}
                    <Title
                        titleName='Tất cả'
                        titleDes='sản phẩm'
                    ></Title>
                    <div className='d-flex align-items-center justify-content-center category-all mt-3'>
                        <ul className='d-flex'>
                            <li className="category-all_active">Honda</li>
                            <li>Yamaha</li>
                            <li>SYM</li>
                        </ul>
                    </div>
                    <div className="d-flex flex-wrap mt-3 " style={{ rowGap: '20px' }}>
                        <div className=" image-hover1" style={{ height: 'auto', marginRight: '20px' }}>
                            <img style={{ width: '486px', height: '336px' }} src="https://bizweb.dktcdn.net/100/519/812/files/dm12.png?v=1727830403260" />
                        </div>
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
                    {/*  */}
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <Title
                                titleName='Dịch vụ'
                                titleDes='nổi bật'
                            ></Title>
                            <p>Dola đảm bảo rằng mọi khách hàng đều có được trải nghiệm và đảm bảo xe luôn trong trạng thái tốt nhất.</p>
                            <div className="d-flex align-items-center mt-2">
                                <div style={{ borderRadius: '50%', padding: '12px', background: '#F6CACC' }}>
                                    <img style={{ width: '50px', height: '50px' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/icon_dv_1.png?1741709416058" />
                                </div>
                                <p style={{ fontWeight: '600', marginLeft: '12px', marginBottom: '0', fontSize: '20px', color: 'red' }}>BẢO DƯỠNG XE</p>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <div style={{ borderRadius: '50%', padding: '12px', background: '#F6CACC' }}>
                                    <img style={{ width: '50px', height: '50px' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/icon_dv_2.png?1741709416058" />
                                </div>
                                <p style={{ fontWeight: '600', marginLeft: '12px', marginBottom: '0', fontSize: '20px', color: 'red' }}>PHỤ TÙNG CHÍNH HÃNG</p>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <div style={{ borderRadius: '50%', padding: '12px', background: '#F6CACC' }}>
                                    <img style={{ width: '50px', height: '50px' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/icon_dv_3.png?1741709416058" />
                                </div>
                                <p style={{ fontWeight: '600', marginLeft: '12px', marginBottom: '0', fontSize: '20px', color: 'red' }}>SỬA CHỮA LƯU ĐỘNG</p>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <div style={{ borderRadius: '50%', padding: '12px', background: '#F6CACC' }}>
                                    <img style={{ width: '50px', height: '50px' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/icon_dv_4.png?1741709416058" />
                                </div>
                                <p style={{ fontWeight: '600', marginLeft: '12px', marginBottom: '0', fontSize: '20px', color: 'red' }}>VỆ SINH BUỒNG ĐỐT</p>
                            </div>

                        </div>
                        <div className="col-md-7">
                            <img className="w-100" src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/image_dv_4.png?1741709416058" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="image-hover1 mt-5" style={{ height: '402px' }}>
                        <img className="w-100" src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/banner_one.jpg?1741709416058" />
                    </div>
                    {/* thương hiệu */}
                    <Title
                        titleName='Thương hiệu'
                        titleDes='nổi bật'
                    ></Title>
                    <div className="row">
                        <div className="col-md-4" style={{ height: '500px' }}>
                            <div className="image-hover1" style={{ border: '1px solid #e0dfdf', borderRadius: '10px', padding: '10px' }}>
                                <div style={{ height: '431px' }}>
                                    <img className="w-100" src="https://bizweb.dktcdn.net/thumb/large/100/519/812/collections/honda-logo.png?v=1719892616953" />
                                </div>
                                <button className="" style={{ border: 'none', borderRadius: '5px', width: '100%', height: '40px', textAlign: 'center', background: '#d71920', color: '#fff' }}>Honda</button>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ height: '500px' }}>
                            <div className="image-hover1" style={{ border: '1px solid #e0dfdf', borderRadius: '10px', padding: '10px' }}>
                                <div className="d-flex align-items-center justify-content-center" style={{ height: '431px' }}>
                                    <img className="w-100" src="https://bizweb.dktcdn.net/thumb/large/100/519/812/collections/1280px-yamaha-motor-logo-full-sv.png?v=1719892640410" />
                                </div>
                                <button className="" style={{ border: 'none', borderRadius: '5px', width: '100%', height: '40px', textAlign: 'center', background: '#d71920', color: '#fff' }}>Yamaha</button>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ height: '500px' }}>
                            <div className="image-hover1" style={{ border: '1px solid #e0dfdf', borderRadius: '10px', padding: '10px' }}>
                                <div className="d-flex align-items-center justify-content-center" style={{ height: '431px' }}>
                                    <img className="w-100" src="https://bizweb.dktcdn.net/thumb/large/100/519/812/collections/untitled.png?v=1719892685533" />
                                </div>
                                <button className="" style={{ border: 'none', borderRadius: '5px', width: '100%', height: '40px', textAlign: 'center', background: '#d71920', color: '#fff' }}>SYM</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid evaluate mt-5 text-white">
                    <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
                        <p style={{ fontSize: '40px', fontWeight: '600', marginBottom: '20px' }}>Đánh giá khách hàng</p>
                        <div className="d-flex">
                            <div className="evaluate-frame">
                                <p>Tôi rất ưng khi mua xe tại đây, từ chất lượng xe, phụ tùng, thái độ của nhân viên rất vui vẻ và nhiệt tình, tôi sẽ luôn ủng hộ cửa hàng.</p>
                                <div className="d-flex align-items-center">
                                    <img style={{ width: '96px', height: '96px', borderRadius: '50%' }} src="https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/479675881_1430404127937109_1011207244040765089_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGiApKbCSIVQzQQRTuy7Xf9x_AtavXkQJHH8C1q9eRAkacjDb8DJ90KdmQJiiVN8UmUS7_aPdl8YdWEdWbXBzVm&_nc_ohc=xE0MBy1U2ScQ7kNvgGkDPwd&_nc_oc=AdnkPFz8v6awoV7L1C1H6_m0OOnvoUmlcITY-cqLVUIe0TYq9E0TntCirAqx6F1SV85PTweVNm7WEvEkB6MF04t_&_nc_zt=23&_nc_ht=scontent.fhph2-1.fna&_nc_gid=zdI0b7MKGDECTSQLra8UuA&oh=00_AYGxCNy2yVO-Gj8lSuC4ba1pb_1Y36A9ynG74Rbth4fomQ&oe=67ED2209" />
                                    <p style={{ marginLeft: '12px', fontSize: '18px', fontWeight: '500' }}>
                                        <span>Khắc Đạt</span><br />
                                        <span>Khách hàng thành viên</span>
                                    </p>

                                </div>
                            </div>
                            <div className="evaluate-frame">
                                <p>Tôi rất ưng khi mua xe tại đây, từ chất lượng xe, phụ tùng, thái độ của nhân viên rất vui vẻ và nhiệt tình, tôi sẽ luôn ủng hộ cửa hàng.</p>
                                <div className="d-flex align-items-center">
                                    <img style={{ width: '96px', height: '96px', borderRadius: '50%' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/section_review_2.png?1741709416058" />
                                    <p style={{ marginLeft: '12px', fontSize: '18px', fontWeight: '500' }}>
                                        <span>Sở Bình</span><br />
                                        <span>Khách hàng thành viên</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* tin tức */}
                <div className="container">
                    <Title
                        titleName='Tin tức'
                        titleDes='mới nhất'
                    ></Title>
                    <div className="row mt-4 ">
                        <div className="col-md-4 news">
                            <div className="image-hover1">
                                <img style={{ width: '438px', height: '239px' }} src="https://bizweb.dktcdn.net/100/519/812/articles/32mp7njpslmp2crbcd5y.jpg?v=1727837931083" />
                            </div>
                            <p className="news-title" style={{ fontSize: '20px', fontWeight: '600', marginTop: '12px' }}>Honda Việt Nam giới thiệu Future 125 FI 2024 mới - Vững chuẩn riêng, định bản sắc</p>
                            <p>Hà Nội, ngày 03 tháng 01 năm 2024, Công ty Honda Việt Nam (HVN) giới thiệu mẫu xe Future 125 FI 2024. Trải qua 25 năm đồng hành cùng khách hàng Việt kể...</p>
                        </div>
                        <div className="col-md-4 news">
                            <div className="image-hover1">
                                <img style={{ width: '438px', height: '239px' }} src="https://bizweb.dktcdn.net/100/519/812/articles/svg92yq0adnphitq3gjn.jpg?v=1727837901420" />
                            </div>
                            <p className="news-title" style={{ fontSize: '20px', fontWeight: '600', marginTop: '12px' }}>Honda Việt Nam giới thiệu Rebel 500 phiên bản mới - Định chất khí phách</p>
                            <p>Hà Nội, ngày 18 tháng 01 năm 2024, Công ty Honda Việt Nam (HVN) giới thiệu Rebel 500 2024 với bộ sưu tập màu mới, khẳng định vị thế một...</p>
                        </div>
                        <div className="col-md-4 news">
                            <div className="image-hover1">
                                <img style={{ width: '438px', height: '239px' }} src="https://bizweb.dktcdn.net/100/519/812/articles/kkoowlvpld73jtxiwjbv.jpg?v=1727837877230" />
                            </div>
                            <p className="news-title" style={{ fontSize: '20px', fontWeight: '600', marginTop: '12px' }}>Honda Việt Nam giới thiệu Future 125 FI 2024 mới - Vững chuẩn riêng, định bản sắc</p>
                            <p>Hà Nội, ngày 03 tháng 01 năm 2024, Công ty Honda Việt Nam (HVN) giới thiệu mẫu xe Future 125 FI 2024. Trải qua 25 năm đồng hành cùng khách hàng Việt kể...</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="container evaluate2 mt-5">
                    <div className="row h-100">
                        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-white text-center">
                            <img style={{ width: '60px' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/chinhsach_1.png?1741709416058" />
                            <h6>Miễn phí vận chuyển</h6>
                            <p>Cho tất cả đơn hàng trong nội thành Hà Nội</p>

                        </div>
                        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-white text-center">
                            <img style={{ width: '60px' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/chinhsach_2.png?1741709416058" />
                            <h6>Miễn phí đổi - trả</h6>
                            <p>Đối với sản phẩm lỗi sản xuất hoặc vận chuyển</p>

                        </div>
                        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-white text-center">
                            <img style={{ width: '60px' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/chinhsach_3.png?1741709416058" />
                            <h6>Hỗ trợ nhanh chóng</h6>
                            <p>Gọi hotline 19006750 để được hỗ trợ ngay lập tức</p>

                        </div>
                        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-white text-center">
                            <img style={{ width: '60px' }} src="https://bizweb.dktcdn.net/100/519/812/themes/954445/assets/chinhsach_4.png?1741709416058" />
                            <h6>Ưu đãi thành viên</h6>
                            <p>Đăng ký thành viên để được nhận nhiều khuyến mãi</p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home