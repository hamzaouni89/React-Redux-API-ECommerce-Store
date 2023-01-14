import React from "react";
import { Link } from "react-router-dom";
import UpdateBrowsingHistory from "../../redux/action/Browsing-history";
import { useDispatch } from "react-redux";
import "./Header.css";
import Logo from "../../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import BannerComponent from "../BannerComponent/Banner";
/*=============================================
=            HeaderComponent            =
=============================================*/

const HeaderComponent = () => {
  const dispatch = useDispatch();
  dispatch(UpdateBrowsingHistory("/"));
  return (
    <>
      <section className="common-header">
        {/* Top section for logo and slogan header */}
        <div className="logo-container">
          <div>
            <Link
              id="logo"
              to="/"
              onClick={() => {
                dispatch(UpdateBrowsingHistory("/"));
              }}
            >
              <img src={Logo} alt="logo with Shopkidos Text on it" />
            </Link>
          </div>
          <h1>MAKE A DIFFERENCE</h1>
        </div>
        <nav>
          {/* Navigation section with site routs */}
          <ul>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/about"));
                }}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/news"));
                }}
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                className="right-side-buttons"
                to="/cart"
                onClick={() => {
                  dispatch(UpdateBrowsingHistory("/cart"));
                }}
              >
                <span>
                  <FaShoppingCart />
                  &nbsp;CART
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <BannerComponent />
    </>
  );
};
/*=====  End of HeaderComponent  ======*/

export default HeaderComponent;
