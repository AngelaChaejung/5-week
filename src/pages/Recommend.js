import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { __addPost } from "../redux/modules/postsSlice";
import { useDispatch } from "react-redux";

function Recommend() {
  const [post, setPost] = useState({
    title: "",
    name: "",
    content: "",
  });
  // const fetchPosts = async () => {
  //   await axios.post("http://localhost:3001/posts");
  //   // setPost(data);
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  // console.log(post);
  return (
    <div className="wholePage">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>식사메뉴 추천 사이트</Navbar.Brand>
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

      <hr />
      <div>
        {`현재페이지: ${location.pathname.slice(1)}`} <hr />
      </div>
      <div className="posting">
        <h2> 현명한 당신의 추천메뉴는? </h2>
        <form
          onSubmit={(event) => {
            dispatch(__addPost(post));
          }}
        >
          <div className="writingCard">
            <h3> 작성자</h3>
            <Form.Control
              size="lg"
              name="name"
              type="text"
              placeholder="작성자의 이름을 입력해주세요."
              onChange={(ev) => {
                const { value } = ev.target;
                setPost({
                  ...post,
                  name: value,
                });
              }}
            />
            <br />
            <h3>추천 메뉴 이름</h3>
            <Form.Control
              size="lg"
              type="text"
              placeholder="당신의 추천 메뉴는?"
              onChange={(a) => {
                const { value } = a.target;
                setPost({ ...post, title: value });
              }}
              // value={title}
            />
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <h3>해당 메뉴를 추천하는 타당한 이유를 적어주세요 !!! </h3>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="얼마나 맛있길래?"
                onChange={(c) => {
                  const { value } = c.target;
                  setPost({
                    ...post,
                    content: value,
                  });
                }}
              />
            </Form.Group>
            <button>등록하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Recommend;

// name, title, content
// 객체 안에 넣어서.

// useref
// useForm
// 리액트 훅폼
