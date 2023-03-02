import React from "react";
import khongsanpham from "../assets/images/product/large-size/khongsanpham.jpg";

import "../components/Style/Style.css";
import tdImg from "../assets/images/product/large-size/capsac.jpg";
import Helmet from "./../components/Helmet/Helmet";
import { cartAction } from "./../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet>
      <div className="wishlist-area pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {cartItems.length === 0 ? (
                <div className="text-center">
                  <img src={khongsanpham} alt="" />
                  <h2 className="text-center fs-4 text-text-secondary">
                    Chưa có sản phẩm trong giỏ hàng
                  </h2>
                </div>
              ) : (
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="li-product-thumbnail">Ảnh sản phẩm</th>
                          <th className="cart-product-name">Tên sản phẩm</th>
                          <th className="li-product-price">Giá Tiền</th>
                          <th className="li-product-stock-status li-product-remove">
                            Qty
                          </th>
                          <th className="li-product-remove">Xóa sản phẩm</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <Tr item={item} key={index} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row">
        <div className="col-12 text-end pt-5 ">
              <div className="row ">
                <div className="col-12 pe-3">
                  <h3>Tổng Tiền</h3>
                </div>
                <div className="col-12">
                  <h4><span>{totalAmount}</span>
                  <span>₫</span></h4>
                  
                </div>
                <div className="col-12 pt-3">
                  {" "}
                  <span>
                    <button className="TTMS me-2">
                      <Link to="/shop">Tiếp tục mua sắm</Link>
                    </button>
                  </span>
                  <span>
                    <button className="TTMS">
                      <Link to="/checkout"> thanh toán</Link>
                    </button>
                  </span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartAction.deleteItem(item.id));
  };
  return (
    <tr>
      <td className="li-product-thumbnail">
        <a href="">
          <img src={item.imgUrl} className="tdimg" />
        </a>
      </td>
      <td className="li-product-name">
        <a href="">{item.productName}</a>
      </td>
      <td className="li-product-price">
        <span className="amount">{item.price}<span>₫</span></span>
      </td>
      <td className="li-product-stock-status ">
        <span className="in-stock">{item.quantily}</span>
      </td>
      <td className="li-product-remove">
        <motion.i whileTap={{ scale: 1.2 }} onClick={deleteProduct}>
          <i class="ri-delete-bin-6-line tdelete "></i>
        </motion.i>
      </td>
    </tr>
  );
};
export default Cart;
