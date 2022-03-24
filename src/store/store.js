// import { createStore } from "redux";
// import reducer from './product/reducer';
// import { devToolsEnhancer } from "@redux-devtools/extension";



// const store = createStore(
//     reducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     devToolsEnhancer({ trace: true })
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import reducer from './product';

const store = configureStore({
    reducer
});

export default store;
