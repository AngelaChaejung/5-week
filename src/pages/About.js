import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

function About() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="wholePage">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">식사메뉴 추천 사이트</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => {
                navigate("/");
              }}
            >
              🏠홈으로....🏠
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <hr />
      <div>
        {`현재페이지: ${location.pathname.slice(1)}`},,,,,, <hr />
      </div>
      <h3> 먹잘알들의 추천메뉴 리스트 </h3>
    </div>
  );
}
export default About;
