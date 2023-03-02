import React from 'react'
import "./../Style/Style.css";
import MobileMenu from './MobileMenu';

import { Link, NavLink,useNavigate } from 'react-router-dom';
import logo from '../../assets/images/menu/logo/1.jpg'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



// const navlink = [
//   {
//     path: 'home',
//     display: 'Home'
//   },
//   {
//     path: 'shop',
//     display: 'Shop'
//   },
//   {
//     path: 'cart',
//     display: 'cart'
//   }
// ]

const Header = () => {
    const totalQuanlity = useSelector(state => state.cart.totalQuanlity);
    const [isSticky, setIsSticky] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const navigateToCart = () =>{
      navigate('/cart')
    }

  


  return <header >
    <div>

  {/* Header Top Area End Here */}
  {/* Begin Header Middle Area */}
  <div className="  pt-lg-1 pb-lg-2">
    <div className="container">
      <div className="row">
        {/* Begin Header Logo Area */}
        <div className="col-lg-3 col-sm-12 pt-lg-4 ">
          <div className="logo pb-sm-3 pb-xs-3 ">
            <a href="index.html">
              <NavLink to={'home'}>
              <img src={logo} alt="Logo" />
              </NavLink>
            </a>
          </div>
        </div>
        {/* Header Logo Area End Here */}
        {/* Begin Header Middle Right Area */}
        <div className="col-lg-9 col-sm-12 pl-0 ml-sm-15 ml-xs-15 pt-md-4 ">
          {/* Begin Header Middle Searchbox Area */}
          <div className="row">
            <div className=" col-lg-8 col-sm-12">
            <form action="#" className="hm-searchbox">
            <input type="text" placeholder="Bạn đang tìm gì..." />
            <button className="li-btn" type="submit"><i class="ri-search-line"></i></button>
          </form>
            </div>
            <div className=" col-lg-4 col-sm-12">
            <div className="header-middle-right">
            <ul className="hm-menu">
              {/* Begin Header Middle Wishlist Area */}
              {/* Header Middle Wishlist Area End Here */}
              {/* Begin Header Mini Cart Area */}
              <Link to={'cart'}>
              <li className="hm-wishlist">
                <a >
                  <span className="cart-item-count wishlist-item-count" onClick={navigateToCart}>{totalQuanlity}</span>
                  <i class="ri-shopping-cart-line"></i>
                </a>

              </li>
                </Link>
                {/* <li className="hm-wishlist">
                <Link to={'wish'}><a>
                <span className="cart-item-count wishlist-item-count">2</span>
                <i class="ri-heart-line"></i>
                </a></Link>
                
              </li> */}
              <li className="hm-wishlist">
                <Link to={'user'}><a>
                <i class="ri-user-fill"></i>
                </a></Link>
                
              </li>
            
            </ul>
          </div>
            </div>
            
          

          
          </div>
         
        </div>
       
      </div>
    </div>
  </div>
  {/* Header Middle Area End Here */}
  {/* Begin Header Bottom Area */}
  <div className="header-bottom  d-none d-lg-block d-xl-block ">
    <div className={`header-sticky ${isSticky ? 'sticky' : ''}`} >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 ">
          {/* Begin Header Bottom Menu Area */}
          <div className="hb-menu ">
            <nav style={{textAlign: 'center !important'}}>
              <ul>
                  
                
                <li>
                  <NavLink to={'home'}>Trang chủ</NavLink>
                </li>
                <li>
                  <NavLink to={'shop'}>Danh Mục</NavLink>
                </li>
                {/* <li className="megamenu-holder" ><NavLink to={'home'}>Danh mục</NavLink>
                  <ul className="megamenu hb-megamenu">
                    <li><a href="dienthoai.html">Điện thoại</a>
                      <ul>
                      <li><NavLink to={'Capsac'}>cáp sạc</NavLink></li>
                        <li><NavLink to={'Sacduphong'}>Sạc dự phòng</NavLink></li>
                        <li><NavLink to={'Oplung'}>Ốp lưng</NavLink></li>
                        <li><NavLink to={'Tainghe'}>Tai nghe</NavLink></li>
                        <li><NavLink to={'Gaychupanh'}>Gậy chụp ảnh</NavLink></li>
                      </ul>
                    </li>
                    <li><a href="maytinhlaptop.html">Máy tính Laptop</a>
                      <ul>
                      <li><NavLink to={'Chuot'}>Chuột</NavLink></li>
                        <li><NavLink to={'Banphim'}>Bàn Phím</NavLink></li>
                        <li><NavLink to={'Tuichongsoc'}>Túi chống sóc </NavLink></li>
                        <li><NavLink to={'Tainghemaytinh'}>Tai nghe máy tính</NavLink></li>
                      </ul>
                    </li>
                    <li><a href="maytinhbang.html">Máy tính bảng</a>
                      <ul>
                      <li><NavLink to={'Banphimmtb'}>Bàn phím</NavLink></li>
                        <li><NavLink to={'Butcamung'}>Bút cảm ứng</NavLink></li>
                        <li><NavLink to={'Baodamanhinh'}>Bao da màn hình</NavLink></li>
                        <li><NavLink to={'Giado'}>Giá đỡ</NavLink></li>
                      </ul>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <NavLink to={'cart'}>Giỏ Hàng</NavLink>
                  
                </li>
              </ul>
            </nav>
            
          </div>
          {/* Header Bottom Menu Area End Here */}
          
        </div>
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
      <MobileMenu/>
      </div>
    </div>
  </div>
</div>

</div>

  </header>
}

export default Header
