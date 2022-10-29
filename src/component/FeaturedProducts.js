import CategoryTap from "./CategoryTap.js";
import FCard from "./FCard.js";
import Recommended from "./Recommended.js";

const FeaturedProducts = () => {
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
                        <a href="accessories.html">اكسسوريز</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="attention.html">عنايه</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="makeup.html">مكياج</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="bags.html">شنط</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="perfumes.html">عطور</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="devices.html">اجهزه</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="women.html">ملابس نساء</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="men.html">رجال</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-9 padding-right">
              <FCard />
              <CategoryTap />
              <Recommended />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeaturedProducts;
