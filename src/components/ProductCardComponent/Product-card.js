import React from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../redux/action/Cart";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import ProductDetailsOverlayComponent from "../ProductDetailsOverlayComponent/Product-details-overlay";
import "./Product-card.css";
import ReactDOM from "react-dom";
import GlobalStore from "../../redux/store";

/* Individual card component for each product in the store */
const ProductCardComponent = (props) => {
  /*  Initialize global states */
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const cartState = [...globalState.Cart];

  /* Creating variables for referencing individual properties */
  const title = props.title;
  const imageURL = props.image;
  const briefDescription = props.briefDescription;
  const price = props.price;
  const id = props.obj.id;

  /* Function for checking if a item is inside the shopping cart */
  const inCartCheck = () => {
    for (let item of cartState) {
      if (id === item.id) {
        return true;
      }
    }
  };

  const AddSingleProductToCart = () => {
    dispatch(AddToCart(props.obj));
  };
  const RemoveSingleProductToCart = () => {
    dispatch(RemoveFromCart(props.obj.id));
  };

  return (
    <div className="product-card-container">
      <h2 className="product-title">{title}</h2>
      <div className="product-image-container">
        <img className="product-image" src={imageURL} alt={briefDescription} />
      </div>
      <p className="product-brief-description">{briefDescription}</p>
      <div className="product-card-options">
        <p className="product-price">${price}</p>
        {inCartCheck(title) ? (
          <button className="cart-option" onClick={RemoveSingleProductToCart}>
            <span className="shopping-cart">
              <FaShoppingCart />
              &nbsp;Remove From Cart
            </span>
          </button>
        ) : (
          <button className="cart-option" onClick={AddSingleProductToCart}>
            <span className="shopping-cart">
              <FaShoppingCart />
              &nbsp;Add to Cart
            </span>
          </button>
        )}

        <button
          className="product-view-button"
          onClick={() => {
            ReactDOM.render(
              <>
                <Provider store={GlobalStore}>
                  <ProductDetailsOverlayComponent productId={props.obj.id} />
                </Provider>
              </>,
              document.getElementById("product-details-overlay-div")
            );
            document
              .getElementsByClassName("product-details-overlay")[0]
              .classList.add("overlayShow");
          }}
        >
          <span id="product-q-view">
            <FaEye />
            &nbsp; Quick View
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCardComponent;
