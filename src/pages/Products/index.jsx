import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from "#/Header/index.jsx";
import {Search} from '#/Search'
import { Footer } from "#/Footer/Footer";

import { Product } from "./Product";

import { products } from "shared/mock";

import style from "./Products.module.css";

export const Products = () => {
  const { t } = useTranslation();

  const [input, setInput] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => setProductList(products), []);

  const handleFilter = (e) => setInput(e)

  return (
    <div
      className={`${style.products} h-screen w-full flex flex-col bg-gray-800 `}
    >
      <main className={`${style.first_section} w-full`}>
        <div className="px-10 mt-4 mb-4">
          <Header title={t("home")} subtitle={t("products")} />
        </div>
        <div className="flex w-full justify-center items-start flex-col px-10">
          <Search
          onChange={(e) => handleFilter(e.target.value)}
          />
          <div className=" grid grid-cols-4 gap-4 w-full">
            {productList.filter((e) => {
                if (input === "") {
                  return e;
                } else if (e.name.toLowerCase().includes(input.toLowerCase())) {
                  return e;
                }
              })
              .map((product) => {
                return (
                  <Product
                    key={product.id}
                    title={product.name}
                    image={product.image}
                    form={product.form}
                    application={product.application}
                    specification={product.specification}
                  />
                );
              })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
