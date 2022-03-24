import store from "./store/store";
import * as actions from './store/product/actionTypes';


store.subscribe(() => {
    console.log('Store changed!', store.getState());
});


store.dispatch({
    type: actions.PRODUCT_ADDED,
    payload: {
        name: "Product 1",
        price: 1500,
    }
});



store.dispatch({
    type: actions.PRODUCT_ADDED,
    payload: {
        name: "Product 3",
        price: 500,
    }
});

store.dispatch({
    type: actions.PRODUCT_ADDED,
    payload: {
        name: "Product aaaa",
        price: 500,
    }
});

store.dispatch({
    type: actions.PRODUCT_ADDED,
    payload: {
        name: "Product bbb",
        price: 500,
    }
});

store.dispatch({
    type: actions.MARK_AS_DISCOUNTED,
    payload: {
        id: 2,
        hasDiscount: true
    }
});

store.dispatch({
    type: actions.PRODUCT_ADDED,
    payload: {
        name: "Product ccc",
        price: 500,
    }
});

console.log(store.getState())
