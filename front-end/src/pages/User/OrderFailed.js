// OrderFailed.jsx
const OrderFailed = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h2>❌ Đặt hàng thất bại</h2>
            <p>Thanh toán không thành công hoặc có lỗi xảy ra.</p>
            <button onClick={() => window.location.href = '/cart'}>
                Quay lại giỏ hàng
            </button>
        </div>
    );
};

export default OrderFailed;
