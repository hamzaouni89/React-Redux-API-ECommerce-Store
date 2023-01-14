import { combineReducers } from "redux";
import CartReducer from "./Cart";
import BrowsingHistoryReducer from "./Browsing-history";
import ShoppingNavigationReducer from "./Shopping-navigation";

const GlobalReducer = combineReducers({
  ShopNav: ShoppingNavigationReducer,
  Cart: CartReducer,
  BrowsingHistory: BrowsingHistoryReducer,
});

export default GlobalReducer;
