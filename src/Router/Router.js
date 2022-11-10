
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layOut/Main';
import Blog from '../Page/Blog/Blog';
import CheckOut from '../Page/CheckOut/CheckOut';
import Home from '../Page/Home/Home/Home';
import Login from '../Page/Login/Login';
import Register from '../Page/Login/Register';
import Orders from '../Page/Orders/Orders';
import PrivateRouter from './PrivateRouter/PrivateRouter';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`https://assinment-11-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRouter> <Orders></Orders></PrivateRouter>
            }

        ]
    }
])
const Router = () => {
    return (
        <div>

        </div>
    );
};

export default Router;