import React, { useEffect, useState } from "react";

import { IMAGE } from "assets/img";
import { mainTitles } from "shared/constant";
import style from "./Home.module.css";
import {AiOutlineArrowRight} from "react-icons/ai"

export const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      count === mainTitles.length - 1 ? setCount(0) : setCount(count + 1);
    }, 5000);
  }, [count]);

  return (
    <div className={style.home}>
      <div className={style.first_section}>
        <div className={style.data} data-aos="fade-up">
          <h1>{mainTitles[count].t1}</h1>
          <h2>{mainTitles[count].t2}</h2>
        </div>
        <p className={style.employeers} data-aos="zoom-in-down">
          <img src={IMAGE.EMPLOYEERS} alt="" />
        </p>
      </div>
      <div className={style.second_section}>
      <div className={style.ss_parts}>
          <img src={IMAGE.NOBIAN} alt="" />
          <div className={style.ss_textarea}>
            <div className={style.line}></div>
            <h1>{mainTitles[count].t1}</h1>
			<span>Read more <AiOutlineArrowRight values={{className:'arrow_icon'}}/></span>
          </div>
        </div>
		<div className={style.ss_parts}>
          <img src={IMAGE.NOBIAN} alt="" />
          <div className={style.ss_textarea}>
            <div className={style.line}></div>
            <h1>{mainTitles[count].t1}</h1>
			<span>Read more <AiOutlineArrowRight values={{className:'arrow_icon'}}/></span>
          </div>
        </div>
        <div className={style.ss_parts}>
          <img src={IMAGE.NOBIAN} alt="" />
          <div className={style.ss_textarea}>
            <div className={style.line}></div>
            <h1>{mainTitles[count].t1}</h1>
			<div className={style.ss_textarea}><span>Read more <AiOutlineArrowRight values={{className:'arrow_icon'}}/></span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
