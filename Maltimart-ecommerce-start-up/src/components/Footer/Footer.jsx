import React from 'react'
import iconlogo1 from '../../assets/images/shipping-icon/1.png'
import iconlogo2 from '../../assets/images/shipping-icon/2.png'
import iconlogo3 from '../../assets/images/shipping-icon/3.png'
import iconlogo4 from '../../assets/images/shipping-icon/4.png'
import SmallLogo from '../../assets/images/menu/logo/1.jpg'

const Footer = () => {
  return (
    <div>
      <>
      <div>
  <div className="footer">
    {/* Begin Footer Static Top Area */}
    <div className="footer-static-top">
      <div className="container">
        {/* Begin Footer Shipping Area */}
        <div className="footer-shipping pt-5 pb-5 pb-xs-2">
          <div className="row">
            {/* Begin Li's Shipping Inner Box Area */}
            <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-5  ">
              <div className="li-shipping-inner-box ">
                <div className="shipping-icon">
                  <img src={iconlogo1} alt="Shipping Icon" />
                </div>
                <div className="shipping-text ">
                  <h2>Giao hàng miễn phí</h2>
                  <p>
                    Giao hàng an toàn
                    Và trả hàng miễn phí. </p>
                </div>
              </div>
            </div>
            {/* Li's Shipping Inner Box Area End Here */}
            {/* Begin Li's Shipping Inner Box Area */}
            <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-5 pb-xs-5 ">
              <div className="li-shipping-inner-box">
                <div className="shipping-icon">
                  <img src={iconlogo2} alt="Shipping Icon" />
                </div>
                <div className="shipping-text">
                  <h2>Thanh toán an toàn</h2>
                  <p>Phương thức thanh toán an toàn và phổ biến</p>
                </div>
              </div>
            </div>
            {/* Li's Shipping Inner Box Area End Here */}
            {/* Begin Li's Shipping Inner Box Area */}
            <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-3">
              <div className="li-shipping-inner-box">
                <div className="shipping-icon">
                  <img src={iconlogo3} alt="Shipping Icon" />
                </div>
                <div className="shipping-text">
                  <h2>Mua sắm với sự tự tin</h2>
                  <p>Bảo vệ người mua từ nhấp chuột đến giao hàng.
                  </p>
                </div>
              </div>
            </div>
            {/* Li's Shipping Inner Box Area End Here */}
            {/* Begin Li's Shipping Inner Box Area */}
            <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-3">
              <div className="li-shipping-inner-box">
                <div className="shipping-icon">
                  <img src={iconlogo4} alt="Shipping Icon" />
                </div>
                <div className="shipping-text">
                  <h2>Trung tâm  giúp đỡ 24/7</h2>
                  <p>Mọi thắc mắc sẽ được giải quyết</p>
                </div>
              </div>
            </div>
            {/* Li's Shipping Inner Box Area End Here */}
          </div>
        </div>
        {/* Footer Shipping Area End Here */}
      </div>
    </div>
    {/* Footer Static Top Area End Here */}
    {/* Begin Footer Static Middle Area */}
    <div className="footer-static-middle">
      <div className="container">
        <div className="footer-logo-wrap pt-5 pb-5">
          <div className="row">
            {/* Begin Footer Logo Area */}
            <div className="col-lg-6 col-md-6">
              <div className="footer-logo">
                <img src={SmallLogo} alt="Footer Logo" />
                <p className="info">
                  Nơi bạn có thể mua bất kì phụ kiện công nghệ bạn mong muốn chúng tôi luôn hướng đến trãi nghiệm của khách hàng. <strong>Chỉ cần nhấp chuột phụ kiện bạn muốn sẽ có bên bạn.</strong>
                </p>
              </div>
              <ul className="des">
                <li>
                  <span>Address: </span>
                  số 88 Quận 12 TP Hồ Chí Minh
                </li>
                <li>
                  <span>Phone: </span>
                  <a href="/#">(+123) 123 321 345</a>
                </li>
                <li>
                  <span>Email: </span>
                  <a href="mailto://info@yourdomain.com">limupa@gmail.com</a>
                </li>
              </ul>
            </div>
            {/* Footer Logo Area End Here */}
            {/* Begin Footer Block Area */}
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer-block">
                <h3 className="footer-block-title">Điện thoại</h3>
                <ul>
                  <li><a href="capsac.html">Cáp sạc</a></li>
                  <li><a href="sacduphong.html">Sạc dự phòng</a></li>
                  <li><a href="/#">Ốp lưng</a></li>
                  <li><a href="/#">Tai nghe</a></li>
                  <li><a href="/#">Gậy chụp ảnh</a></li>
                </ul>
              </div>
            </div>
            {/* Footer Block Area End Here */}
            {/* Begin Footer Block Area */}
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer-block">
                <h3 className="footer-block-title">Máy tính,Laptop</h3>
                <ul>
                  <li><a href="chuot.html">Chuột</a></li>
                  <li><a href="banphim.html">Bàn Phím</a></li>
                  <li><a href="/#">Giá đỡ điện thoại</a></li>
                  <li><a href="/#">Tai nghe máy tính</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer-block">
                <h3 className="footer-block-title">Máy tính bảng</h3>
                <ul>
                  <li><a href="banphimmtb.html">Bàn phím </a></li>
                  <li><a href="butcamung.html">Bút cảm ứng</a></li>
                  <li><a href="/#">Bao da màn hình</a></li>
                  <li><a href="/#">Giá đỡ</a></li>
                </ul>
              </div>
            </div>
            {/* Footer Block Area End Here */}
            {/* Begin Footer Block Area */}
            <div className="col-lg-4">
              <div className="footer-block">
                <h3 className="footer-block-title">Follow Us</h3>
                <ul className="social-link pt-lg-0 pt-sm-2">
                  <li className="twitter">
                    <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                    <i class="ri-twitter-fill"></i>
                    </a>
                  </li>
                  
                  <li className="google-plus">
                    <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                    <i class="ri-google-fill"></i>
                    </a>
                  </li>
                  <li className="facebook">
                    <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                    <i class="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li className="youtube">
                    <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                    <i class="ri-youtube-line"></i>
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                    <i class="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Block Area End Here */}
          </div>
        </div>
      </div>
    </div>
    {/* Footer Static Middle Area End Here */}
    {/* Begin Footer Static Bottom Area */}
    <div className="footer-static-bottom pt-1 pb-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright text-center pt-25">
              <span><a href="index.html" target="_blank">Lumipa Cửa hàng phụ kiện <span>Email:limupa@gmail.com </span> 
                  <span>Phone:(+123) 123 321 345 </span><span> Address:số 88 Quận 12 TP Hồ Chí Minh </span>
                </a></span>
            </div>
            {/* Copyright Area End Here */}
          </div>
        </div>
      </div>
    </div>
    {/* Footer Static Bottom Area End Here */}
  </div>
  {/* Footer Area End Here */}
  {/* Begin Quick View | Modal Area */}
  <div className="modal fade modal-wrapper" id="exampleModalCenter">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-inner-area row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              {/* Product Details Left */}
              <div className="product-details-left">
                <div className="product-details-images slider-navigation-1">
                  <div className="lg-image">
                    <img src="images/product/large-size/1.jpg" alt="product image" />
                  </div>
                  <div className="lg-image">
                    <img src="images/product/large-size/2.jpg" alt="product image" />
                  </div>
                  <div className="lg-image">
                    <img src="images/product/large-size/3.jpg" alt="product image" />
                  </div>
                  <div className="lg-image">
                    <img src="images/product/large-size/4.jpg" alt="product image" />
                  </div>
                  <div className="lg-image">
                    <img src="images/product/large-size/5.jpg" alt="product image" />
                  </div>
                  <div className="lg-image">
                    <img src="images/product/large-size/6.jpg" alt="product image" />
                  </div>
                </div>
                <div className="product-details-thumbs slider-thumbs-1">                                        
                  <div className="sm-image"><img src="images/product/small-size/1.jpg" alt="product image thumb" /></div>
                  <div className="sm-image"><img src="images/product/small-size/2.jpg" alt="product image thumb" /></div>
                  <div className="sm-image"><img src="images/product/small-size/3.jpg" alt="product image thumb" /></div>
                  <div className="sm-image"><img src="images/product/small-size/4.jpg" alt="product image thumb" /></div>
                  <div className="sm-image"><img src="images/product/small-size/5.jpg" alt="product image thumb" /></div>
                  <div className="sm-image"><img src="images/product/small-size/6.jpg" alt="product image thumb" /></div>
                </div>
              </div>
              {/*// Product Details Left */}
            </div>
            <div className="col-lg-7 col-md-6 col-sm-6">
              <div className="product-details-view-content pt-60">
                <div className="product-info">
                  <h2>Today is a good day Framed poster</h2>
                  <span className="product-details-ref">Reference: demo_15</span>
                  <div className="rating-box pt-20">
                    <ul className="rating rating-with-review-item">
                      <li><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                      <li className="no-star"><i className="fa fa-star-o" /></li>
                      <li className="no-star"><i className="fa fa-star-o" /></li>
                      <li className="review-item"><a href="/#">Read Review</a></li>
                      <li className="review-item"><a href="/#">Write Review</a></li>
                    </ul>
                  </div>
                  <div className="price-box pt-20">
                    <span className="new-price new-price-2">$57.98</span>
                  </div>
                  <div className="product-desc">
                    <p>
                      <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                      </span>
                    </p>
                  </div>
                  <div className="product-variants">
                    <div className="produt-variants-size">
                      <label>Dimension</label>
                      <select className="nice-select">
                        <option value={1} title="S" selected="selected">40x60cm</option>
                        <option value={2} title="M">60x90cm</option>
                        <option value={3} title="L">80x120cm</option>
                      </select>
                    </div>
                  </div>
                  <div className="single-add-to-cart">
                    <form action="#" className="cart-quantity">
                      <div className="quantity">
                        <label>Quantity</label>
                        <div className="cart-plus-minus">
                          <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                          <div className="dec qtybutton"><i className="fa fa-angle-down" /></div>
                          <div className="inc qtybutton"><i className="fa fa-angle-up" /></div>
                        </div>
                      </div>
                      <button className="add-to-cart" type="submit">Add to cart</button>
                    </form>
                  </div>
                  <div className="product-additional-info pt-25">
                    <a className="wishlist-btn" href="wishlist.html"><i className="fa fa-heart-o" />Add to wishlist</a>
                    <div className="product-social-sharing pt-25">
                      <ul>
                        <li className="facebook"><a href="/#"><i className="fa fa-facebook" />Facebook</a></li>
                        <li className="twitter"><a href="/#"><i className="fa fa-twitter" />Twitter</a></li>
                        <li className="google-plus"><a href="/#"><i className="fa fa-google-plus" />Google +</a></li>
                        <li className="instagram"><a href="/#"><i className="fa fa-instagram" />Instagram</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
      
      </>
    </div>
  )
}

export default Footer;
