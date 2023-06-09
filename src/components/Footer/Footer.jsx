import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";
import { IMAGE } from "assets/img";
import { useTranslation } from "react-i18next";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5  wow fadeIn"
      id={Style.main}
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6" id={Style.company}>
            <h4 className="text-white mb-3 ml-3">{t("footercompany")}</h4>
            <Link className="btn btn-link" to="/about">
              {t("footerAbout")}
            </Link>
            <Link className="btn btn-link" to="Contact">
              {t("footerContact")}
            </Link>
            <Link className="btn btn-link" to="">
              {t("footerPolicy")}
            </Link>
            <Link className="btn btn-link" to="">
              {t("footerTerms")}
            </Link>
            <Link className="btn btn-link" to="">
              {t("footerHelp")}
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">{t("contact")}</h4>
            <p className="mb-2">
              <LocationOnIcon fontSize="small" /> 123 Street, New York, USA
            </p>
            <p className="mb-2">
              <PhoneIcon fontSize="small" /> +012 345 67890
            </p>
            <p className="mb-2">
              <EmailIcon fontSize="small" /> info@example.com
            </p>
            <div className="d-flex pt-2" id={Style.sosial}>
              <Link className="btn btn-outline-light btn-social" to="">
                <TwitterIcon />
              </Link>
              <Link className="btn btn-outline-light btn-social" to="">
                <FacebookIcon />
              </Link>
              <Link className="btn btn-outline-light btn-social" to="">
                <YouTubeIcon />
              </Link>
              <Link className="btn btn-outline-light btn-social" to="">
                <LinkedInIcon />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">{t("footerGalery")}</h4>
            <div className="row g-2 pt-2" id={Style.galery}>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src={IMAGE.SLIDE1}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src={IMAGE.SLIDE2}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src={IMAGE.SLIDE3}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src={IMAGE.TRAIN}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src={IMAGE.ABOUT}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src={IMAGE.SLIDE1}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">{t("footerNews")}</h4>
            <p>{t("footerNewsUnder")}</p>
          </div>
        </div>
      </div>
      <div className="container pb-10">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <Link className="border-bottom " to="#">
                Kemex
              </Link>
              , All Right Reserved.
              <div className="border-bottom mt-2 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Designed By PARAMETRIC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
