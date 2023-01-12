import React, { useEffect, useState } from "react";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; // axios import 합니다
import styled from "styled-components";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const location = useLocation();
  const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="wholePage">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">식사메뉴 추천 사이트</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              🏠홈으로....🏠
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="StTitlepart">오늘 뭐먹지...?</div>

      <hr />
      <div>
        {`현재페이지: ${location.pathname.slice(1)}`},,,,,, <hr />
      </div>
      <div className="recommend">
        채정이의 오늘 점심 메뉴 추천해주러 가기 ......
        <h1
          onClick={() => {
            navigate("/recommend");
          }}
        >
          GO! 🍜 🍖 🍚 🍣 🍔
        </h1>
      </div>
      <div className="recommend">
        사람들의 추천 보러 가기 ......
        <h1
          onClick={() => {
            navigate("/about");
          }}
        >
          GO! 🐹 🐹 🐹
        </h1>
      </div>
    </div>
  );
}

export default Home;
