import React from 'react'
import Crumb from '../../components/Crumb'
import { Helmet } from "react-helmet-async";

function News() {
    return (
        <>
            <Helmet>
                <title>Tin tức</title>
            </Helmet>
            <Crumb
                name='Tin tức' />
            <div className='container'>
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
        </>
    )
}

export default News