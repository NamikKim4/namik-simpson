
//미들웨어를 사용하여 동기적작업만 처리할 수 있는 redux를 비동기작업을 처리할 수 있게끔한다.

function getProducts(searchQuery){
    return async(dispatch, getState)=>{ //getState:현재의 state정보를 알수있음
        let url = `https://my-json-server.typicode.com/NamikKim4/namik-simpson/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        console.log("data",data);
        //setProdictList(data);
        dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}}) //미들웨어를 거쳐서 reducer로 가야하므로 미들웨어함수에 dispatch함수가 있다.
        console.log("dataaaa",data)
    }
}
export const productAction={getProducts}




// //<Redux toolkit 사용>
// import {getAllProducts,getSingleProduct} from "../reducers/productReducer"; //productSlice의 reducer를 productActions라는 이름으로 받아옴

// function getProducts(searchQuery){ //서버에서 데이터를 가져올때 필요한 매개변수는 함수의 파라미터에 넣어서 전달
//     return async(dispatch, getState)=>{ //getState:현재의 state정보를 알수있음
//         let url = `https://my-json-server.typicode.com/NamikKim4/namik-simpson/products?q=${searchQuery}`
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log("data4444",data);
//         //setProdictList(data);
//         dispatch(getAllProducts({data})) //productActions안에 있는getAllProducts함수를 호출
//     }
// }
// export const productAction={getProducts}