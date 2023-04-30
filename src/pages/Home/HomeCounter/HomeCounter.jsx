import React, { useEffect } from "react";
import style from "./HomeCounter.module.css";
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
              <h5>Lines of code</h5>
            </div>

            <div className="col-lg-3" id={style.stats}>
              <i className="fa fa-check" aria-hidden="true"></i>
              <div className="counting" data-count="280">
                0
              </div>
              <h5>Projects done</h5>
            </div>

            <div className="col-lg-3" id={style.stats}>
              <i className="fa fa-user" aria-hidden="true"></i>
              <div className="counting" data-count="75">
                0
              </div>
              <h5>Happy clients</h5>
            </div>

            <div className="col-lg-3" id={style.stats}>
              <i className="fa fa-coffee" aria-hidden="true"></i>
              <div className="counting" data-count="999">
                0
              </div>
              <h5>Cups of coffee</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
