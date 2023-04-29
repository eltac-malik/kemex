import React from 'react'
import {Link} from 'react-router-dom'

import {state} from 'state'

import {BasicSelect} from '#/Select'
import {Phone} from 'icons'

import {IMAGE} from 'assets/img'

import style from './Navbar.module.css'

export const Navbar = () => {

  return (
    <div className={style.navbar}>
        <p className={style.logo}><img src={IMAGE.LOGO_PNG} /></p>
        <ul className={style.ul}>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/products'>Products</Link>
            <Link className='link' to='/contact'>Contact</Link>
        </ul>
        {/* <BasicSelect/> */}
        <Phone size={30} onClick={()=>state.drawer = !state.drawer}/>
    </div>
  )
}
