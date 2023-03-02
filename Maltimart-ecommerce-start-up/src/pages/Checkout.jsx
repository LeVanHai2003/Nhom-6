import React from 'react'
import Helmet from './../components/Helmet/Helmet';
import '../components/Style/Style.css'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import SuccessCK from './SuccessCK';

const Checkout = () => {
  const navigate = useNavigate();


  
const totalQty = useSelector(state => state.cart.totalQuanlity);
const totalAmount = useSelector(state => state.cart.totalAmount);
const successhaldel = () => {
 
  
  if(totalQty === 0){
     toast.success("chưa có sản phẩm");
  }else {
    
    toast.success("Mua hàng thành công");
    navigate('/cuccessCK')
  }
   
}


  return <Helmet>
      <div className="checkout-area pt-5 pb-3">
  <div className="container">
    
    <div className="row">
      <div className="col-lg-6 col-12">
        <form action="#">
          <div className="checkbox-form">
            <h3>Chi tiết thanh toán</h3>
            <div className="row">
              
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>Họ<span className="required">*</span></label>
                  <input placeholder type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>Tên <span className="required">*</span></label>
                  <input placeholder type="text" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="checkout-form-list">
                  <label>Tên công ty</label>
                  <input placeholder type="text" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="checkout-form-list">
                  <label>Địa chỉ <span className="required">*</span></label>
                  <input placeholder="Street address" type="text" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="checkout-form-list">
                  <label>Thành phố<span className="required">*</span></label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>Quận / Huyện <span className="required">*</span></label>
                  <input placeholder type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>Mã bưu chính <span className="required">*</span></label>
                  <input placeholder type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>Địa chỉ Email <span className="required">*</span></label>
                  <input placeholder type="email" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>Số điện thoại  <span className="required">*</span></label>
                  <input type="text" />
                </div>
              </div>
              {/* <div className="col-md-12">
                <div className="checkout-form-list create-acc">
                  <input id="cbox" type="checkbox" />
                  <label>Create an account?</label>
                </div>
                <div id="cbox-info" className="checkout-form-list create-account">
                  <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                  <label>Account password  <span className="required">*</span></label>
                  <input placeholder="password" type="password" />
                </div>
              </div> */}
            </div>
            
          </div>
        </form>
      </div>
      <div className="col-lg-6 col-12">
        <div className="your-order">
          <h3>Đơn hàng của bạn</h3>
          <div className="your-order-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="cart-product-name">Tổng số lượng</th>
                  <th className="cart-product-total">{totalQty} sản phẩm</th>
                </tr>
              </thead>
              
              <tfoot>
                <tr className="cart-subtotal">
                  <th>Tổng số tiền</th>
                  <td><span className="amount">{totalAmount}</span><span>₫</span></td>
                </tr>
                <tr className="cart-subtotal">
                  <th>phí vận chuyển</th>
                  <td><span className="amount">0</span><span>₫</span></td>
                </tr>
                <tr className="order-total">
                  <th>Tổng thanh toán</th>
                  <td><strong><span className="amount">{totalAmount}</span><span>₫</span></strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="payment-method">
            <div className="payment-accordion">
              
              <div className="order-button-payment" onClick={successhaldel}>
                <input defaultValue="Place order" type="submit" value="Thanh toán"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </Helmet>
    
  
}

export default Checkout
