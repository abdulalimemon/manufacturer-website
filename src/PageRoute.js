import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import AddAReview from './pages/Dashboard/AddAReview';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Home from './pages/Home/Home';
import ForgotPassword from './pages/Login/ForgotPassword';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import Purchase from './pages/Home/Purchase';
import Portfolio from './pages/Portfolio/Portfolio';
import AllReview from './pages/AllReview/AllReview';
import AddAProduct from './pages/Dashboard/AddAProduct';

const PageRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/purchase/:ToolsId' element={<RequireAuth>
                    <Purchase></Purchase>
                </RequireAuth>}></Route>
                <Route path='/dashboard' element={<RequireAuth>
                    <Dashboard></Dashboard>
                </RequireAuth>}>
                    <Route index element={<DashboardHome></DashboardHome>}></Route>
                    <Route path='my-orders' element={<MyOrders></MyOrders>}></Route>
                    <Route path='my-profile' element={<MyProfile></MyProfile>}></Route>
                    <Route path='add-review' element={<AddAReview></AddAReview>}></Route>
                    <Route path='add-tool' element={<AddAProduct></AddAProduct>}></Route>
                </Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/all-review' element={<AllReview></AllReview>}></Route>
                <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </>
    );
};

export default PageRoute;