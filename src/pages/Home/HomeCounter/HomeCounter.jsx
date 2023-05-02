import React, { useEffect } from "react";
import style from "./HomeCounter.module.css";
import {useTranslation} from 'react-i18next'


export const HomeCounter = () => {
  
  
  useEffect(() => {
    $(".counting").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 4000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  }, []);

  const {t} = useTranslation()
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('selected_language') || "az");
  }, ['az','en','ru']);

  return (
    <section
      id={style.counter_stats}
      className="wow fadeInRight"
      data-wow-duration="1.4s"
    >
      {/* <div className={style["counter-head"]}>
        <h1>Counter head</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          temporibus dolorem?{" "}
        </p>
      </div> */}
      <div id={style.counter}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3" id={style.stats}>
              <i className="fa fa-code" aria-hidden="true"></i>
              <div className="counting" data-count="900000">
                0
              </div>
              <h5>{t('lineOfCode')}</h5>
            </div>

            <div className="col-lg-3" id={style.stats}>
              <i className="fa fa-check" aria-hidden="true"></i>
              <div className="counting" data-count="280">
                0
              </div>
              <h5>{t('projectsDone')}</h5>
            </div>

            <div className="col-lg-3" id={style.stats}>
              <i className="fa fa-user" aria-hidden="true"></i>
              <div className="counting" data-count="75">
                0
              </div>
              <h5>{t('happyClients')}</h5>
            </div>

            <div className="col-lg-3" id={style.stats}>
              <i className="fa fa-coffee" aria-hidden="true"></i>
              <div className="counting" data-count="999">
                0
              </div>
              <h5>{t('cupsOfCoffee')}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
