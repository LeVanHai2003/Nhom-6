import React from 'react';


const Header = (props) => {
     return(
        <>
        <div>
  <div className="header-top">
    <div className="container">
      <div className="row">
        {/* Begin Header Top Left Area */}
        <div className="col-lg-3 col-md-4">
          <div className="header-top-left">
            <ul className="phone-wrap">
              <li><span>Telephone Enquiry:</span><a href="/#">(+123) 123 321 345</a></li>
            </ul>
          </div>
        </div>
        {/* Header Top Left Area End Here */}
        {/* Begin Header Top Right Area */}
        <div className="col-lg-9 col-md-8">
          <div className="header-top-right">
            <ul className="ht-menu">
              {/* Begin Setting Area */}
              <li>
                <div className="ht-setting-trigger"><span>Setting</span></div>
                <div className="setting ht-setting">
                  <ul className="ht-setting-list">
                    <li><a href="login-register.html">My Account</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="login-register.html">Sign In</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Header Top Right Area End Here */}
      </div>
    </div>
  </div>
  {/* Header Top Area End Here */}
  {/* Begin Header Middle Area */}
  <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
    <div className="container">
      <div className="row">
        {/* Begin Header Logo Area */}
        <div className="col-lg-3">
          <div className="logo pb-sm-30 pb-xs-30">
            <a href="index.html">
              <img src={process.env.PUBLIC_URL + 'images/menu/logo/1.jpg'}/>
            </a>
          </div>
        </div>
        {/* Header Logo Area End Here */}
        {/* Begin Header Middle Right Area */}
        <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
          {/* Begin Header Middle Searchbox Area */}
          <form action="#" className="hm-searchbox">
            <input type="text" placeholder="Enter your search key ..." />
            <button className="li-btn" type="submit"><i className="fa fa-search" /></button>
          </form>
          {/* Header Middle Searchbox Area End Here */}
          {/* Begin Header Middle Right Area */}
          <div className="header-middle-right">
            <ul className="hm-menu">
              {/* Begin Header Middle Wishlist Area */}
              <li className="hm-wishlist">
                <a href="wishlist.html">
                  <span className="cart-item-count wishlist-item-count">0</span>
                  <i className="fa fa-heart-o" />
                </a>
              </li>
              {/* Header Middle Wishlist Area End Here */}
              {/* Begin Header Mini Cart Area */}
              <li className="hm-minicart">
                <div className="hm-minicart-trigger">
                  
                  <span className="item-text">1.000.000đ
                    <span className="cart-item-count">2</span>
                  </span>
                </div>
                <span />
                <div className="minicart">
                  <ul className="minicart-product-list">
                    <li>
                      <a href="single-product.html" className="minicart-product-image">
                        <img src="images/product/small-size/5.jpg" alt="cart products" />
                      </a>
                      <div className="minicart-product-details">
                        <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                        <span>£40 x 1</span>
                      </div>
                      <button className="close" title="Remove">
                        <i className="fa fa-close" />
                      </button>
                    </li>
                    <li>
                      <a href="single-product.html" className="minicart-product-image">
                        <img src="images/product/small-size/6.jpg" alt="cart products" />
                      </a>
                      <div className="minicart-product-details">
                        <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                        <span>£40 x 1</span>
                      </div>
                      <button className="close" title="Remove">
                        <i className="fa fa-close" />
                      </button>
                    </li>
                  </ul>
                  <p className="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                  <div className="minicart-button">
                    <a href="shopping-cart.html" className="li-button li-button-fullwidth li-button-dark">
                      <span>View Full Cart</span>
                    </a>
                    <a href="checkout.html" className="li-button li-button-fullwidth">
                      <span>Checkout</span>
                    </a>
                  </div>
                </div>
              </li>
              {/* Header Mini Cart Area End Here */}
            </ul>
          </div>
          {/* Header Middle Right Area End Here */}
        </div>
        {/* Header Middle Right Area End Here */}
      </div>
    </div>
  </div>
  {/* Header Middle Area End Here */}
  {/* Begin Header Bottom Area */}
  <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Begin Header Bottom Menu Area */}
          <div className="hb-menu">
            <nav  >
              <ul>
                <li><a href="index.html">Trang chủ</a>
                </li>
                <li className="megamenu-holder"><a href="/#">Danh mục phụ kiện</a>
                  <ul className="megamenu hb-megamenu">
                    <li><a href="dienthoai.html">Điện thoại</a>
                      <ul>
                        <li><a href="capsac.html">Cáp sạc</a></li>
                        <li><a href="sacduphong.html">Sạc dự phòng</a></li>
                        <li><a href="/#">Ốp lưng</a></li>
                        <li><a href="/#">Tai nghe</a></li>
                        <li><a href="/#">Gậy chụp ảnh</a></li>
                      </ul>
                    </li>
                    <li><a href="maytinhlaptop.html">Máy tính Laptop</a>
                      <ul>
                        <li><a href="chuot.html">Chuột</a></li>
                        <li><a href="banphim.html">Bàn Phím</a></li>
                        <li><a href="/#">Túi chống sốc</a></li>
                        <li><a href="/#">Tai nghe máy tính</a></li>
                      </ul>
                    </li>
                    <li><a href="maytinhbang.html">Máy tính bảng</a>
                      <ul>
                        <li><a href="banphimmtb.html">Bàn phím </a></li>
                        <li><a href="butcamung.html">Bút cảm ứng</a></li>
                        <li><a href="/#">Bao da màn hình</a></li>
                        <li><a href="/#">Giá đỡ</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="login-register.html">My Account</a></li>
              </ul>
            </nav>
          </div>
          {/* Header Bottom Menu Area End Here */}
        </div>
      </div>
    </div>
  </div>
  {/* Header Bottom Area End Here */}
  {/* Begin Mobile Menu Area */}
  <div className="mobile-menu-area d-lg-none d-xl-none col-12">
    <div className="container"> 
      <div className="row">
        <div className="mobile-menu">
        </div>
      </div>
    </div>
  </div>
</div>
</>

     )
};

export default Header;