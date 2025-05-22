import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import productDetailReducer from "./productDetailReducer";

//reducer가 여러개면 combineReducers:객체형태로 합쳐줘야함 - 로그인,상품,상품상세 (키:값 형태로)
export default combineReducers({
    auth:authenticateReducer,
    product:productReducer,
    productDetail:productDetailReducer,
});
//useSelector에서 접근할때, 어떤 reducer에있는 state를 가져왔는지 명명해야하는데, 그때 
//productReducer대신에 product를 써준다.