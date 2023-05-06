import { useTranslation } from "react-i18next";

import { IMAGE } from "assets/img";
import style from "./Slide.module.css";

export const Slide = () => {
  const { t } = useTranslation();

  return (
    <div className={style.carouselExample}>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators" id={style["carousel-indicators"]}>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={IMAGE.SLIDE1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{t("aboutFirstSlideLabel")}</h5>
              <p>{t("aboutFirstSlidetext")}</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={IMAGE.SLIDE2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{t("aboutSecondSlideLabel")}</h5>
              <p>{t("aboutSecondSlideText")}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={IMAGE.SLIDE3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{t("aboutThreeSlideLabel")}</h5>
              <p>{t("aboutThreeSlideText")}</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
