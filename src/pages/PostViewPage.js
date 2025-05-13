import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../component/list/CommentList";
import Button from "../component/ui/Button";
import data from "../data.json";
import CommentWrite from "../component/CommentWrite";

const Wrapper = styled.div`
    padding: 24px;
    width: calc(100% - 48px);
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

const PostContainer = styled.div`
    padding: 24px;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const TitleText = styled.h1`
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 16px;
    color: #1a1a1a;
`;

const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f1f3f5;
`;

const AuthorText = styled.p`
    font-size: 14px;
    color: #495057;
    margin: 0;
`;

const DateText = styled.p`
    font-size: 14px;
    color: #868e96;
    margin: 0;
`;

const ContentText = styled.p`
    font-size: 18px;
    line-height: 1.7;
    white-space: pre-wrap;
    color: #212529;
`;

const CommentLabel = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin: 24px 0 16px 0;
    color: #343a40;
`;

const BackButtonContainer = styled.div`
    margin-bottom: 24px;
`;

//postViewPage 컴포넌트에서는 먼저 프롭스로 전달받은 글의 ID를 이용해서 전체 데이터에서 해당되는 글을 찾습니다. 그리고 찾은 글의 제목,내용,댓글을 랜더링하게 되고 그 아래에는 TextInput 컴포넌트와 Button 컴포넌트를 이용해 댓글을 작성할 수 있도록 ui를 제공했습니다.
function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();
    
    // 로컬 스토리지에서 게시물 목록 가져오기 (없으면 data.json 사용)
    const posts = JSON.parse(localStorage.getItem("blog-posts")) || data.posts;
    
    // 현재 게시물 찾기
    const post = posts.find((item) => {
        return item.id === parseInt(postId);
    });

    const handleCommentSubmit = (commentText) => {
        // 현재 게시물 목록 가져오기
        const currentPosts = JSON.parse(localStorage.getItem("blog-posts")) || data.posts;
        
        // 현재 게시물 찾기
        const updatedPosts = currentPosts.map(item => {
            if (item.id === parseInt(postId)) {
                // 새 댓글 객체 생성
                const newComment = {
                    id: item.comments.length > 0 ? 
                        Math.max(...item.comments.map(c => c.id)) + 1 : 1,
                    content: commentText,
                    author: "사용자",
                    date: new Date().toISOString().slice(0, 10)
                };
                
                // 댓글 추가
                return {
                    ...item,
                    comments: [...item.comments, newComment]
                };
            }
            return item;
        });
        
        // 로컬 스토리지에 저장
        localStorage.setItem("blog-posts", JSON.stringify(updatedPosts));
        
        // 페이지 새로고침 (댓글 표시 갱신)
        window.location.reload();
    };
    
    // post가 없는 경우 처리
    if (!post) {
        return (
            <Wrapper>
                <Container>
                    <BackButtonContainer>
                        <Button
                            title="뒤로 가기"
                            onClick={() => {
                                navigate("/");
                            }}
                        />
                    </BackButtonContainer>
                    <PostContainer>
                        <TitleText>게시글을 찾을 수 없습니다.</TitleText>
                    </PostContainer>
                </Container>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Container>
                <BackButtonContainer>
                    <Button
                        title="뒤로 가기"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </BackButtonContainer>
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <PostInfo>
                        <AuthorText>작성자: {post.author || "익명"}</AuthorText>
                        <DateText>{post.date || "날짜 없음"}</DateText>
                    </PostInfo>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />
                <CommentWrite onSubmit={handleCommentSubmit} />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;