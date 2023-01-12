import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { __getPosts } from "../redux/modules/postsSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const DetailPage = () => {
  // const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const params = useParams();
  const dispatch = useDispatch();
  const postget = posts.find((post) => post.id === parseInt(params.id));

  // console.log(params.id);
  // useEffect(() => {
  //   dispatch(getTodoByID(Number(id)));
  // }, [dispatch, id]);
  // console.log(todo);
  useEffect(() => {
    dispatch(__getPosts(posts));
  }, []);
  return <div className="wholePage">hello</div>;
  // <StContainer>
  //   <div>
  //     <StContentBox>
  //       Name{postget.id}.<StTitle> {postget.title}</StTitle>
  //       <StContent>{postget.content}</StContent>
  //       <hr />
  //       <Link to="/">
  //         <button className="closeDetail">닫기</button>
  //       </Link>
  //     </StContentBox>
  //   </div>
  // </StContainer>
  // );
};
export default DetailPage;

const StContainer = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  justify-content: center;

  height: 600px;
  width: 70%;
  padding: 30px;
  margin: auto;
`;
const StTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-top: 20px;
`;
const StContent = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;
const StContentBox = styled.div`
  width: 400px;
  margin: auto;
  padding: 50px;
`;
const Stjinhaeng = styled.div`
  font-weight: bold;
  /* background-color: bisque; */
  height: 30px;
  align-items: center;
  font-size: 13px;
  justify-content: center;
  display: flex;
  color: gray;
`;
