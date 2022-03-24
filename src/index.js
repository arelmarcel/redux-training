import store from "./store/store";
import { productAdded, productMarkAsDiscount } from "./store/product";
import { addProductToCart, updateQuantity } from "./store/cart";
// import { addNewUser} from 

// store.subscribe(() => {
//     console.log('Store changed!', store.getState());
// });

store.dispatch(productAdded({
    name: "Product 1",
    price: 1500,
    hasDiscount: false,
}))

store.dispatch(productAdded({
    name: "Product 2",
    price: 500,
    hasDiscount: false,
}))

store.dispatch(productAdded({
    name: "Product AA",
    price: 100,
    hasDiscount: false,
}))

store.dispatch(productAdded({
    name: "Product B",
    price: 200,
    hasDiscount: false,
}))

store.dispatch(productMarkAsDiscount({
    id: 2,
    hasDiscount: true,
}))

store.dispatch(productAdded({
    name: "Product C",
    price: 1200,
    hasDiscount: true,
}))

store.dispatch({
    type: 'apiRequest',
    payload: {
        url: 'https://fakestoreapi.com/products',
        method: 'GET',
        onSuccess: 'onsuccess',
        onError: 'onerror'
    }
})


// store.dispatch({
//     type: actions.PRODUCT_REMOVED,
//     payload: {
//         id: 3,
//     }
// })

// store.dispatch({
//     type: actions.PRODUCT_ADDED,
//     payload: {
//         name: "Product ccc",
//         price: 500,
//         hasDiscount: false,
//     }
// });

// console.log(store.getState())
