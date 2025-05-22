// let initialState={
//     detail:[]
// }
// function productDetailReducer(state=initialState,action){
//     let {type,payload} = action
//     switch(type){
//         case "GET_PRODUCT_DETAIL":
//             return{...state, detail:payload.data}
            
//     default:
//             return{...state};
//     }
// }

// export default productDetailReducer; //store에서 import하기위해서 export해야함


//<Redux toolkit 적용>
import {createSlice} from "@reduxjs/toolkit"

let initialState={
    detail:''
}

export const productDetailSlice = createSlice({ //createSlice는 객체를 매개변수로받는다. (객체에는 3개가 들어있어야한다.)
    name:'detail',
    initialState,
    reducers:{ //reducers는 객체안에 함수가 있어야한다.
        getProductDetail(state,action){ //모든 케이스에 ...state와 return을해줘야하는것이 없어짐
            state.detail = action.payload.data;
        }, 
    }
});


export default productDetailSlice.reducer;
export const productDetailActions = productDetailSlice.actions;