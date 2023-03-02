import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./../Style/Style.css";
import { Link } from 'react-router-dom';


const MobileMenu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 991 && isMobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [isMobileMenuOpen]);

  return (
    <div className="mobile-menu ">
        <li className="hm-wishlist">
                <a onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="mt-4">
                <i class="ri-list-check"></i>
                </a>
                
              </li>
      {isMobileMenuOpen && (
        <div className="mobile-menu-items ">
            <nav style={{textAlign: 'center !important'}} className="pt-3">
              <ul>
              <li>
                  <NavLink to={'home'}>Trang chủ</NavLink>
                </li>
                <li>
                  <NavLink to={'shop'}>Shop</NavLink>
                </li>
                <li>
                  <NavLink to={'cart'}>Cart</NavLink>
                  
                </li>

                {/* <li>
                  <NavLink to={'home'}>Trang chủ</NavLink>
                </li>
                <li className="megamenu-holder" ><NavLink to={'home'}>Danh mục phụ kiện</NavLink>
                  <ul className="megamenu hb-megamenu mbmenu  "> */}

                  
                    {/* <li><a href="dienthoai.html">Điện thoại</a>
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
                    </li> */}
                  {/* </ul>
                </li>
                <li>
                  <NavLink to={'user'}>Tài khoản</NavLink>
                </li> */}
              </ul>
            </nav>
          
        </div>
      )}

      
      </div>
  )
}

export default MobileMenu
