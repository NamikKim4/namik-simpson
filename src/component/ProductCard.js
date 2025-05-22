import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => { //setProducts(data)로 받아온 데이터를 products에 세팅하여 item으로 하나씩 꺼냈다
  const navigate = useNavigate();
  const showProduct = (id) => { //받아온데이터에의 id를 따로꺼내서 사용하였다.
    navigate(`/product/${id}`);
  };
  return (
    <div className="card" onClick={() => showProduct(item.id)}>
      <img src={item?.img} />
      <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="new-product">{item?.new ? "New" : ""}</div>
    </div>
  );
};

export default ProductCard;