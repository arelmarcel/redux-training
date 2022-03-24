let lastId = 0;
const initialState = [];
import * as actions from './actionTypes';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        //fill with action type name
        // case "productAdded":
        //     return [
        //         ...state, {
        //             id: ++lastId,
        //             // id: action.payload.id,
        //             name: action.payload.name,
        //             price: action.payload.price,
        //             hasDiscount: action.payload.hasdiscount
        //         }
        //     ]

        // case "productRemoved":
        //     return state.filter(product => product.id !== action.payload.id);
        case actions.PRODUCT_ADDED:
            return [
                ...state, {
                    id: ++lastId,
                    // id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    hasDiscount: action.payload.hasdiscount
                }
            ]
        case actions.PRODUCT_REMOVED:
            return state.filter(product => product.id !== action.payload.id);

        case actions.MARK_AS_DISCOUNTED:
            return state.map(product =>
                product.id !== action.payload.id ?
                    product : {
                        ...product,
                        hasDiscount: action.payload.hasDiscount
                    });

        default:
            return state;
    }
}