import React from "react";
import ShoppingLayoutComponent from "../ShoppingLayoutComponent/Shopping-layout";
import ShoppingNavigationComponent from "../ShoppingNavigationComponent/Shopping-navigation";
import "../../components/ProductDetailsOverlayComponent/Product-overlay.css";
import "./Shopping-page.css";

/*=============================================
=        Products page React Component        =
=============================================*/

/* Routing would be in middle section between header/banner and footer */
const ShoppingPageComponent = () => {
  return (
    <>
      <div id="shopping-page-layout">
        <ShoppingNavigationComponent />
        <ShoppingLayoutComponent />
      </div>
      <div
        className="product-details-overlay"
        id="product-details-overlay-div"
      ></div>
    </>
  );
};

/*=====  End of Cart page React Component  ======*/

export default ShoppingPageComponent;
