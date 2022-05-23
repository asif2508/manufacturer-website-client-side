import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-neutral text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;