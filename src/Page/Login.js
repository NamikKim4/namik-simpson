import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//✅로그인 페이지

const Login = ({ setAuthenticate }) => { //App에서 함수를 props로 받아옴
  
  const navigate = useNavigate();
  
  //로그인페이지에서 Login버튼을 눌렀을때 발생하는 함수
  const login = (event) => {
    event.preventDefault();       //onSubmit후에 매번 refresh하는걸 막아줌
    setAuthenticate(true);        //authenticate를 true로 바꿔줌
    navigate("/");                //submit과 동시에 메인화면으로 이동
  };


  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="warning" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;