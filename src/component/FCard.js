import React, { useState, useEffect } from "react";

const FCard = () => {
  const ApiURL = "http://localhost:9000/products";
  const [product,setProduct]=useState([])
  useEffect(() => {
    fetch(ApiURL).then((res) => res.json().then((data) => setProduct(data)));
  }, []);
  return (
    <>
      <div className="features_items">
        <h2 className="title text-center">المنتجات المميزة</h2>
        {product.map((pro)=>{
          return (
            <div className="col-sm-4" key={pro.id}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src={pro.image} alt={pro.title}/>
                  <h2>${pro.price}</h2>
                  <p>{pro.title}</p>
                  <a href="#" className="btn btn-default add-to-cart">
                    <i className="fa fa-shopping-cart"></i>أضف إلى السلة
                  </a>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <h2>${pro.price}</h2>
                    <p>{pro.title} </p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>أضف إلى السلة
                    </a>
                  </div>
                </div>
              </div>
              <div className="choose">
                <ul className="nav nav-pills nav-justified">
                  <li>
                    <a href="#">
                      <i className="fa fa-plus-square"></i>أضف إلى المفضلة
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          )

        })}
      </div>
    </>
  );
};
export default FCard;
