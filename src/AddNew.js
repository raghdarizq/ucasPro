const AddNew = () => {
  return (
    <>
      <div id="contact-page" class="container">
        <div class="bg">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="title text-center">إضافة منتج جديد</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <div class="contact-form">
                <div
                  class="status alert alert-success"
                ></div>
                <form
                  id="main-contact-form"
                  class="contact-form row"
                  name="contact-form"
                  method="post"
                >
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      required="required"
                      placeholder="اسم المنتج"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      required="required"
                      placeholder="السعر"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <select name="subject" class="form-control">
                      <option>اكسسوريز</option>
                      <option>عنايه</option>
                      <option>مكياج</option>
                      <option>شنط</option>
                      <option>عطور</option>
                      <option>اجهزه</option>
                      <option>ملابس نساء</option>
                      <option>رجال</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="file"
                      name="image"
                      class="form-control"
                      required="required"
                      placeholder="اختر صورة المنتج"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <textarea
                      name="message"
                      id="message"
                      required="required"
                      class="form-control"
                      rows="8"
                      placeholder="وصف المنتج أو نبذة عنه"
                    ></textarea>
                  </div>
                  <div class="form-group col-md-12">
                    <input
                      type="submit"
                      name="submit"
                      class="btn btn-primary pull-right"
                      value="اضافة"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNew;
