import DefaultLayout from '../layouts/DefaultLayouts/DefaultLayouts';
import HomePage from '../pages/HomePage';
const publicRoutes = [
    { path: '/', component: HomePage, layout: DefaultLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
