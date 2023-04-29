import React from 'react'
import {Link} from 'react-router-dom'

import {state} from 'state'
import {useTranslation} from 'react-i18next'

import {BasicSelect} from '#/Select'
import {Phone} from 'icons'

import {IMAGE} from 'assets/img'

import style from './Navbar.module.css'

export const Navbar = () => {

    const {t} = useTranslation()
  return (
    <div className={style.navbar}>
        <p className={style.logo}><img src={IMAGE.LOGO_PNG} /></p>
        <ul className={style.ul}>
            <Link className='link' to='/'>{t('home')}</Link>
            <li>{t('about')}</li>
            <Link className='link' to='/products'>{t('products')}</Link>
            <Link className='link' to='/contact'>{t('contact')}</Link>
        </ul>
         <BasicSelect/>
        <Phone size={30} onClick={()=>state.drawer = !state.drawer}/>
    </div>
  )
}
