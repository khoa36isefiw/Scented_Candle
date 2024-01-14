import BlogDetails from '../components/BlogDetails/BlogDetails';
import DefaultLayout from '../layouts/DefaultLayouts/DefaultLayouts';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NewArrivals from '../pages/NewArrivals';
import RecoverPassword from '../pages/RecoverPassword';
import RegisterAccount from '../pages/RegisterAccount';
import ShoppingCart from '../pages/ShoppingCart';
const publicRoutes = [
    { path: '/', component: HomePage, layout: DefaultLayout },
    { path: '/account/login', component: LoginPage, layout: DefaultLayout },
    { path: '/account/register', component: RegisterAccount, layout: DefaultLayout },
    { path: '/account/recover', component: RecoverPassword, layout: DefaultLayout },
    { path: '/cart', component: ShoppingCart, layout: DefaultLayout },
    { path: '/blogs/:id', component: BlogDetails, layout: DefaultLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
