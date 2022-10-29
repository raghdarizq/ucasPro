import { Link } from "react-router-dom";

const Login =()=>{
    return (
        <>
        	<section id="form">
		<div className="container">
			<div className="row">

				<div className="col-sm-6 col-sm-offset-1">
					<div className="login-form">
						<h2>التسجيل باستخدام حسابك</h2>
						<form action="#">
							<input type="email" placeholder="عنوان البريد الإلكتروني الخاص بك" />
							<input type="password" placeholder="كلمة المرور" />
							<button type="submit" className="btn btn-default">تسجيل الدخول</button>
							<br/>
							<h4><Link to="/register">أو التسجيل كمستخدم جديد</Link></h4>
						</form>
					</div>
				</div>
				
			</div>
		</div>
	</section>
    </>
    )
}
export default Login; 