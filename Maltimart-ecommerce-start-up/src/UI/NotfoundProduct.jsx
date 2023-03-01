import React from 'react'
import "../components/Style/Style.css";
import khongsanpham from "../assets/images/product/large-size/khongsanpham.jpg"


const NotfoundProduct = () => {
  return (
    <>
    <div className="text-center content-center">
        <img src={khongsanpham} alt="" />
        <h4 className='h4notfound'>Không tìm thấy sản phẩm</h4>
    </div>
    </>
  )
}

export default NotfoundProduct
