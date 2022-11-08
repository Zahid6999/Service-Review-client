
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layOut/Main';
import Home from '../Page/Home/Home/Home';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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