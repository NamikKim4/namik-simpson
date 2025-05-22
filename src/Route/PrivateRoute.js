import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../Page/ProductDetail";
import { useLocation } from "react-router";

//✅로그인 했을때, ProductDetail를 보여주고, 로그인 안했을땐, 로그인페이지로 이동시켜주는 안내자 역할 컴포넌트

const PrivateRoute = ({ authenticate }) => {
  const location = useLocation();
  console.log("lll", location);
  //replace state : 로그인을 완료하고 다시 이전 페이지로 돌아갈 수 있도록 이전 페이지의 정보를 보존하기 위함입니다.
  return authenticate ? (<ProductDetail />) : (<Navigate to="/login" replace state={{ to: location }} />);
};

export default PrivateRoute;