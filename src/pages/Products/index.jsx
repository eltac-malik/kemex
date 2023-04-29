import React, { useState, useEffect } from "react";

import { Product } from "./Product";
import { products } from "shared/mock";
import style from "./Products.module.css";
import Header from "#/Header/index.jsx";
import SearchBox from "#/SearchBar";

export const Products = () => {
  const [input, setInput] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => setProductList(products), []);

  const handleFilter = (e) => {
    if (e && e.id) {
      setInput(e.id);
    }
  };

  const handleClear = () => {
    setProductList(products);
    setInput("");
    console.log("last step 1");
  };

  return (
    <div className={`${style.products} h-screen w-full flex bg-gray-800 `}>
      <main className={`${style.first_section} w-full`}>
        <div className="px-10 mt-4 mb-4">
          <Header title="Home" subtitle="Products" />
          <div
            className={`${style.search_box} pt-2 pl-2 flex justify-start w-full`}
          >
            <SearchBox
              onChange={(e, val) => handleFilter(val)}
              clear={handleClear}
            />
          </div>
        </div>
        <div className="flex">
          <div
            className={`${style.side_bar} pt-4 pl-4 pr-4 w-auto`}
            style={{
              borderRight: "1px solid silver",
            }}
          >
            <SearchBox
              onChange={(e, val) => handleFilter(val)}
              clear={handleClear}
            />
          </div>
          <div
            className="px-10 grid grid-cols-4 gap-4 w-full"
          >
            {productList
              ?.filter((e) => {
                if (input === "") {
                  return e;
                } else if (e.id == input) {
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
    </div>
  );
};
