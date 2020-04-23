import { createStore, combineReducers } from "redux";
import { productReducer } from "../reducer/ProductReducer";
import { userReducer } from "../reducer/userReducer";
import { cartReducer } from "../reducer/cartReducer";

let rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    cart: cartReducer
})

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log("dispatched: ", store.getState());
})

export { store }