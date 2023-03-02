import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";

import { Routes, Route, Navigate } from "react-router-dom";
import SuccessCK from './../pages/SuccessCK';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />

      <Route path="cart" element={<Cart />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="/cuccessCK" element={<SuccessCK />} />

    </Routes>
  );
};

export default Routers;
