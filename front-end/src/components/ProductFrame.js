import React, { useState } from "react";
import "../styles/productFrame.css"
import { useNavigate } from "react-router-dom";

const ProductFrame = ({ image, name, price }) => {
    const [liked, setLiked] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleToProductDetails = () => {
        navigate("/ProductDetails"); // Chuyển đến trang mới
    };
    const handleClick = () => {
        setLiked(!liked);

        // Cập nhật thông báo
        setMessage(liked ? "Đã xóa khỏi danh sách yêu thích" : "Đã thêm vào danh sách yêu thích");

        // Tự động ẩn thông báo sau 2 giây
        setTimeout(() => setMessage(""), 2000);
    };
    return (
        <>
            <div className='product-card'>
                <div className='product-thumnail'>
                    <img className='' style={{ width: '100%', height: '155px' }} src={image} alt={name} />
                    <div className="half-circle">
                        <div style={{ display: 'inline-block', position: 'absolute', right: '27%', top: '-15%' }}>
                            <button onClick={handleToProductDetails} style={{ borderRadius: '20px', padding: '8px', background: '#D71920', color: '#fff', border: 'none' }}>Xem chi tiết</button>
                        </div>
                    </div>
                </div>
                <div className='product-info'>
                    <h4>{name}</h4>
                    <div className='price-box'>{price}
                        <span className='line-under'>đ</span>
                    </div>
                </div>
                <div
                    className={`heart ${liked ? "liked" : ""}`}
                    onClick={handleClick}>
                    {liked ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
                </div>
                {message && <div style={{ padding: '8px', position: 'absolute', width: '200px', height: '70px', border: '1px solid red', background: '#fff', color: 'red', top: '50%', right: '50%', zIndex: '10' }}>
                    {message}
                </div>}
            </div>


        </>
    )
}

export default ProductFrame