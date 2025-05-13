import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../component/list/PostList";
import Button from "../component/ui/Button";
import data from "../data.json";
import { PageWrapper, Container, HeaderContainer, TitleHeading, ListContainer } from "../styles/CommonStyles";

function MainPage(props) {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    
    // 컴포넌트가 마운트될 때 게시물 목록 불러오기
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("blog-posts"));
        if (savedPosts) {
            setPosts(savedPosts);
        } else {
            setPosts(data.posts);
        }
    }, []);

    return (
        <PageWrapper>
            <Container>
                <HeaderContainer>
                    <TitleHeading>게시글 목록</TitleHeading>
                    <Button
                        title="글 작성하기"
                        onClick={() => {
                            navigate("/post-write");
                        }}
                    />
                </HeaderContainer>

                <ListContainer>
                    <PostList
                        posts={posts}
                        onClickItem={(item) => {
                            navigate(`/post/${item.id}`);
                        }}
                    />
                </ListContainer>
            </Container>
        </PageWrapper>
    );
}

export default MainPage;