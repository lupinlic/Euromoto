//public routes
import Home from "../pages/User/Home";
import Admin from "../layouts/Admin";
import HomeAd from "../pages/Admin/Home";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Product from "../pages/User/Product";
import ProductDetails from "../pages/User/ProductDetails";
import Cart from "../pages/User/Cart";
import Account from "../pages/User/Account";
import Checkout from "../pages/User/Checkout";
import Thanks from "../pages/User/Thanks";
import Introduce from "../pages/User/Introduce";
import Contact from "../pages/User/Contact";
import Question from "../pages/User/Question";
import StoreSystem from "../pages/User/StoreSystem";
import LikeProduct from "../pages/User/LikeProduct";
import News from "../pages/User/News";
import NewDetails from "../pages/User/NewsDetails";
// admin
import Accounts from "../pages/Admin/Accounts/Account";
import Category from "../pages/Admin/Category/Category";

const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/Login', component: Login
    },
    {
        path: '/Register', component: Register
    },
    {
        path: '/Product', component: Product,
    },
    {
        path: '/ProductDetails', component: ProductDetails
    },
    {
        path: '/Cart', component: Cart
    },
    {
        path: '/Account', component: Account
    },
    {
        path: '/Checkout', component: Checkout
    },
    {
        path: '/Thanks', component: Thanks
    },
    {
        path: '/Introduce', component: Introduce
    },
    {
        path: '/Contact', component: Contact
    },
    {
        path: '/Question', component: Question
    },
    {
        path: '/StoreSystem', component: StoreSystem
    },
    {
        path: '/LikeProduct', component: LikeProduct
    },
    {
        path: '/News', component: News
    },
    {
        path: '/NewsDetails/:id', component: NewDetails, Element: NewDetails
    },


    // admin
    {
        path: '/Admin', component: HomeAd, layout: Admin
    },
    {
        path: '/Admin/Accounts', component: Accounts, layout: Admin
    },
    {
        path: '/Admin/Category', component: Category, layout: Admin
    },


];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
};