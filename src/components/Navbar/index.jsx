import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import {state} from 'state'
import {useTranslation} from 'react-i18next'

import {BasicSelect} from '#/Select'
import {Phone} from 'icons'

import {IMAGE} from 'assets/img'

import style from './Navbar.module.css'

export const Navbar = () => {
  const {t} = useTranslation()
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem(localStorage.getItem('selected_language') || "az"));
  }, ['az','en','ru']);

  return (
    <div className={style.navbar}>
        <p className={style.logo}><img src={IMAGE.LOGO_PNG} /></p>
        <ul className={style.ul}>
            <Link className='link' to='/'>{t('home')}</Link>
            <Link className='link' to='/about'>{t('about')}</Link>
            <Link className='link' to='/products'>{t('products')}</Link>
            <Link className='link' to='/contact'>{t('contact')}</Link>
        </ul>
         <BasicSelect/>
        <Phone size={30} onClick={()=>state.drawer = !state.drawer}/>
    </div>
  )
}
