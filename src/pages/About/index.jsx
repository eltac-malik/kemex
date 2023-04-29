import React from 'react'
import {IMAGE} from 'assets/img'
import style from './About.module.css';
import { Slide } from './Slider/Slide';
import { Counter } from './Counter/Counter';
import { Brands } from './Brands/Brands';

export const About = () => {
  return (
    <div>
      <Slide/>
      <Counter/>
      <div className='row' id={style.why}>
        <div className='col-md-6'>
          <div className={style.imgContainer}>
            <img src={IMAGE.TRAIN} alt="" />
          </div>
        </div>
        <div className='col-md-6'>
          <div className={style['text-Container']}>
            <h1>Why US?</h1>
            <p>Kemex International was founded in 2018 by industrial chemicals supply chain professionals. The company today is among the market leaders in the CIS region and cooperates with most of the companies in the oil sector, mining, water supply and food industries.</p>
            <p>Added value, customer cost optimization and flexibility are the company's top priorities in building long-term relationships.</p>
          </div>
        </div>
      </div>
      <Brands/>
      <div className='row' id={style.why}>
       
        <div className='col-md-6'>
          <div className={style['text-Container']}>
            <h1>Why US?</h1>
            <p>Kemex International was founded in 2018 by industrial chemicals supply chain professionals. The company today is among the market leaders in the CIS region and cooperates with most of the companies in the oil sector, mining, water supply and food industries.</p>
            <p>Added value, customer cost optimization and flexibility are the company's top priorities in building long-term relationships.</p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='img-Container'>
            <img src={IMAGE.ABOUT} alt="" />
          </div>
        </div>
      </div>
      <Counter/>


    </div>
  )
}

