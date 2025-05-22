import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction"; //이게 미들웨오 함수임


//✅첫페이지 : 전체 상품보여주는 페이지 path="/" (ProductAll)

const ProductAll = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams(); //현재 url의 쿼리를 읽어오는 훅
  let [error, setError] = useState("");
  

//✅productList를 Redux를 통해 store에 저장했다가 다시 가져오는 로직이다.
  const dispatch = useDispatch();
  const productList = useSelector((state)=>state.product.productList); 
  //combineReducers에서 productReducer를 product라고 정의해놨기때문에 productList앞에 product를 붙혀야한다.

  const getProducts = async () => {
  const searchQuery = query.get("q") || ""; //q=뒤에오는 쿼리값을 읽어서 searchQuery에 담음
  console.log("쿼리값은?",searchQuery);
  dispatch(productAction.getProducts(searchQuery)) //미들웨어를 거쳐서가기위한 dispatch (안그럼 바로 store로감)
  };

   //🔵🔵🔵 (here)

  useEffect(() => {
    getProducts(); //쿼리가 바뀔때마다 api를 다시호출 (그 쿼리에 맞는 api)
  }, [query]);


  return (
    <Container>
      {error ? ( <Alert variant="danger" className="text-center"> {error} </Alert> ) : (
        <Row> {productList.length > 0 && productList.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
        // React에서 목록을 렌더링할 때 각 항목에 고유한 식별자(key)를 제공해야 함( 고유한 값이 key로 사용됨 - 예)index )
        // md, ms는 화면 렌더링할때, 컬럼 사이즈
      )}
    </Container>
  );
};

export default ProductAll;






  //🔵🔵🔵
  //네비게이션 바에서 키워드를 검색어에 입력하여 Enter키를 누르면 쿼리가 main path="/" 뒤에 붙는데
  //그렇게 url이 바뀌면, 키워드가 붙은 그 url로 json-server에서 알아서 검색해준다고함
  //(쿼리값이 null이면 모든 상품이나오는 그냥 메인화면 나옴)
  // const getProducts = async () => {
  //   try { //json-server에서 ?q= 하고 쿼리를보내주면 알아서 검색을 해준다고함
  //     let keyword = query.get("q") || "";
  //     let url = `https://my-json-server.typicode.com/NamikKim4/namik-simpson/products?q=${keyword}`;
  //     let response = await fetch(url);
  //     let data = await response.json();
  //     if (data.length < 1) {
  //       if (keyword !== "") { setError(`${keyword}와 일치하는 상품이 없습니다`); } 
  //       else { throw new Error("결과가 없습니다"); }
  //     }
  //     setProducts(data); //받아온 데이터를 products에 세팅
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };
