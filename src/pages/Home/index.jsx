import { useEffect, useState } from "react";
import {useTranslation} from 'react-i18next';


import {RightArrow} from "icons";
import { mainTitles } from "shared/constant";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import {Footer} from '#/Footer/Footer'

import { IMAGE } from "assets/img";
import style from "./Home.module.css";


const SecondSectionPart = ({ title, image }) => {
  const {t} = useTranslation()

  return (
    <div className={style.ss_parts} data-aos="fade-up">
      <img src={image} />
      <div className={style.ss_textarea}>
        <div className={style.line}></div>
        <h1>{t(`${title.t1}`)}</h1>
        <span className={style.ss_readmore}>
          {t('readMore')}{" "}
          <div className={style.ss_more}>
            <RightArrow size={20} />
          </div>
        </span>
      </div>
    </div>
  );
};

export const Home = () => {
  const {t} = useTranslation()
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
          <h1>{t(`${mainTitles[count].t1}`)}</h1>
          <h2>{t(`${mainTitles[count].t2}`)}</h2>
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
        <div className="row" id={style.home_about}>
          <div className="col-md-6 col-12 col-sm-6 " data-aos="fade-up">
            <div className={style.text_Container}>
              <h1>{t('why_us')}</h1>
              <p>
               {t('abzas1')}
              </p>
              <p>
                {t('abzas2')}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 col-sm-6" data-aos="fade-up">
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
        <div className="col-md-6 col-12 col-sm-6" data-aos="fade-up">
          <div className={style.imgContainer}>
            <img src={IMAGE.CHLORINEPRO2} alt="" />
          </div>
        </div>
        <div className="col_p col-md-6 col-12 col-sm-6 " data-aos="fade-up">
          <div className={style.text_Container}>
            <h1>{t('whyChooseKemexInternational')}</h1>
            <p>
              {t('productInfo1')}
            </p>
            <p>
              {t('productInfo2')}
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
