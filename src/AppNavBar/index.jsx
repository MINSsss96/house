import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './AppNavBar.css'
// Route : 페이지(컴포넌트) 이동 처리
// Routes : Route를 감싸는 용도
// Link : 실제로 페이지를 보여주는 역할, Link위치에 컴포넌트 뿌려줌
// userNavigate : 스크립트 영역에서 링크처리를 하는 훅
import { Link, useNavigate } from "react-router-dom";

function AppNavBar() {

  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand onClick={() => { navigate('/') }}>House</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/main') }}>Main</Nav.Link>
              <Nav.Link onClick={() => { navigate('/login') }}>로그인</Nav.Link>
              <Nav.Link onClick={() => { navigate('/logout') }}>회원가입</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default AppNavBar;