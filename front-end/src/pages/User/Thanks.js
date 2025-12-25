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
        const paymentMethod = queryParams.get("payment")
        const resultCode = queryParams.get("resultCode")
        const extraDataEncoded = queryParams.get("extraData")

        // ✅ COD → không cần xử lý gì thêm
        if (paymentMethod === "cod") {
            return
        }

        // ❌ MoMo thất bại
        if (resultCode && resultCode !== "0") {
            navigate('/order-failed')
            return
        }

        // ✅ MoMo thành công
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
                        cartid.map(id => cartApi.removetocart(id))
                    )

                    fetchCartCount()
                } catch (err) {
                    navigate('/order-failed')
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
