import { createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute";
import Shipping from "./components/Shipping";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp";
import Main from "./layouts/Main";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";

export  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('products.json'),
                element: <Shop></Shop>
            },
            {
                path: 'orders',
                loader: productsAndCartLoader,
                element: <Orders></Orders>
            },
            {
                path: 'inventory',
                element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
            },
            {
                path: 'about',
                element: <PrivateRoute><About></About></PrivateRoute>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/shipping',
                element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
            }
        ]
    },

])