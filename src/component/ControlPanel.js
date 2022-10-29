import { Link } from "react-router-dom";

const ControlPanel =()=>{
    return (
        <>
    
	<section id="cart_items">
		<div className="container">
			<div className="breadcrumbs">
				<ol className="breadcrumb">
				  <li><a href="#">الرئيسية</a></li>
				  <li className="active">لوحة التحكم</li>
				</ol>
            </div>

            <h4 ><Link to="/add">اضافة منتج جديد</Link></h4>

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
					<tbody>
						<tr>
							<td className="cart_product">
								<a href=""><img src="assest/images/products/8.jpeg" width="70px" alt=""/></a>
							</td>
							<td className="cart_description">
								<h4><a href="">منتج 1</a></h4>
							</td>
							<td className="cart_description">
								<h4><a href="">الصنف</a></h4>
							</td>
							<td className="cart_price">
								<p>$59</p>
							</td>
							<td className="cart_description">
								<p>date</p>
							</td>
							<td className="cart_delete">
								<a className="cart_quantity_delete" href=""><i className="fa fa-times"></i></a>
								<a className="cart_quantity_delete" href=""><i className="fa fa-pencil-square-o"></i></a>
								<a className="cart_quantity_delete" href=""><i className="fa fa-info-circle"></i></a>
							</td>
						</tr>

						<tr>
							<td className="cart_product">
								<a href=""><img src="assest/images/products/8.jpeg" width="70px" alt=""/></a>
							</td>
							<td className="cart_description">
								<h4><a href="">منتج 2</a></h4>
							</td>
							<td className="cart_description">
								<h4><a href="">الصنف</a></h4>
							</td>
							<td className="cart_price">
								<p>$59</p>
							</td>
							<td className="cart_description">
								<p>date</p>
							</td>
							<td className="cart_delete">
								<a className="cart_quantity_delete" href=""><i className="fa fa-times"></i></a>
								<a className="cart_quantity_delete" href=""><i className="fa fa-pencil-square-o"></i></a>
								<a className="cart_quantity_delete" href=""><i className="fa fa-info-circle"></i></a>
							</td>
						</tr>
						
					</tbody>
				</table>
			</div>
		</div>
    </section> 
        </>
        
    )
}
export default ControlPanel; 