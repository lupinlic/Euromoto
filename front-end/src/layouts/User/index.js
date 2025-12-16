import Header from "./Header";
import Footer from "./Footer";
import NotificationBell from "../../components/NotificationBell";
import ContactIcon from "../../components/ContactIcon";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function User({ children }) {
  const location = useLocation();
  return (
    <div>
      <NotificationBell />
      <ContactIcon />
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
export default User;
