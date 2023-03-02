import React from 'react';
import '../../components/Style/Style.css'

import capsac from '../../assets/images/product/large-size/capsac.jpg';
import oplung from '../../assets/images/product/large-size/oplung.jpg';

import sacduphong from '../../assets/images/product/large-size/sdp.jpg';
import tainghe from '../../assets/images/product/large-size/tainghe.jpg';
import gaychupanh from '../../assets/images/product/large-size/gaychupanh.jpg';
import { NavLink } from 'react-router-dom';



const HomeProductDienThoai = () => {
  return (
    
      <>
      <section className="product-area li-laptop-product pt-60 pb-45">
  <div className="container">
    <div className="row">
      {/* Begin Li's Section Area */}
      <div className="col-lg-12">
        <div className="li-section-title">
          <h2>
            <span><NavLink to={'DienThoai'}>Điện thoại</NavLink></span>
          </h2>
        </div>
        <div className="row row-cols-lg-5 pb-5 pt-4">
          
            <div className="col-lg">
              {/* single-product-wrap start */}
              
                <div className="product-image">
                  <a href="single-product.html">
                    <img src={capsac} alt="Cáp sạc" />
                  </a>
                
                <div className="product_desc">
                  <div className="product_desc_info">
                    <div className="product-review">
                      <h5 className="manufacturer">
                        <a href="/#">Đánh giá</a>
                      </h5>
                      <div className="rating-box">
                        <ul className="rating">
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                        </ul>
                      </div>
                    </div>
                    <h4><a className="product_name" href="single-product.html">Cáp Type C - Lightning</a></h4>
                    <div className="price-box">
                      <span className="new-price">590.000₫</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* single-product-wrap end */}
            </div>
            <div className="col-lg">
              {/* single-product-wrap start */}
              
                <div className="product-image">
                  <a href="single-product.html">
                    <img src={sacduphong} alt="Cáp sạc" />
                  </a>
                
                <div className="product_desc">
                  <div className="product_desc_info">
                    <div className="product-review">
                      <h5 className="manufacturer">
                        <a href="/#">Đánh giá</a>
                      </h5>
                      <div className="rating-box">
                        <ul className="rating">
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                        </ul>
                      </div>
                    </div>
                    <h4><a className="product_name" href="single-product.html">Pin sạc dự phòng Polymer</a></h4>
                    <div className="price-box">
                      <span className="new-price">470.000₫</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* single-product-wrap end */}
            </div>
            <div className="col-lg">
              {/* single-product-wrap start */}
              
                <div className="product-image">
                  <a href="single-product.html">
                    <img src={oplung} alt="Cáp sạc" />
                  </a>
                
                <div className="product_desc">
                  <div className="product_desc_info">
                    <div className="product-review">
                      <h5 className="manufacturer">
                        <a href="/#">Đánh giá</a>
                      </h5>
                      <div className="rating-box">
                        <ul className="rating">
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                        </ul>
                      </div>
                    </div>
                    <h4><a className="product_name" href="single-product.html">Ốp lưng Magsafe iPhone</a></h4>
                    <div className="price-box">
                      <span className="new-price">190.000₫</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* single-product-wrap end */}
            </div>
            <div className="col-lg">
              {/* single-product-wrap start */}
              
                <div className="product-image">
                  <a href="single-product.html">
                    <img src={tainghe} alt="Cáp sạc" />
                  </a>
                
                <div className="product_desc">
                  <div className="product_desc_info">
                    <div className="product-review">
                      <h5 className="manufacturer">
                        <a href="/#">Đánh giá</a>
                      </h5>
                      <div className="rating-box">
                        <ul className="rating">
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                        </ul>
                      </div>
                    </div>
                    <h4><a className="product_name" href="single-product.html">Tai nghe Bluetooth AirPods</a></h4>
                    <div className="price-box">
                      <span className="new-price">1.590.000₫</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* single-product-wrap end */}
            </div>
            <div className="col-lg">
              {/* single-product-wrap start */}
              
                <div className="product-image">
                  <a href="single-product.html">
                    <img src={gaychupanh} alt="Cáp sạc" />
                  </a>
                
                <div className="product_desc">
                  <div className="product_desc_info">
                    <div className="product-review">
                      <h5 className="manufacturer">
                        <a href="/#">Đánh giá</a>
                      </h5>
                      <div className="rating-box">
                        <ul className="rating">
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li><i class="ri-star-fill"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                          <li className="no-star"><i class="ri-star-line"></i></li>
                        </ul>
                      </div>
                    </div>
                    <h4><a className="product_name" href="single-product.html">Gimbal chống rung Moza</a></h4>
                    <div className="price-box">
                      <span className="new-price">299.000₫</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* single-product-wrap end */}
            </div>
            
          
        </div>
      </div>
      {/* Li's Section Area End Here */}
    </div>
  </div>
</section>

      </>
    
  )
}

export default HomeProductDienThoai
