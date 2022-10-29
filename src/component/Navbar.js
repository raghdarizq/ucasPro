const Navbar = () => {
  return (
    <>
      <header id="header">
        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="logo pull-left">
                  <a href="index.html">
                    <img src="assest/images/home/logo-2.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="shop-menu pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="404.html">
                        <i className="fa fa-user"></i> الحساب
                      </a>
                    </li>
                    <li>
                      <a href="404.html">
                        <i className="fa fa-star"></i> المفضلة
                      </a>
                    </li>
                    <li>
                      <a href="404.html">
                        <i className="fa fa-crosshairs"></i> الدفع
                      </a>
                    </li>
                    <li>
                      <a href="404.html">
                        <i className="fa fa-shopping-cart"></i> عربة التسوق
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        <i className="fa fa-lock"></i> تسجيل الدخول
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <a href="index.html" className="active">
                        الرئيسية
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">المنتجات</a>
                    </li>
                    <li>
                      <a href="404.html">تواصل معنا</a>
                    </li>
                    <li>
                      <a href="control-panel.html">لوحة التحكم</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input type="text" placeholder="بحث" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
