import Header from "./Header";
import Footer from "./Footer";
import NotificationBell from "../../components/NotificationBell";
import ContactIcon from "../../components/ContactIcon";
function User({ children }) {
    return (
        <div >
            <NotificationBell />
            <ContactIcon />
            <Header />
            <div className="">{children}
            </div>
            <Footer />
        </div>
    );
}
export default User;