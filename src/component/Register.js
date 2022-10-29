const Register = () => {
  return (
    <>
      <section id="form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="signup-form">
                <h2>التسجيل كمستخدم جديد!</h2>
                <form action="#">
                  <input type="text" placeholder="اسم المستخدم" />
                  <input type="email" placeholder="عنوان البريد الإلكتروني" />
                  <input type="password" placeholder="كلمة المرور" />
                  <button type="submit" className="btn btn-default">
                    تسجيل
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
