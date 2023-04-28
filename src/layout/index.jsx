import * as React from "react";
import { useSnapshot } from "valtio";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { Navbar } from "#/Navbar";
import { state } from "state";
import { widthByPercent } from "shared/common";
import { useScreen } from "shared/hooks";
import style from "./Drawer.module.css";

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
              <span
                className={`text-stone-800 hover:text-red-400 font-bold cursor-pointer animate-pulse p-4 mt-1`}
                onClick={closeDrawer}
              >
                <CloseIcon />
              </span>
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
              <Formik>
                <Form className="bg-gray-100 rounded-lg p-6 m-2">
                  <div className="mb-4">
                    <label><h1 className={`text-orange-600 text-center p-2 text-2xl/[45px]`}>HAPPY TO ANSWER YOUR QUESTIONS</h1></label>
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

                  <button
                    type="submit"
                    className="bg-gray-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse"
                  >
                    Submit
                  </button>
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
