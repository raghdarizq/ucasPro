
import React, { useState, useEffect } from "react";
const Recommended = () => {
  const ApiURL = "http://localhost:9000/products";
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(ApiURL).then((res) => res.json().then((data) => setProduct(data)));
  }, []);

  return (
    <>
      <div className="recommended_items">
        <h2 className="title text-center">المنتجات الموصى بها</h2>
        <div
          id="recommended-item-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item active">
              {product.map((pro) =>
                pro.test === true ? (
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src={pro.image} alt={pro.title} />
                          <h2>${pro.price}</h2>
                          <p>{pro.title}</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>أضف إلى السلة
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
      

  );
};
export default Recommended;
