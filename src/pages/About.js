import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function About() {
  const posts = useSelector((state) => state.posts.postsSlice);
  console.log(posts);
  const navigate = useNavigate();
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
      <div>
        {posts?.map((post) => (
          <div key={post.id}>
            <button> click </button>
            {/* todo의 아이디를 화면에 표시 */}
            {post.id} :{post.title} : {post.name} {post.content}
          </div>
        ))}
      </div>
      <button> click </button>
    </div>
  );
}
export default About;
