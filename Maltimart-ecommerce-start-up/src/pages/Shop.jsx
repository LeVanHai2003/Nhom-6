import React, { useState } from "react";
import "../components/Style/Style.css";

import ProductList from "./../UI/ProductList";
import products from "./../assets/data/products";
import NotfoundProduct from './../UI/NotfoundProduct';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handlefilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "capsac") {
      const filterProducts = products.filter(
        (item) => item.productcategory === "capsac"
      );
      setProductsData(filterProducts);
    }
    else if (filterValue === "sacduphong") {
      const filterProducts = products.filter(
        (item) => item.productcategory === "sacduphong"
      );
      setProductsData(filterProducts);
    }
  };
  const handleSearch = e =>{
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchedProducts);
  }

  return (
    <>
      <div>
        <div className="content-wraper pt-3 pb-3 pt-sm-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-12 ">
                <div className="li-blog-sidebar-wrapper">
                  <div className="li-blog-sidebar">
                    <div className="li-sidebar-search-form">
                      <form action="#">
                        <input
                          type="text"
                          className="li-search-field"
                          placeholder="search here"
                          onChange={handleSearch}
                        />
                        <button type="submit" className="li-search-btn">
                          <i className="ri-search-line" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="select mt-lg-3">
                    <select onChange={handlefilter}>
                    <optgroup label="Điện thoại">
                    <option value="capsac">Cáp Sạc</option>
                      <option value="sacduphong">Sạc dự phòng</option>
                      <option value="oplung">Ốp lưng</option>
                      <option value="gaychupanh">Gậy chụp ảnh</option>
                      <option value="tainghe">Tai nghe</option>
                    </optgroup>
                    <optgroup label="Máy tính Laptop">
                    <option value="chout">Chuột</option>
                      <option value="banphim">Bàn Phím</option>
                      <option value="tuichongsoc">Túi chống sóc</option>
                      <option value="tainghemaytinh">Tai nghe máy tính</option>
                    </optgroup>
                    <optgroup label="Máy tính bảng">
                      <option value="banphimmtb">Bàn phím</option>
                      <option value="butcamung">Bút cảm ứng</option>
                      <option value="baodamanghinh">Bao da màn hình</option>
                      <option value="giado">Giá đỡ</option>
                    </optgroup>

                      
                      
                      
                    </select>
                    </div>
                    

                  {/* <div className="li-blog-sidebar pt-2">
                    <h4 className="li-blog-sidebar-title">Điện thoại</h4>
                    <ul className="li-blog-archive" >
                      <a href="" value={'capsac'} onChange={handlefilter}>
                        <li className="li-danhmuc">cáp sạc</li>
                      </a>

                      <li className="li-danhmuc">Sạc dự phòng</li>
                      <li className="li-danhmuc">Ốp lưng</li>
                      <li className="li-danhmuc">Tai nghe</li>
                      <li className="li-danhmuc">Gậy chụp ảnh</li>
                    </ul>
                  </div>
                  <div className="li-blog-sidebar">
                    <h4 className="li-blog-sidebar-title">Máy tính Laptop</h4>
                    <ul className="li-blog-archive">
                      <li className="li-danhmuc">Chuột</li>
                      <li className="li-danhmuc">Bàn Phím</li>
                      <li className="li-danhmuc">Túi chống sóc</li>
                      <li className="li-danhmuc">Tai nghe máy tính</li>
                    </ul>
                  </div>
                  <div className="li-blog-sidebar">
                    <h4 className="li-blog-sidebar-title">Máy tính bảng</h4>
                    <ul className="li-blog-archive">
                      <li className="li-danhmuc">Bàn phím</li>
                      <li className="li-danhmuc">Bút cảm ứng</li>
                      <li className="li-danhmuc">Bao da màn hình</li>
                      <li className="li-danhmuc">Giá đỡ</li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="col-10">
                <div className="shop-products-wrapper">
                  <div className="tab-content">
                    <div
                      id="grid-view"
                      className="tab-pane fade active show"
                      role="tabpanel"
                    >
                      <div className="product-area shop-product-area">
                        <div className="row row-cols-lg-3 row-cols-sm-1">
                          {productsData.length === 0 ? (
                            <NotfoundProduct/>
                          ) : (
                            <ProductList data={productsData} />
                          )}
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
  );
};

export default Shop;
