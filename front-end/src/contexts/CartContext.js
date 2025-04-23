import { createContext, useState, useEffect } from 'react';
import cartApi from '../api/cartApi';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const userId = localStorage.getItem('user_id');
    const [cartCount, setCartCount] = useState(0);

    const fetchCartCount = async () => {
        try {
            const res = await cartApi.getCart(userId); // sửa theo API của bạn
            setCartCount(res.data.length); // hoặc res.data.totalQuantity tuỳ cấu trúc
        } catch (error) {
            console.error('Lỗi lấy số lượng giỏ hàng:', error);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchCartCount();
        }
    }, [userId]);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount, fetchCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
