import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home';
import ForgotPassword from './pages/Login/ForgotPassword';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

const PageRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </>
    );
};

export default PageRoute;