import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import clean from '../../access-11/logo-.png';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleSignOut = () => {
        LogOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div className="navbar bg-slate-50 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to="/services" className="justify-between">
                                Services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to="/">Item 1</Link></li>
                                <li><Link to="/">Item 2</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl w-28 h-28 lg:w-52 lg:h-28">
                    <img src={clean} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-xl'><Link to="/">Home</Link></li>
                    <li className='text-xl' tabIndex={0}>
                        <Link to="/services">
                            Services
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            <li className='text-base'><Link to="/">Item 1</Link></li>
                            <li className='text-base'><Link to="/">Item 2</Link></li>
                        </ul>
                    </li>
                    <li className='text-xl'><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <div className="navbar-end">

                {user?.email ?
                    <>
                        <img src={user?.photoURL} alt="" />
                        <button onClick={handleSignOut} className="btn btn-outline btn-accent"> LogOut</button>

                    </>
                    :
                    <>
                        <Link to="/login" className="btn btn-outline btn-accent">LogIn</Link>
                        <Link to="/register" className="btn btn-outline btn-warning ml-2">Register</Link>

                    </>

                }

            </div>
        </div>
    );
};

export default Header;