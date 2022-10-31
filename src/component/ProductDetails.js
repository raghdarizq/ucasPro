import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {
    let params = useParams();
	const [Product,setProduct]=useState([]);
	const Api = "http://localhost:9000/products";
	useEffect(()=>{
		axios.get(`${Api}/${params.productId}`).then(res=>{
			setProduct(res.data)
		}).catch(err=>{
			console.log(err)
		})
	})
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <h2>الأقسام</h2>
                <div className="panel-group category-products" id="accordian">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="/accessories.html">اكسسوريز</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="/attention.html">عنايه</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="/makeup.html">مكياج</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="/bags.html">شنط</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="/perfumes.html">عطور</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="/devices.html">اجهزه</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="/women.html">ملابس نساء</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="/men.html">رجال</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-9 padding-right">
              <div className="product-details">
                <div className="col-sm-5">
                  <div className="view-product">
                    <img src={Product.image} alt={Product.title} />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="product-information">
                    <img
                      src="assest/images/product-details/new.jpg"
                      className="newarrival"
                      alt=""
                    />
                    <h2>{Product.title}</h2>
                    <span>
                      <span> ${Product.price}</span>
                      <label>عدد القطع:</label>
                      <input type="text" value="3" />
                      <button type="button" className="btn btn-fefault cart">
                        <i className="fa fa-shopping-cart"></i>
                        أضف الى العربة
                      </button>
                    </span>
                    <p>
                      <b>التوفر:</b> في المتجر
                    </p>
                    <p>
                      <b>الماركة:</b> أديداس
                    </p>
                    <p>
                      <b>الصنف:</b> {Product.category}
                    </p>
                  </div>
                </div>
              </div>

              <div className="category-tab shop-details-tab">
                <div className="col-sm-12">
                  <ul className="nav nav-tabs">
                    <li>
                      <a href="/##details" data-toggle="tab">
                        تفاصيل أخرى
                      </a>
                    </li>
                    <li className="active">
                      <a href="/##reviews" data-toggle="tab">
                        الآراء (5)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade" id="details">
                    <div className="col-sm-12">
                      <p>
                        {Product.description} 
                      </p>
                    </div>
                  </div>

                  <div className="tab-pane fade active in" id="reviews">
                    <div className="col-sm-12">
                      <ul>
                        <li>
                          <a href="/#">
                            <i className="fa fa-user"></i>رغده
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="fa fa-clock-o"></i>12:41 PM
                          </a>
                        </li>
                      </ul>
                      <p>
                        <b>أكتب رأيك</b>
                      </p>

                      <form action="/#">
                        <span>
                          <input type="text" placeholder="الاسم" />
                          <input
                            type="email"
                            placeholder="عنوان البريد الالكتروني"
                          />
                        </span>
                        <textarea name=""></textarea>
                        <b>التقييم: </b>{" "}
                        <img
                          src="assest/images/product-details/rating.png"
                          alt=""
                        />
                        <button
                          type="button"
                          className="btn btn-default pull-right"
                        >
                          ارسال
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
