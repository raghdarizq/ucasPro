import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ControlPanel = () => {
  const [prodect, setprodect] = useState();
  const ApiUrl = "http://localhost:9000/products";
  useEffect(() => {
    fetch(ApiUrl)
      .then((res) => res.json())
      .then((data) => setprodect(data));
  }, []);

  return (
    <>
      <section id="cart_items">
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a href="/#">الرئيسية</a>
              </li>
              <li className="active">لوحة التحكم</li>
            </ol>
          </div>

          <h4>
            <Link to="/add">اضافة منتج جديد</Link>
          </h4>

          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">المنتج</td>
                  <td className="description"></td>
                  <td className="description">الصنف</td>
                  <td className="price">السعر</td>
                  <td className="price">تاريخ الاضافة</td>
                  <td className="total">العمليات</td>
                  <td></td>
                </tr>
              </thead>
			  {prodect.map((pro)=>{
					return (
						<tbody key={pro.id}>
						<tr>
						  <td className="cart_product">
							<Link to="/">
							  <img
								src={pro.image}
								width="70px"
								alt={pro.title}
							  />
							</Link>
						  </td>
						  <td className="cart_description">
							<h4>
							  <Link to="/">{pro.title}</Link>
							</h4>
						  </td>
						  <td className="cart_description">
							<h4>
							  <Link to="/">{pro.description}</Link>
							</h4>
						  </td>
						  <td className="cart_price">
							<p>{pro.price}</p>
						  </td>
						  <td className="cart_description">
						  </td>
						  <td className="cart_delete">
							<a className="cart_quantity_delete" href="/">
							  <i className="fa fa-times"></i>
							</a>
							<a className="cart_quantity_delete" href="/">
							  <i className="fa fa-pencil-square-o"></i>
							</a>
							<a className="cart_quantity_delete" href="/">
							  <i className="fa fa-info-circle"></i>
							</a>
						  </td>
						</tr>
		
					  </tbody>
					)
				})}

            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default ControlPanel;
