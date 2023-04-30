import React, { useEffect, useState } from "react";

import { IMAGE } from "assets/img";
import { mainTitles } from "shared/constant";
import style from "./Home.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HomeCounter } from "./HomeCounter/HomeCounter";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

const SecondSectionPart = ({ title, image }) => {
  return (
    <div className={style.ss_parts} data-aos="fade-up">
      <img src={image} alt="" />
      <div className={style.ss_textarea}>
        <div className={style.line}></div>
        <h1>{title.t1}</h1>
        <span className={style.ss_readmore}>
          Read more{" "}
          <div className={style.ss_more}>
            <AiOutlineArrowRight size={20} />
          </div>
        </span>
      </div>
    </div>
  );
};

export const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count + 1) % mainTitles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        <SecondSectionPart title={mainTitles[count]} image={IMAGE.NOBIAN} />
        <SecondSectionPart
          title={mainTitles[(count + 1) % mainTitles.length]}
          image={IMAGE.NOBIAN}
        />
        <SecondSectionPart
          title={mainTitles[(count + 2) % mainTitles.length]}
          image={IMAGE.NOBIAN}
        />
      </div>
      <div>
        <HomeCounter />
        <div className="row" id={style.home_about}>
          <div className="col-md-6 col-12 col-sm-6 " data-aos="fade-right">
            <div className={style.text_Container}>
              <h1>Why US?</h1>
              <p>
                Kemex International is a leading company in the industrial
                chemicals supply chain, specializing in serving the oil sector,
                mining, water supply, and food industries. Established in 2018
                by a team of professionals with extensive experience in the
                field, Kemex International has quickly become one of the market
                leaders in the CIS region. Our mission is to provide added value
                to our customers, optimize their costs, and offer flexibility to
                meet their needs.
              </p>
              <p>
              We prioritize building long-term relationships
                with our clients, and we achieve this by delivering exceptional
                service and focusing on their specific requirements. At Kemex
                International, we are committed to maintaining the highest
                standards of quality, safety, and sustainability in all aspects
                of our business. Our team of experts is dedicated to staying
                up-to-date with the latest developments in the industry and
                delivering innovative solutions to meet our customers' evolving
                needs.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 col-sm-6" data-aos="fade-left">
            <div className={style.imgContainer}>
              <img src={IMAGE.CHLORINEPRO} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center flex-col items-center mt-20 w-[100%]">
        <HomeCarousel />
      </div>
      <div className="row" id={style.home_about}>
        <div className="col-md-6 col-12 col-sm-6" data-aos="fade-right">
          <div className={style.imgContainer}>
            <img src={IMAGE.CHLORINEPRO2} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12 col-sm-6 " data-aos="fade-left">
          <div className={style.text_Container}>
            <h1>Why Choose Kemex International?</h1>
            <p>
              Kemex International is a company founded in 2018 by professionals
              in the industrial chemicals supply chain. Today, we are one of the
              market leaders in the CIS region, and we have strong partnerships
              with companies in the oil sector, mining, water supply, and food
              industries.
            </p>
            <p>
              Our top priorities at Kemex International are adding value to our
              customers, optimizing their costs, and being flexible to meet
              their needs. We strive to build long-term relationships with our
              clients by focusing on these priorities and providing exceptional
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
