//public routes
import Home from "../pages/User/Home";
import Admin from "../layouts/Admin";
import HomeAd from "../pages/Admin/Home";




const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/Admin', component: HomeAd, layout: Admin
    },


];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
};