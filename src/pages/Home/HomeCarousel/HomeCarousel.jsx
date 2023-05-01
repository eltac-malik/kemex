import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeProduct from "./HomeProduct.jsx";
import { products, responsive } from "shared/mock";
import {useTranslation} from 'react-i18next';
import React, {useEffect} from 'react';

export default function HomeCarousel() {
  const product = products.map((item) => (
    <HomeProduct name={item.name} url={item.imageurl} form={item.form} specification={item.specification} />
  ));

  const {t} = useTranslation()
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('az');
  }, ['az','en','ru']);


  return (
    <><h1 className="m-10 text-3xl">{t('ourProducts')}</h1>
    <div className="home_carousel w-[80%] flex justify-center  flex-col">
      
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass=" mr-100 w-[50%] flex justify-center items-center"
      >
        {product}
      </Carousel>
    </div>
    </>
  );
}
