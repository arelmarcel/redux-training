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
import reducer from './rootReducer';
import logger from './middleware/logger';

// import logger from './middleware/logger';
import api from './middleware/api';

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, api),
});

export default store;
