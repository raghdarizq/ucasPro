import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const AddNew = () => {
    const [title,setTitle]=useState();
    const [price,setPrice]=useState();
    const [category,setCategory]=useState();
    const [image,setImage]=useState();
    const [description,setDescription]=useState();
    let navigate = useNavigate()
console.log(setImage)
    const formSubmit = (event) => {
        event.preventDefault();
        axios
          .post("http://localhost:9000/products", {
            title,
            price,
            category,
            description,
            image,
          })
          .then((data) => {
            console.log(data);
          });    
          navigate("/controlpanel")
    
    }
    const TitleHandler = (event) => {
        setTitle(event.target.value);
      };
      const PriceHandler = (event) => {
        setPrice(event.target.value);
      };
      const CategoryHandler = (event) => {
        setCategory(event.target.value);
      };
      const DescriptionHandler = (event) => {
        setDescription(event.target.value);
      };

  return (
    <>
      <div id="contact-page" className="container" >
        <div className="bg">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="title text-center">إضافة منتج جديد</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div className="contact-form">
                <div
                  className="status alert alert-success"
                ></div>
                <form onSubmit={formSubmit}
                  id="main-contact-form"
                  className="contact-form row"
                  name="contact-form"
                  method="post"
                >
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                      placeholder="اسم المنتج"
                      onChange={TitleHandler}

                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      required="required"
                      placeholder="السعر"
                      onChange={PriceHandler}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <select name="subject" className="form-control" onChange={CategoryHandler}>
                      <option value="men's clothing">men's clothing</option>
                      <option value="jewelery">jewelery</option>
                      <option value="electronics">electronics</option>
                      <option value="women's clothing">women's clothing</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="file"
                      name="image"
                      className="form-control"
                      required="required"
                      placeholder="اختر صورة المنتج"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      name="message"
                      id="message"
                      required="required"
                      className="form-control"
                      rows="8"
                      placeholder="وصف المنتج أو نبذة عنه"
                      onChange={DescriptionHandler}
                    ></textarea>
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary pull-right"
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
