import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="footer footer-center p-10 bg-black text-base-content rounded">
            <div className="grid md:grid-flow-col grid-flow-row gap-4">
                <Link className="text-white text-base link link-hover">About us</Link>
                <Link className="text-white text-base link link-hover">Contact</Link>
                <Link className="text-white text-base link link-hover">Jobs</Link>
                <Link className="text-white text-base link link-hover">Press kit</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link className='text-white'>
                        <BsFacebook className='w-6 h-6'></BsFacebook>
                    </Link>
                    <Link className='text-white'>
                        <BsInstagram className='w-6 h-6'></BsInstagram>
                    </Link>
                    <Link className='text-white'>
                        <BsTwitter className='w-6 h-6'></BsTwitter>
                    </Link>
                </div>
            </div>
            <div>
                <p className='text-base font-semibold text-white'>Copyright © {year} - All right reserved by Manufacture.</p>
            </div>
        </footer>
    );
};

export default Footer;