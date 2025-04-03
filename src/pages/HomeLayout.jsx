import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;