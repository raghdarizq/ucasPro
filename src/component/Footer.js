const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="companyinfo" >
                  <h2>
                    <span>e</span>-mall
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>

              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>روابط</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="/#">الرئيسية</a>
                    </li>
                    <li>
                      <a href="/#">الحساب</a>
                    </li>
                    <li>
                      <a href="/#">المفضلة</a>
                    </li>
                    <li>
                      <a href="/#">عربة التسوق</a>
                    </li>
                    <li>
                      <a href="/#">التسجيل</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>تسوق سريع</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="/#">تي شيرت</a>
                    </li>
                    <li>
                      <a href="/#">رجالي</a>
                    </li>
                    <li>
                      <a href="/#">حريمي</a>
                    </li>
                    <li>
                      <a href="/#">بطاقات الهدايا</a>
                    </li>
                    <li>
                      <a href="/#">أحذية</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>عن المتجر</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="/#">معلومات الشركة</a>
                    </li>
                    <li>
                      <a href="/#">الوظائف</a>
                    </li>
                    <li>
                      <a href="/#">موقع المتجر</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
		<div className="footer-bottom">
			<div className="container">
				<div className="row">
					<p>Copyright © E-MALL Inc. جميع الحقوق محفوظة</p>
				</div>
			</div>
		</div>
      </footer>
    </>
  );
};
export default Footer;
