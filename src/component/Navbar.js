import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header id="header">
        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="logo pull-left">
                  <Link to="/">
                    <img src="assest/images/home/logo-2.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="shop-menu pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/404">
                        <i className="fa fa-user"></i> الحساب
                      </Link>
                    </li>
                    <li>
                      <Link to="/404">
                        <i className="fa fa-star"></i> المفضلة
                      </Link>
                    </li>
                    <li>
                      <Link ro="/404">
                        <i className="fa fa-crosshairs"></i> الدفع
                      </Link>
                    </li>
                    <li>
                      <Link  to="/404">
                        <i className="fa fa-shopping-cart"></i> عربة التسوق
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <i className="fa fa-lock"></i> تسجيل الدخول
                      </Link>
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
                      <Link to="/" className="active">
                        الرئيسية
                      </Link>
                    </li>
                    <li>
                      <Link to="/prodect">المنتجات</Link>
                    </li>
                    <li>
                      <Link to="/404">تواصل معنا</Link>
                    </li>
                    <li>
                      <Link to="/controlpanel">لوحة التحكم</Link>
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
