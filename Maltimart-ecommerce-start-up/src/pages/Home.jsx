import React, { useEffect, useState } from 'react'
import '../components/Style/Style.css'
import Helmet from './../components/Helmet/Helmet';
import HomeBanner from './../components/Header/HomeBanner';
// import HomeProductDienThoai from './../Products/HomeProductDienThoai/HomeProductDienThoai';
import ProductList from './../UI/ProductList';
import products from './../assets/data/products';

const Home = () => {
  const [dataDT,setData] = useState(products);
  useEffect(()=> {
    
    const filterProductsDT = products.filter(item => item.categoryhome === "dienthoai"  );
    
    setData(filterProductsDT);
  },[]);
  const [dataLT,setDataLT] = useState(products);
  useEffect(()=> {
    
    const filterProducts2 = products.filter(item => item.categoryhome === "laptop"  );
    
    setDataLT(filterProducts2);
  },[]);
  const [dataMTB,setDataMTB] = useState(products);
  useEffect(()=> {
    
    const filterProducts2 = products.filter(item => item.categoryhome === "maytinhbang"  );
    
    setDataMTB(filterProducts2);
  },[]);
  
  

  return <Helmet tile={"Home"}>
    <HomeBanner/>
    <section className="product-area li-laptop-product pt-60 pb-45">
  <div className="container">
    <div className="row">
      {/* Begin Li's Section Area */}
      <div className="col-lg-12">
        <div className="li-section-title">
          <h2>
            <span>Điện thoại</span>
          </h2>
        </div>
        <div className="row row-cols-lg-5 pb-5 pt-4">
        <ProductList data={dataDT}/>

        </div>
      </div>
      <div className="col-lg-12">
        <div className="li-section-title">
          <h2>
            <span>Máy Tính, LapTop</span>
          </h2>
        </div>
        <div className="row row-cols-lg-5 pb-5 pt-4">
        <ProductList data={dataLT}/>

        </div>
      </div>
      <div className="col-lg-12">
        <div className="li-section-title">
          <h2>
            <span>Máy tính bảng</span>
          </h2>
        </div>
        <div className="row row-cols-lg-5 pb-5 pt-4">
        <ProductList data={dataMTB}/>

        </div>
      </div>
    </div>
  </div>
</section>

  </Helmet>
    
  
}

export default Home
