import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotificationBell() {
    const [showNotification, setShowNotification] = useState(false);

    return (
        <>
            <div className="zalo-bt">
                <i class="fas fa-message" style={{ color: '#fff' }}
                    onClick={() => setShowNotification(!showNotification)}></i>
                {showNotification && (
                    <div className="showmessage" style={{ position: 'absolute', width: '250px', height: '120px', background: '#fff', top: '-250%', right: '100%', borderRadius: '15px' }}>
                        <p onClick={() => setShowNotification(!showNotification)} style={{ position: 'absolute', right: '10px' }}>X</p>
                        <ul className="mt-3">
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png"
                                    alt="Zalo" className="" style={{ width: '40px' }} />
                                <span style={{ fontSize: '12px' }}>Chat với chúng tôi qua Zalo</span>
                            </li>
                            <li className="mt-3">
                                <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-gps-positioning-icon-design-psd-source-file-image_2289942.jpg"
                                    alt="Zalo" className="" style={{ width: '40px' }} />
                                <Link to="/StoreSystem"><span style={{ fontSize: '12px' }}>Thông tin cửa hàng</span></Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </>
    );
}
