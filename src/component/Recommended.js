const Recommended =()=>{
    return(<>
                  <div className="recommended_items">
                <h2 className="title text-center">المنتجات الموصى بها</h2>

                <div
                  id="recommended-item-carousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="assest/images/products/1.jpeg" alt="" />
                              <h2>$56</h2>
                              <p>اسم المنتج</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>أضف إلى
                                السلة
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="assest/images/products/2.jpeg" alt="" />
                              <h2>$56</h2>
                              <p>اسم المنتج</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>أضف إلى
                                السلة
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="assest/images/products/3.jpeg" alt="" />
                              <h2>$56</h2>
                              <p>اسم المنتج</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>أضف إلى
                                السلة
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="assest/images/products/4.jpeg" alt="" />
                              <h2>$56</h2>
                              <p>اسم المنتج</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>أضف إلى
                                السلة
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="assest/images/products/5.jpeg" alt="" />
                              <h2>$56</h2>
                              <p>اسم المنتج</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>أضف إلى
                                السلة
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="assest/images/products/6.jpeg" alt="" />
                              <h2>$56</h2>
                              <p>اسم المنتج</p>
                              <a
                                href="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>أضف إلى
                                السلة
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="left recommended-item-control"
                    href="#recommended-item-carousel"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-right"></i>
                  </a>
                  <a
                    className="right recommended-item-control"
                    href="#recommended-item-carousel"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-left"></i>
                  </a>
                </div>
              </div>
              </>)
}
export default Recommended;