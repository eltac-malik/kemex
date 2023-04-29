import * as React from "react";
import { useSnapshot } from "valtio";

import Drawer from "@mui/material/Drawer";
import { Close } from "../assets/icons";

import { Facebook } from "icons";
import { Instagram } from "icons";
import { Twitter } from "icons";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { Navbar } from "#/Navbar";
import { state } from "state";
import { widthByPercent } from "shared/common";
import { useScreen } from "shared/hooks";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  textarea: "",
};

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

              <h1 className={`text-orange-600 p-2 text-center text-2xl/[45px]`}>
                Contact Details
              </h1>
              <ul className="bg-gray-200 p-8 m-2 rounded-lg">
                <li className="text-lg text-gray-700">
                  Address: 123 Main Street, City, State
                </li>
                <li className="text-lg text-gray-700">Phone: 555-1234</li>
                <li className="text-lg text-gray-700">
                  Email: example@example.com
                </li>
              </ul>
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form className="bg-gray-100 rounded-lg p-6 m-2">
                  <div className="mb-4">
                    <label>
                      <h1
                        className={`text-orange-600 text-center p-2 text-2xl/[45px]`}
                      >
                        HAPPY TO ANSWER YOUR QUESTIONS
                      </h1>
                    </label>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Name:
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
                      Email:
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
                      Message:
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
                      <div className="ml-1.5">Social</div>
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
