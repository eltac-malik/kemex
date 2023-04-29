import React from 'react'
import {IMAGE} from 'assets/img'
import style from './Brands.module.css';
export const Brands = () => {
  return (
    <div className={style.brands}>
        <div className={style.partners}>
            <h1>PARTNERS</h1>
            <p>The global companies rely on us.</p>
        </div>
        <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
         
    <div className="d-flex position-relative flex-column" id={style['card']}>
        <div className={style.imgContainer}>
            <img src={IMAGE.BRAND1}/>
        </div>
        <div className={style.content}>
            <h2>Card One</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
        </div>
    </div>
    <div className="d-flex position-relative flex-column" id={style['card']}>
        <div className={style.imgContainer}>
            <img src={IMAGE.BRAND2}/>
        </div>
        <div className={style.content}>
            <h2>Card Two</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
        </div>
    </div>
    <div className="d-flex position-relative flex-column" id={style['card']}>
        <div className={style.imgContainer}>
            <img src={IMAGE.BRAND3}/>
        </div>
        <div className={style.content}>
            <h2>Card Three</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
        </div>
    </div>
    <div className="d-flex position-relative flex-column" id={style['card']}>
        <div className={style.imgContainer}>
            <img src={IMAGE.BRAND4}/>
        </div>
        <div className={style.content}>
            <h2>Card Three</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
        </div>
    </div>
</div></div>
  )
}
