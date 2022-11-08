
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layOut/Main';
import Blog from '../Page/Blog/Blog';
import Home from '../Page/Home/Home/Home';



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