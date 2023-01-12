import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const UserSignOut = () => {
        signOut(auth);
    }

    return (
        <div className="navbar bg-black py-0">
            <div className='container mx-auto'>
                <div className="navbar justify-between py-0">
                    <NavLink to='/' className="font-semibold text-xl text-white">SpacesWare</NavLink>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/' className='text-lg font-semibold text-center mb-1'>Home</NavLink></li>
                            <li><NavLink to='/blogs' className='text-lg font-semibold text-center mb-1'>Blogs</NavLink></li>
                            <li><NavLink to='/blogs' className='text-lg font-semibold text-center mb-1'>Portfolio</NavLink></li>
                            {
                                user && <li><NavLink to='/dashboard' className='text-lg font-semibold text-center mb-1'>Dashboard</NavLink></li>
                            }
                            {
                                user ? <li><Link onClick={() => { UserSignOut() }} className='text-lg font-semibold text-center mb-1'>Sign Out</Link></li>
                                    : <li><NavLink to='/login' className='text-lg font-semibold text-center mb-1'>Login</NavLink></li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className='text-md font-bold mr-2 text-white'>Home</NavLink></li>
                        <li><NavLink to='/blogs' className='text-md font-bold mr-2 text-white'>Blogs</NavLink></li>
                        <li><NavLink to='/portfolio' className='text-md font-bold mr-2 text-white'>Portfolio</NavLink></li>
                        {
                            user && <li><NavLink to='/dashboard' className='text-md font-bold mr-2 text-white'>Dashboard</NavLink></li>
                        }
                        {
                            user ? <li><Link onClick={() => { UserSignOut() }} className='text-md font-bold mr-2 text-white'>Sign Out</Link></li>
                                : <li><NavLink to='/login' className='text-md font-bold mr-2 text-white'>Login</NavLink></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;