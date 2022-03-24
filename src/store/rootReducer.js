import { combineReducers } from "redux";
import cartReducer from "./cart";
import productReducer from "./product";
import currentUser from "./currentUser";

export default combineReducers({
    products: productReducer,
    carts: cartReducer,
    users: currentUser,
})