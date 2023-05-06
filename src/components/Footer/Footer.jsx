import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Style  from './Footer.module.css'
import {IMAGE} from 'assets/img'
import {useTranslation} from 'react-i18next'



export const Footer = () => {

    const {t} = useTranslation()
    
  return (
    <div className="container-fluid bg-dark text-light footer pt-5  wow fadeIn" id={Style.main} data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5" >
            <div className="col-lg-3 col-md-6" id={Style.company}>
                <h4 className="text-white mb-3 ml-3">{t('footercompany')}</h4>
                <Link className="btn btn-link" to="/about">{t('footerAbout')}</Link>
                <Link className="btn btn-link" to="Contact">{t('footerContact')}</Link>
                <Link className="btn btn-link" to="">{t('footerPolicy')}</Link>
                <Link className="btn btn-link" to="">{t('footerTerms')}</Link>
                <Link className="btn btn-link" to="">{t('footerHelp')}</Link>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-3">{t('contact')}</h4>
                <p className="mb-2"><i className="fa fa-map-marker me-3"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-phone me-3"></i>+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                <div className="d-flex pt-2" id={Style.sosial}>
                    <Link className="btn btn-outline-light btn-social" to=""><i className="fa fa-twitter"></i></Link>
                    <Link className="btn btn-outline-light btn-social" to=""><i className="fa fa-facebook-f"></i></Link>
                    <Link className="btn btn-outline-light btn-social" to=""><i className="fa fa-youtube"></i></Link>
                    <Link className="btn btn-outline-light btn-social" to=""><i className="fa fa-linkedin"></i></Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-3">{t('footerGalery')}</h4>
                <div className="row g-2 pt-2" id={Style.galery}>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src={IMAGE.SLIDE1} alt=""/>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src={IMAGE.SLIDE2} alt=""/>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src={IMAGE.SLIDE3} alt=""/>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src={IMAGE.TRAIN} alt=""/>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src={IMAGE.ABOUT} alt=""/>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src={IMAGE.SLIDE1} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-3">{t('footerNews')}</h4>
                <p>{t('footerNewsUnder')}</p>
            </div>
        </div>
    </div>
    <div className="container pb-10">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <Link className="border-bottom" to="#">Kemex</Link>, All Right Reserved.

                  <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
