import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navbar from '../pages/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;