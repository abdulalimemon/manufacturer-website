import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { HiMenuAlt2 } from "react-icons/hi";
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';


const Dashboard = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='container mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content py-5">
                    {/* <!-- Page content here --> */}
                    <div className='flex items-center justify-start'>
                        <label htmlFor="dashboard-drawer" className="btn btn-primary ml-2 md:ml-5 lg:hidden"><HiMenuAlt2 className='w-5 h-5'></HiMenuAlt2></label>
                        <h2 className='text-xl ml-5 font-semibold text-black'>Hey, <span className='text-green-400'>{user.displayName}</span></h2>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-10/12 lg:w-64 bg-black text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to=''>Dashboard</Link></li>
                        <li><Link to='my-profile'>My Profile</Link></li>
                        <li><Link to='my-orders'>My Orders</Link></li>
                        <li><Link to='add-review'>Add Review</Link></li>
                        <li><Link to=''></Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;