import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>THis is Header </h1>
            <Link to='/'>home</Link>
        </div>
    );
};

export default Header;