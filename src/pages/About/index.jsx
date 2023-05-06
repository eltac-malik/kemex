import {useEffect} from 'react'
import {IMAGE} from 'assets/img'
import style from './About.module.css';
import { Slide } from './Slider/Slide';
import { Brands } from './Brands/Brands';
import {useTranslation} from 'react-i18next'
import { Footer } from '#/Footer/Footer';

export const About = () => {
  const {t} = useTranslation()
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('selected_language') || "az");
  }, ['az','en','ru']);
  return (
    <div>
      <Slide/>
      <div className='row' id={style.why}>
        <div className='col-md-6'>
          <div className={style.imgContainer}>
            <img src={IMAGE.TRAIN} alt="" />
          </div>
        </div>
        <div className='col-md-6'>
          <div className={style['text-Container']}>
            <h1>{t('why_us')}</h1>
            <p>{t('abzas1')}</p>
            <p>{t('abzas2')}</p>
          </div>
        </div>
      </div>
      <Brands/>
      <div className='row' id={style.why}>
       
        <div className='col-md-6'>
          <div className={style['text-Container']}>
          <h1>{t('why_us')}</h1>
            <p>{t('abzas1')}</p>
            <p>{t('abzas2')}</p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={style.imgContainer}>
            <img src={IMAGE.ABOUT} alt="" />
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}

