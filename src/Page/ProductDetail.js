import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import productDetailReducer from "../redux/reducers/productDetailReducer";
import { productDetailAction } from "../redux/actions/productDetailAction";

//✅상품 디테일 페이지

const ProductDetail = () => {
  //const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  //Redux-thunk 미들웨어를 이용한 api 호출 
  const dispatch = useDispatch();
  const product = useSelector((state)=>state.productDetail.detail);

  const { id } = useParams(); //현재 url의 파라미터를 읽어오는 훅
  console.log("id???????????????",id)
  const getProductDetail = async () => {
    setLoading(true);
    dispatch(productDetailAction.getProductDetail(id))
    setLoading(false);
  };


  // const { id } = useParams();
  // const getProductDetail = async () => {
  //   setLoading(true);
  //   let url = `https://my-json-server.typicode.com/NamikKim4/namik-simpson/products/${id}`; //과제
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setLoading(false);
  //   setProduct(data);
  // };


  useEffect(() => {
    getProductDetail();
  }, []);



  if (loading || product == null) return <h1>Loading</h1>;
  return (
    <Container className="product-detail-card">
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col className="product-detail-img">
            <img src={product.img} />
          </Col>
          <Col>
            <div className="product-info">{product.title}</div>
            <div className="product-info">₩ {product.price}</div>
            <div className="choice">
              {product.choice ? "Conscious choice" : ""}
            </div>
            {/* <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item,index) => (
                    <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown> */}
            <Button variant="dark" className="add-button">
              추가
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;