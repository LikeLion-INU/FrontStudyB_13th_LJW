import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostWrite from "../component/PostWrite";
import data from "../data.json";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const handlePostSubmit = (postData) => {
        // 현재 데이터 가져오기
        const posts = JSON.parse(localStorage.getItem("blog-posts")) || data.posts;
        
        // 새 글 객체 생성
        const newPost = {
            id: posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1,
            title: postData.title,
            content: postData.content,
            author: "사용자",
            date: new Date().toISOString().slice(0, 10),
            comments: []
        };
        
        // 새 글 추가
        const updatedPosts = [...posts, newPost];
        
        // 로컬 스토리지에 저장
        localStorage.setItem("blog-posts", JSON.stringify(updatedPosts));
        
        // 메인 페이지로 이동
        navigate("/");
    };

    return (
        <Wrapper>
            <Container>
                <PostWrite onSubmit={handlePostSubmit} />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;