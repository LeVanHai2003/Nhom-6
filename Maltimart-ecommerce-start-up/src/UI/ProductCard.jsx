import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { cartAction } from './../redux/slices/cartSlice';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

 



const ProductCard = ({item}) => {
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
  return (
    <><div className="col-lg pt-5 ">
    
    
      <div className="product-image ">
      <Link to='/shop/id'><img src={item.imgUrl} alt="Cáp sạc" class="rounded mx-auto d-block" /></Link>
      
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
          <h4 className="product_name"><Link to='/shop/id'>{item.productName}</Link></h4>
          <div className="price-box">
            <span className="new-price">{item.price}<span>{item.textprice}</span></span>
            <motion.span whileTap={{scale: 1.2}} className='AddTC' onClick={addtocart}> 
            <i class="ri-add-circle-line"></i>
            </motion.span>
          </div>
        </div>
        
      </div>
    </div>

  </div></>
    
  )
}

export default ProductCard
