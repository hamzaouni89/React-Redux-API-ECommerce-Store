import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  IncreaseCartQty,
  DecreaseCartQty,
  SetCartQty,
  RemoveFromCart,
} from "../../redux/action/Cart";
import "./Shopping-cart.css";
const ProductComponents = () => {
  /* Copying the global state for local use */
  const globalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const inCartProducts = Array.from(globalStateInfo.Cart);
  let subTotal = 0;

  return (
    <div>
      <section id="cart-container">
        <form id="shopping-cart">
          <h1>Your Order</h1>
          <ul>
            {inCartProducts.map((inCartProduct) => {
              subTotal =
                subTotal + inCartProduct.price * inCartProduct.inCartQty;
              return (
                <li key={inCartProduct.id}>
                  <section id="cart-items">
                    <div className="container">
                      {/* <h2>Product</h2> */}
                      <h3>{inCartProduct.title}</h3>
                      <img
                        id="pdt-img"
                        src={inCartProduct.image}
                        alt="Product in shopping cart"
                      />
                      <section id="text-container">
                        <p id="description">{inCartProduct.description}</p>
                        <p id="price">$ {inCartProduct.price}</p>
                      </section>
                    </div>
                    <div id="qty-status">
                      <div id="cart-qty-style">
                        <span>
                          <button
                            className="plus"
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(IncreaseCartQty(inCartProduct.id));
                            }}
                          >
                            &#43; {/* Plus sign */}
                          </button>
                          &nbsp;
                        </span>
                        <span id="qty">
                          <input
                            type="number"
                            value={inCartProduct.inCartQty}
                            min="0"
                            onChange={(e) => {
                              e.target.value > -1 || (e.target.value = "0");
                              if (e.target.value > -1) {
                                dispatch(
                                  SetCartQty(inCartProduct.id, e.target.value)
                                );
                              }
                            }}
                          ></input>
                          &nbsp;
                        </span>
                        <span>
                          <button
                            className="minus"
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(DecreaseCartQty(inCartProduct.id));
                            }}
                          >
                            &#8722; {/* Minus sign */}
                          </button>
                          &nbsp;{" "}
                        </span>
                      </div>
                      <span>
                        <button
                          type="button"
                          className="rmv-btn"
                          onClick={() => {
                            dispatch(RemoveFromCart(inCartProduct.id));
                          }}
                        >
                          Remove From Cart
                        </button>
                        &nbsp;
                      </span>
                    </div>
                  </section>
                </li>
              );
            })}{" "}
          </ul>
          <section id="items-pickup">
            <button id="btn-back">
              <Link to="/shop">Back To Shopping</Link>
            </button>
            <div id="subtotal">
              <p> Subtotal</p>
              <p> $ {subTotal.toFixed(2)} </p>
            </div>
          </section>
        </form>
      </section>
    </div>
  );
};

export default ProductComponents;
