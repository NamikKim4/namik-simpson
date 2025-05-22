import {createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import productReducer from "./reducers/productReducer"; //productReducer바로 안쓰고, rootReducer에 담아서 사용함
import rootReducer from "./reducers/index";  //reducers파일에 index가 rootReducer임을 정의하는것

let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
//thunk라는 Middleware를 적용할것임
//composeWithDevTools : devTool적용한거임

export default store;




// //<Redux toolkit 적용>

// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./reducers/productReducer";
// import authenticateReducer from "./reducers/authenticateReducer";
// import productDetailReducer from "./reducers/productDetailReducer";

// let store = configureStore(
//     {reducer:{  
//     auth:authenticateReducer,
//     product:productReducer,
//     productDetail:productDetailReducer,}
//     }
// );
// //combinereducer (index.js가 하는 역할)
// //thunk
// //applyMiddleware
// //composeWithDevTools 
// //configureStore를 쓰면 위 4개를 쓸필요가 없어짐

// export default store;




