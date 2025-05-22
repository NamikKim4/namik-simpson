let initialState={
    productList:[]
}
function productReducer(state=initialState,action){
    let {type,payload} = action
    switch(type){
        case "GET_PRODUCT_SUCCESS":
            return{...state, productList:payload.data}
            
    default:
            return{...state};
    }
}

export default productReducer; //store에서 import하기위해서 수출해야함



// //<Redux toolkit 적용>
// import {createSlice} from "@reduxjs/toolkit"

// let initialState={
//     productList:[]
// }

// export const productSlice = createSlice({ //createSlice는 객체를 매개변수로받는다. (객체에는 3개가 들어있어야한다.)
//     name:'product', //그 대문자로 된거를 slice가 알아서 유니크한 값을 만들어줄건데 그때 필요한값이 name이라고함
//     initialState,
//     reducers:{ //reducers는 객체안에 함수가 있어야한다.
//         getAllProducts(state,action){ //모든 케이스에 ...state와 return을해줘야하는것이 없어짐
//             state.productList = action.payload.data;
//         }, 
//         getSingleProduct(state,action){
//             state.selectedItem = action.payload.data;
//         },
//     }
// });
// console.log("productSlice",productSlice);//👉Slice객체는 reducer,action라는 속성이 있다.


// export default productSlice.reducer; //store로 보내기위한 reducer속성
// export const {getAllProducts,getSingleProduct} = productSlice.actions; //actions에 state변경함수가 담겨있음 (state변경함수를 객체에 담아서 보냄)
// //type대신 쓰일 식별자로서 함수명이 필요하기때문에 action이라는 속성을써서 export하는것임                                                                                                 

