import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1 max-w-screen-xl mx-auto w-full px-4 md:px-8 py-4 md:py-8">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;