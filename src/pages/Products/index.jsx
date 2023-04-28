import React from "react";

import { Product } from "./Product";
import { products } from "./Data";
import style from "./Products.module.css";
import Header from "../../components/Header/index.jsx";

export const Products = () => {
  console.log(products);
  return (
    <div
      className={`${style.products} h-screen w-full flex bg-gray-800 overflow-y-auto`}
    >
      <main className={`${style.first_section} w-full`}>
        <div className="px-10 mt-5">
          <Header title="Home" subtitle="Products" />
        </div>
        <div className="px-10 grid grid-cols-4 gap-4">
          {products.map((product) => {
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
      </main>
    </div>
  );
};
