import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../login/login.js";
import { ProductList } from "../productList/productList.js";
import { CreateProduct } from "../newProduct/newProduct.js";
import { SalesList } from "../sales/salesList.js";
import { CustomerProductList } from "../customerProductList/custProductList.js";
import { ShoppingCart } from "../shoppingCart/shoppingCart.js";


export const MenuBar = ({ rol }) => {
  return (
    <Routes>
      {rol === "admin" ? (
        <Fragment>
          <Route path="/" element={<Login />} />
          <Route path="/ProductList" element={< ProductList />} />
          <Route path="/SalesList" element={<SalesList/>}/>
          <Route path="/CreateProduct" element={< CreateProduct />} />
        </Fragment>
      ) : (
        <Fragment>
          <Route path="/" element={<Login />} />
          <Route path="/CustomerProductList" element={< CustomerProductList />} />
          <Route path="/ShoppingCart" element={< ShoppingCart />} />
        </Fragment>
      )}
    </Routes>
  );
};