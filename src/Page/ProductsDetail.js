import React, { useEffect,useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductsDetail = () => {
  let {id} = useParams()
const [product,setProduct] = useState(null);

const getProductDetail=async()=>{
  let url = `http://localhost:5000/products/${id}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log("dataaaaaaaaaaaaaaa",data);
  setProduct(data);
}

  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <Container>
      <Row>
        <Col className='producst-img'> <img src={product?.img}/> </Col>
        <Col> <h1>{product?.title}</h1> <div>${product?.price}</div> <h3>{product?.new  == true?"NEW":""}</h3> </Col>
      </Row>
    </Container>
  )
}

export default ProductsDetail
