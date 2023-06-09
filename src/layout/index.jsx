import React, {useEffect} from 'react';
import { useSnapshot } from "valtio";

import Drawer from "@mui/material/Drawer";

import { Close } from "../assets/icons";

import { Facebook } from "icons";
import { Instagram } from "icons";
import { Twitter } from "icons";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Navbar } from "#/Navbar";
import { state } from "state";
import { widthByPercent } from "shared/common";
import { useScreen } from "shared/hooks";
import {useTranslation} from 'react-i18next'

const initialValues = {
  name: "",
  email: "",
  phone: "",
  textarea: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: Yup.string().required("Please enter your message"),
});


export const Layout = ({ children }) => {
  const snap = useSnapshot(state);

  const isMobile = useScreen();

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    state.drawer = !state.drawer;
  };

  const closeDrawer = () => {
    state.drawer = false;
  };

  const {t} = useTranslation()
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem(localStorage.getItem('selected_language') || "az"));
  }, ['az','en','ru']);

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Navbar />
          <Drawer anchor={anchor} open={snap.drawer} onClose={toggleDrawer()}>
            <div
              style={{
                width: widthByPercent(isMobile ? 70 : 100),
              }}
            >
              <Close
                size={40}
                className={`cursor-pointer hover:text-red-600 hover:animate-pulse pt-2 decoration-gray-700 transition duration-300`}
                onClick={closeDrawer}
              />

              <h1 className={`text-orange-600  text-center text-2xl/[45px]`}>
                {t('contactDetails')}
              </h1>
              <ul className="bg-gray-200 p-2 m-2 rounded-lg">
                <li className="text-lg text-gray-700">
                  {t('adress')}: 123 Main Street, City, State
                </li>
                <li className="text-lg text-gray-700">{t('phone')}: 555-1234</li>
                <li className="text-lg text-gray-700">
                  {t('email')}: example@example.com
                </li>
              </ul>
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                  console.log(values);
                }}
                validationSchema={validationSchema}
              >
                <Form className="bg-gray-100 rounded-lg p-6 m-2">
                  <div className="mb-4">
                    <label>
                      <h1
                        className={`text-orange-600 text-center p-2 text-2xl/[45px]`}
                      >
                        {t('answerQuestions')}
                      </h1>
                    </label>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      {t('name')}:
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    />
                    <ErrorMessage name="name" />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      {t('email')}:
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    />
                    <ErrorMessage name="email" />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      {t('message')}:
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight resize-none"
                    />
                    <ErrorMessage name="message\" />{" "}
                  </div>

                  <div className={`flex flex-wrap flex-row justify-between`}>
                    <div>
                      <button
                        type="submit"
                        className="bg-gray-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:animate-pulse transition duration-300"
                      >
                        Submit
                      </button>
                    </div>
                    <div>
                      <div className="ml-1.0">{t('sosialMedia')}</div>
                      <div className="flex flex-row gap-2 cursor-pointer  ">
                        <Facebook className="hover:text-orange-700 hover:animate-pulse" />
                        <Instagram className="hover:text-orange-700 hover:animate-pulse " />
                        <Twitter className="hover:text-orange-700 hover:animate-pulse" />
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </Drawer>
        </React.Fragment>
      ))}

      <div>{children}</div>
    </div>
  );
};
