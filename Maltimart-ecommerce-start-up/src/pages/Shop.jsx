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
                    <optgroup label="??i???n tho???i">
                    <option value="capsac">C??p S???c</option>
                      <option value="sacduphong">S???c d??? ph??ng</option>
                      <option value="oplung">???p l??ng</option>
                      <option value="gaychupanh">G???y ch???p ???nh</option>
                      <option value="tainghe">Tai nghe</option>
                    </optgroup>
                    <optgroup label="M??y t??nh Laptop">
                    <option value="chout">Chu???t</option>
                      <option value="banphim">B??n Ph??m</option>
                      <option value="tuichongsoc">T??i ch???ng s??c</option>
                      <option value="tainghemaytinh">Tai nghe m??y t??nh</option>
                    </optgroup>
                    <optgroup label="M??y t??nh b???ng">
                      <option value="banphimmtb">B??n ph??m</option>
                      <option value="butcamung">B??t c???m ???ng</option>
                      <option value="baodamanghinh">Bao da m??n h??nh</option>
                      <option value="giado">Gi?? ?????</option>
                    </optgroup>

                      
                      
                      
                    </select>
                    </div>
                    

                  {/* <div className="li-blog-sidebar pt-2">
                    <h4 className="li-blog-sidebar-title">??i???n tho???i</h4>
                    <ul className="li-blog-archive" >
                      <a href="" value={'capsac'} onChange={handlefilter}>
                        <li className="li-danhmuc">c??p s???c</li>
                      </a>

                      <li className="li-danhmuc">S???c d??? ph??ng</li>
                      <li className="li-danhmuc">???p l??ng</li>
                      <li className="li-danhmuc">Tai nghe</li>
                      <li className="li-danhmuc">G???y ch???p ???nh</li>
                    </ul>
                  </div>
                  <div className="li-blog-sidebar">
                    <h4 className="li-blog-sidebar-title">M??y t??nh Laptop</h4>
                    <ul className="li-blog-archive">
                      <li className="li-danhmuc">Chu???t</li>
                      <li className="li-danhmuc">B??n Ph??m</li>
                      <li className="li-danhmuc">T??i ch???ng s??c</li>
                      <li className="li-danhmuc">Tai nghe m??y t??nh</li>
                    </ul>
                  </div>
                  <div className="li-blog-sidebar">
                    <h4 className="li-blog-sidebar-title">M??y t??nh b???ng</h4>
                    <ul className="li-blog-archive">
                      <li className="li-danhmuc">B??n ph??m</li>
                      <li className="li-danhmuc">B??t c???m ???ng</li>
                      <li className="li-danhmuc">Bao da m??n h??nh</li>
                      <li className="li-danhmuc">Gi?? ?????</li>
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
