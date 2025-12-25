import React, { useEffect, useRef, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import orderApi from '../../api/orderApi'
import cartApi from '../../api/cartApi'
import { CartContext } from '../../contexts/CartContext'

function Thanks() {
    const location = useLocation()
    const navigate = useNavigate()
    const { fetchCartCount } = useContext(CartContext)
    const hasOrdered = useRef(false)
    const apiUrl = process.env.REACT_APP_API_URL

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const extraDataEncoded = queryParams.get("extraData")
        const resultCode = queryParams.get("resultCode")

        // ❌ Thanh toán thất bại → sang trang thông báo
        if (resultCode !== "0") {
            navigate('/order-failed')
            return
        }

        if (extraDataEncoded && !hasOrdered.current) {
            hasOrdered.current = true

            const extraData = JSON.parse(decodeURIComponent(extraDataEncoded))
            const payload = extraData.payload
            const cartid = extraData.cartid

            const createOrder = async () => {
                try {
                    await orderApi.addOrder(payload)

                    // await sendEmailNotification(payload)

                    await Promise.all(
                        cartid?.map(item =>
                            item ? cartApi.removetocart(item) : null
                        )
                    )

                    fetchCartCount()
                } catch (err) {
                    console.error("Tạo đơn hàng thất bại:", err)
                    navigate('/Order-Failed') 
                }
            }

            createOrder()
        }
    }, [location.search])

    const sendEmailNotification = async (payload) => {
        try {
            const response = await fetch(`${apiUrl}/api/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    paymentMethod: "momo",
                    customerEmail: payload.customerEmail,
                    orderDetails: payload.orderDetails.map(item => ({
                        ProductName: item.ProductName,
                        Quantity: item.Quantity,
                        Price: item.Price,
                    })),
                    orderId: payload.orderId,
                    totalPrice: payload.totalPrice,
                    shippingAddress: payload.shippingAddress,
                    customerName: payload.customerName,
                    customerPhone: payload.customerPhone,
                }),
            })

            if (!response.ok) {
                throw new Error('Send email failed')
            }
        } catch (error) {
            console.error('Error sending email:', error)
            // ❗ KHÔNG redirect khi gửi mail fail
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center">
            <img
                style={{ width: '500px' }}
                src="https://www.peeps-hie.org/wp-content/uploads/2020/10/Thank-you-tiny-914x1024.jpg"
                alt="success"
            />
        </div>
    )
}

export default Thanks
