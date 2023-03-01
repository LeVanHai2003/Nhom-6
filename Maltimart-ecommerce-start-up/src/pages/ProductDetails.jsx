import React from "react";
import { useParams } from "react-router-dom";
import products from './../assets/data/products';
import Helmet from './../components/Helmet/Helmet';
import { useDispatch } from 'react-redux';
import { cartAction } from './../redux/slices/cartSlice';
import { toast } from 'react-toastify';


const ProductDetails = (item) => {

const {id} = useParams();
const product = products.find(item => item.id );
const {
  productName,
  imgUrl, 
  price,
  textprice,
  description,
  } = product;

const dispatch = useDispatch()
  const addtocart = () =>{
    dispatch(
      cartAction.addItem({
      id: item.id,
      productName : item.productName,
      imgUrl: item.imgUrl,
      price: item.price,
      
    }));
   toast.success("Thêm vào giỏ hàng thành công");
  };


  return <Helmet>
    

    <div className="content-wraper pt-5 pb-5">
        <div className="container">
          <div className="row single-product-area">
            <div className="col-lg-5 col-md-6">
              
              <div className="product-details-left">
                <div className="product-details-images slider-navigation-1">
                  <div className="lg-image">
                    <a
                      
                      href="/"
                      
                    >
                      <img src={imgUrl}/>
                    </a>
                  </div>
                </div>
              </div>
           
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="product-details-view-content pt-60">
                <div className="product-info">
                  <h2>{productName}</h2>
                  
                  <div className="rating-box pt-20">
                    <ul className="rating rating-with-review-item">
                      <li>
                        <i className="ri-star-fill" />
                      </li>
                      <li>
                        <i className="ri-star-fill" />
                      </li>
                      <li>
                        <i className="ri-star-fill" />
                      </li>
                      <li className="no-star">
                        <i className="ri-star-line" />
                      </li>
                      <li className="no-star">
                        <i className="ri-star-line" />
                      </li>
                      <li className="review-item">
                        <span className="me-1"><i class="ri-edit-2-line"></i></span><a href="/#">Read Review</a>
                      </li>
                      <li className="review-item">
                      <span className="me-1"><i class="ri-edit-2-line"></i></span><a href="/#">Write Review</a>
                      </li>
                    </ul>
                  </div>
                  <div className="price-box pt-2">
                    <span className="new-price new-price-2">{price}<span>{textprice}</span></span>
                  </div>
                  <div className="product-desc">
                    <p>
                      <span>
                        {description}
                      </span>
                    </p>
                  </div>
                  
                  <div className="single-add-to-cart">
                    <form action="#" className="cart-quantity">
                      <button className="add-to-cart" onClick={addtocart}>
                        Thêm vào giỏ hàng
                      </button>
                    </form>
                  </div>
                  <div className="product-additional-info pt-2">
                    <div className="mt-2 mb-2 wish-single-product">
                      
                    <a className="wishlist-btn pt-2 pb-2" href="/">
                    <span><i class="ri-heart-line"></i></span>
                    
                      Thêm vào yêu thích
                    </a>
                    </div>
                    <div className="product-social-sharing pt-2">
                      <ul>
                        <li className="facebook me-2">
                          <a href="/#">
                          <i class="ri-facebook-fill"></i>
                            Facebook
                          </a>
                        </li>
                        <li className="twitter me-2">
                          <a href="/#">
                          <i class="ri-twitter-fill"></i>
                            Twitter
                          </a>
                        </li>
                        <li className="google-plus me-2">
                          <a href="/#">
                          <i class="ri-google-fill"></i>
                            Google +
                          </a>
                        </li>
                        <li className="instagram me-2">
                          <a href="/#">
                          <i class="ri-instagram-line"></i>
                            Instagram
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block-reassurance">
                    <ul>
                      <li>
                        <div className="reassurance-item">
                          <div className="reassurance-icon">
                          <i class="ri-shield-check-line"></i>
                          </div>
                          <p>
                            Chính sách bảo mật (bảo mật tuyệt đối thông tin khách hàng).
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="reassurance-item">
                          <div className="reassurance-icon">
                          <i class="ri-truck-line"></i>
                          </div>
                          <p>
                            Chính sách giao hàng (Đảm bảo hàng hóa đến tay khách hàng).
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="reassurance-item">
                          <div className="reassurance-icon">
                          <i class="ri-arrow-left-right-line"></i>
                          </div>
                          <p>
                            {" "}
                            Chính sách đổi trả (Đảm bảo đổi hàng mới nếu có sai sót).
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Helmet>
    
  
  

  
  
  
};

export default ProductDetails;
