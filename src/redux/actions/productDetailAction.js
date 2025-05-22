
// function getProductDetail(id){
//     return async(dispatch, getState)=>{ //getState:현재의 state정보를 알수있음
//         let url = `https://my-json-server.typicode.com/NamikKim4/namik-simpson/products/${id}`; //과제
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log("data1111",data);
//         dispatch({type:"GET_PRODUCT_DETAIL",payload:{data}}) 
//     }
// }
// export const productDetailAction={getProductDetail}


import { productDetailActions } from "../reducers/productDetailReducer";

function getProductDetail(id){
    return async(dispatch, getState)=>{ //getState:현재의 state정보를 알수있음
        let url = `https://my-json-server.typicode.com/NamikKim4/namik-simpson/products/${id}`; //과제
        let response = await fetch(url);
        let data = await response.json();
        console.log("data1111",data);
        dispatch(productDetailActions.getProductDetail({data})) 
    }
}
export const productDetailAction={getProductDetail}
