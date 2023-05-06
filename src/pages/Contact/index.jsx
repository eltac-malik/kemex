import { useTranslation } from "react-i18next";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { ArrowRight, Facebook, Instagram, Twitter } from "icons";
import { Footer } from "#/Footer/Footer";

import { valForContact } from "shared/validation";

import style from "./Contact.module.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={style.contact}>
        <div className={style.form}>
          <div
            className={`style.contac_info text-start max-[680px]:items-center`}
          >
            <p className={`text-red-600 text-xl font-bold`}>
              {t("contactUsNow")}
            </p>
            <h2 className="text-2xl	mt-5 font-bold text-neutral-700 w-96  max-[680px]:text-1xl ">
              {t("answerQuestions")}
            </h2>
            <p className={`mt-5 text-2xl w-96 max-[680px]:text-xl pt-1`}>
              {t("contactText")}
            </p>
            <div className="flex flex-wrap">
              <div
                className={`w-44 mt-5 max-[680px]:ml-10 max-[680px]:w-full `}
              >
                <h3>
                  <b className="text-neutral-700">{t("adress")}</b>
                </h3>
                <p>
                  Ahmad Rajabli 1/8,
                  <br /> Adore Plaza, 4th floor
                </p>
              </div>
              <div className={`w-44 mt-5 ml-10  max-[680px]:w-full `}>
                <h3>
                  <b className="text-neutral-700">{t("email")}</b>
                </h3>
                <p>
                  <a href="mailto: info@chemical.az"> info@chemical.az</a>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className={`w-44 mt-5 max-[680px]:ml-10`}>
                <h3>
                  <b className="text-neutral-700">{t("phone")}</b>
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
                  <b className="text-neutral-700">{t("sosialMedia")}</b>
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
              validationSchema={valForContact}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className={`w-96 `}>
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder={t("name")}
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
                      placeholder={t("email")}
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
                      placeholder={t("phone")}
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
                      placeholder={t("message")}
                      rows={3}
                      className={`border-gray-950 appearance-none border-b-2 w-full py-8 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800  ${
                        errors.message && touched.message
                          ? "border-red-500"
                          : ""
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
                      {t("sendMessage")}
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
      <Footer />
    </>
  );
};
