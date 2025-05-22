import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductAll from "./Page/ProductAll";
import Login from "./Page/Login";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  let [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />

        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        {/* setAuthenticate 함수를 props로 보내서 authenticate의 값을 받아와서 여기 App에서 세팅함*/}
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
        {/* 로그인이된 상태면  PrivateRoute에서 ProductDetail로 가게해주고 안했으면, 로그인페이지로 다시 이동시킨다. */}
      </Routes>
    </div>
  );
}

export default App; 