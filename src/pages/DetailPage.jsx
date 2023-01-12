import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { __getPosts } from "../redux/modules/postsSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function DetailPage(props) {
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  console.log("dddd", posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // const nerArr= posts.filter(function(){
  //   return
  // })
  const postGet = posts.find((post) => post.id === parseInt(params.id));
  useEffect(() => {
    dispatch(__getPosts());
  }, []);
  const [modalindex, setModalIndex] = useState("");
  return (
    <>
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

      <div className="detailCard">
        <h4>
          추천메뉴:
          {postGet?.title}
          <hr />
        </h4>
        <p> {postGet?.name}</p>
        <p> 추천 이유 : {postGet?.content}</p>
        <Link to={`/edit/${postGet.id}`}>
          <StButton>수정하기</StButton>
        </Link>
        <StButton>삭제하기</StButton>
      </div>
    </>
  );
}

export default DetailPage;

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
