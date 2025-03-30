import React from 'react'
import Crumb from '../../components/Crumb'
import { Helmet } from "react-helmet-async";
import ProductFrame from '../../components/ProductFrame';

function LikeProduct() {
    return (
        <div>
            <Helmet>
                <title>Sản phẩm yêu thích</title>
            </Helmet>
            <Crumb
                name='Sản phẩm yêu thích' />
            <div className='container mt-5'>
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
        </div>
    )
}

export default LikeProduct