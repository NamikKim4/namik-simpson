import React from 'react'
import ProductsDetail from './Page/ProductsDetail';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({authenticate}) => {
  return authenticate == true?<ProductsDetail/>:<Navigate to="/login"/>;

}

export default PrivateRoute
