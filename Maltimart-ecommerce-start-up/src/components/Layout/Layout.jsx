import React from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Routers from './../../routers/Routers';
import HomeBanner from "../Header/HomeBanner";

import HomeProductDienThoai from './../../Products/HomeProductDienThoai/HomeProductDienThoai';


const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
