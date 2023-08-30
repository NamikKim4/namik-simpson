import React,{useEffect,useState} from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
  const [productList, setProdictList] = useState([]);
  const [query,setQuery] = useSearchParams(); //원하는 쿼리의 값을 읽어오는 훅

 const getProducts= async()=>{
  let searchQuery = query.get('q') || "";
  console.log("쿼리값은?",searchQuery);

  let url = `https://my-json-server.typicode.com/NamikKim4/namik-simpson/products?q=${searchQuery}`
  let response = await fetch(url);
  let data = await response.json();
  console.log("data",data);
  setProdictList(data);
 }

  useEffect(()=>{
    getProducts()
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu)=>(<Col lg={3}><ProductCard item={menu}/></Col>))}


        </Row>
      </Container>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
