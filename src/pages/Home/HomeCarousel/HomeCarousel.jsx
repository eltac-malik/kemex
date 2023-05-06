import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";

import HomeProduct from "./HomeProduct.jsx";

import { products, responsive } from "shared/mock";
import "react-multi-carousel/lib/styles.css";

export default function HomeCarousel() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="m-10 text-3xl">{t("ourProducts")}</h1>
      <div className="home_carousel w-[80%] flex justify-center  flex-col">
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="mr-100 pb-10 w-[50%] flex justify-center items-center"
        >
          {products.map((item) => (
            <HomeProduct
              key={item.id}
              name={item.name}
              url={item.imageurl}
              form={item.form}
              specification={item.specification}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
