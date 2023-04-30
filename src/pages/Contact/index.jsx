import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ArrowRight } from "icons";
import { Facebook } from "icons";
import { Instagram } from "icons";
import { Twitter } from "icons";

import style from "./Contact.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.form}>
        <div
          className={`style.contac_info text-start max-[680px]:items-center`}
        >
          <p className={`text-red-600 text-xl font-bold`}>CONTACT US NOW</p>
          <h2 className="text-5xl	mt-5 font-bold npm i react-tilt  max-[680px]:text-2xl ">
            HAPPY TO ANSWER ALL <br /> YOUR QUESTIONS
          </h2>
          <p className={`mt-5 text-2xl w-96 max-[680px]:text-xl`}>
            Kemex International həm Azərbaycanda, həm də Gürcüstanda təmsil
            olunur və İtaliya, Ukrayna, Belorusiya, Çin, Hindistan və digər
            olkələrdə yerləşən istehsalçılarla əməkdaşlıq edir.
          </p>
          <div className="flex flex-wrap">
            <div className={`w-44 mt-5 max-[680px]:ml-10 max-[680px]:w-full `}>
              <h3>
                <b>OUR ADRESSES</b>
              </h3>
              <p>
                Ahmad Rajabli 1/8,
                <br /> Adore Plaza, 4th floor
              </p>
            </div>
            <div className={`w-44 mt-5 ml-10  max-[680px]:w-full `}>
              <h3>
                <b>EMAIL</b>
              </h3>
              <p>
                <a href="mailto: info@chemical.az"> info@chemical.az</a>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className={`w-44 mt-5 max-[680px]:ml-10`}>
              <h3>
                <b>PHONES</b>
              </h3>
              <p>
                <a href="tel:+994125255155">+994 12 525 51 55</a>
              </p>
              <p>
                <a href="tel:+994502913202">+994 50 291 32 02</a>
              </p>
            </div>
            <div className={`w-44 mt-5 ml-10`}>
              <h3>
                <b>SOCIAL</b>
              </h3>
              <p className="flex gap-5 mt-4  ">
                <Facebook className="hover:text-orange-700" />{" "}
                <Instagram className="hover:text-orange-700" />{" "}
                <Twitter className="hover:text-orange-700" />
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${style.form_box} flex items-center justify-center max-[680px]:-mt-28`}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className={`w-96 ` }>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" Name"
                    className={`border-gray-950 appearance-none border-b-2 w-full py-4 px-1 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800   ${
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
                    type="text"
                    name="message"
                    id="message"
                    placeholder=" Message"
                    rows={3}
                    className={`border-gray-950 appearance-none border-b-2 w-full py-8 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800  ${
                      errors.message && touched.message ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className={`flex justify-end`}>
                  <button
                    type="submit"
                    className="border-2 border-black hover:animate-pulse transition duration-200 hover:bg-orange-600 hover:text-white text-black font-bold py-2 px-4 flex"
                  >
                    Send message
                    <span>
                      <ArrowRight className={`ml-2 mt-1 text-lg`} />
                    </span>
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
