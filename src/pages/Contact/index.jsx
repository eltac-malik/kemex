import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
        <div className={style.contac_info}>salam</div>

        <div className={`${style.form_box} flex items-center justify-center`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" Name"
                    className={`appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                    placeholder=" Name"
                    className={`appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                    className={`appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                    className={`appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
