import { useTranslation } from "react-i18next";

import { Footer } from "#/Footer/Footer";
import { Slide } from "./Slider";
import { Brands } from "./Brands";

import { IMAGE } from "assets/img";
import style from "./About.module.css";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Slide />
      <div className="row" id={style.why}>
        <div className="col-md-6">
          <div className={style.imgContainer}>
            <img src={IMAGE.TRAIN} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className={style["text-Container"]}>
            <h1>{t("why_us")}</h1>
            <p>{t("abzas1")}</p>
            <p>{t("abzas2")}</p>
          </div>
        </div>
      </div>
      <Brands />
      <div className="row" id={style.why}>
        <div className="col-md-6">
          <div className={style["text-Container"]}>
            <h1>{t("why_us")}</h1>
            <p>{t("abzas1")}</p>
            <p>{t("abzas2")}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className={style.imgContainer}>
            <img src={IMAGE.ABOUT} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
