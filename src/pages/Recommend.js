import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Recommend() {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onAddPost = () => {
    const post = {
      name: name,
      title: title,
      content: content,
    };
    if (title.trim() === "" || content.trim() === "" || name.trim() === "")
      return false;
    setName("");
    setTitle("");
    setContent("");
    //   dispatch(addTodo(todo));
  };

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
      <div className="posting">
        <h2> 현명한 당신의 추천메뉴는? </h2>
        <div className="writingCard">
          <h3> 작성자</h3>
          <Form.Control
            size="lg"
            type="text"
            placeholder="작성자의 이름을 입력해주세요."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <h3>추천 메뉴 이름</h3>
          <Form.Control
            size="lg"
            type="text"
            placeholder="당신의 추천 메뉴는?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <h3>해당 메뉴를 추천하는 타당한 이유를 적어주세요 !!! </h3>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="얼마나 맛있길래?"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </Form.Group>
          <button onClick={onAddPost}>등록하기</button>
        </div>
      </div>
    </div>
  );
}
export default Recommend;
