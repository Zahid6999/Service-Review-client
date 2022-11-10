
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layOut/Main';
import Blog from '../Page/Blog/Blog';
import CheckOut from '../Page/CheckOut/CheckOut';
import Home from '../Page/Home/Home/Home';
import Login from '../Page/Login/Login';
import Register from '../Page/Login/Register';
import Orders from '../Page/Orders/Orders';



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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
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