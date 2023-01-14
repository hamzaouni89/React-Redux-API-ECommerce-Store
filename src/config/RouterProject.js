import React from "react";
import "../css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPageComponent from "../components/CartPageComponent/Cart-page";
import ShoppingPageComponent from "../components/ShoppingPageComponent/Shopping-page";
import HeaderComponent from "../components/HeaderComponent/Header";
import KnowUsPageComponent from "../components/KnowUsComponent/Knowus-page";
import FooterComponent from "../components/FooterComponent/Footer";
const RouterProject = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/shop" exact element={<ShoppingPageComponent />} />
          {/* Shopping page */}
          <Route path="/cart" exact element={<CartPageComponent />} />{" "}
          {/* Shopping Cart page */}
          <Route path="/about" exact element={<KnowUsPageComponent />} />{" "}
          {/* Know us page */}
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
};

export default RouterProject;
