import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { BsArrowRight } from 'react-icons/bs';

import style from "./Contact.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  textarea: Yup.string().required("Textarea is required"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  textarea: "",
};

export const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.form}>
        <div className={`style.contac_info text-start gap-y-14`}>
          <p className={`text-red-600`}>CONTACT US NOW</p>
          <h2 className="text-5xl	mt-5 font-bold">
            HAPPY TO ANSWER ALL <br /> YOUR QUESTIONS
          </h2>
          <p className={`mt-5 `}>Call us for all your questions today.</p>
          <div className="flex">
            <div className={`w-44 mt-5`}>
              <h3>OUR ADRESSES</h3>
              <p>Long Hills Dr 351, New York 07078, United States</p>
            </div>
            <div className={`w-44 mt-5 ml-10`}>
              <h3>EMAIL</h3>
              <p>
                <a href="mailto:webmaster@example.com">webmaster@example.com</a>
              </p>
            </div>
          </div>
          <div className="flex">
            <div className={`w-44 mt-5`}>
              <h3>PHONES</h3>
              <p>
                <a href="tel:+4733378901">+47 333 78 901</a>
              </p>
              <p>
                <a href="tel:+4733378901">+47 333 78 901</a>
              </p>
            </div>
            <div className={`w-44 mt-5 ml-10`}>
              <h3>SOCIAL</h3>
              <p>
                <a href="mailto:webmaster@example.com">webmaster@example.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className={`${style.form_box} flex items-center justify-center`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className={`w-96`}>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" Name"
                    className={`border-gray-950 appearance-none border-b-2 w-full py-4 px-1 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800  ${
                      errors.name && touched.name ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className={`border-gray-950 appearance-none border-b-2 w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800  ${
                      errors.email && touched.email ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    className={`border-gray-950 appearance-none border-b-2 w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800  ${
                      errors.phone && touched.phone ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    as="textarea"
                    name="textarea"
                    id="textarea"
                    placeholder=" Message"
                    rows={3}
                    className={`border-gray-950 appearance-none border-b-2 w-full py-8 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800  ${
                      errors.textarea && touched.textarea
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="textarea"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                    <div
                    className="text-end"
                    >
                    <button
                  type="submit"
                  className="border-2 border-black hover:bg-blue-700 text-black font-bold py-2 px-4 flex"
                >
                  Send message <BsArrowRight className="border-l-2"/>
                </button>
                    </div>
       
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
