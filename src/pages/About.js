import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { __getPosts } from "../redux/modules/postsSlice";
import styled from "styled-components";
function About() {
  const [post] = useState({
    title: "",
    name: "",
    content: "",
  });
  const dispatch = useDispatch();
  const [modalindex, setModalIndex] = useState("");

  let [modal, setModal] = useState(false);

  const { posts, isLoading, error } = useSelector((state) => state.posts);
  // console.log("dddd", posts);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getPosts(post));
  }, []);
  // console.log(posts);
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
      <h3> 먹잘알들의 추천메뉴 리스트 </h3>
      <hr />
      {modal === true ? <Modal posts={posts} modalindex={modalindex} /> : null}

      <div>
        {posts &&
          posts.map((post) => (
            <StList
              key={post.id}
              onClick={() => {
                setModalIndex(post.id);
                setModal(!modal);
              }}
            >
              <h>{post.id + 1}번째 추천👉🏻👉🏻👉🏻 </h>
              <StMenutitle>{post.name}</StMenutitle>님의 추천 메뉴는 .....
              <StMenutitle>♥️{post.title}!!!!!♥️</StMenutitle>그 이유가
              궁금하시다면...클릭!
              {/* <Link to={`/detail/${post.id}`}>클릭!</Link> */}
              <hr />
              {/* <h>{post.content}</h> */}
            </StList>
          ))}
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="detailCard">
      <h4>
        추천메뉴:
        {props.posts[props.modalindex].title}
        <hr />
      </h4>
      <p> 작성자 : {props.posts[props.modalindex].name}</p>
      <p> 추천 이유 : {props.posts[props.modalindex].content}</p>
      <StButton>수정하기</StButton>
      <StButton>삭제하기</StButton>
    </div>
  );
}

export default About;

const StList = styled.div`
  height: auto;
  width: 900px;
  border-radius: 10px;
  padding: 15px;
  border: solid black 1px;
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto auto 15px auto;
`;
const StMenutitle = styled.div`
  font-weight: bold;
`;
const StButton = styled.button`
  width: 80px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  border-radius: 50px;
  border: 2px solid gray;
  color: gray;
  margin: 20px auto 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
