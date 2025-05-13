import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    cursor: pointer;
    background: white;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        border-color: #c5d7f0;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 8px;
    color: #343a40;
`;

const ContentText = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    color: #495057;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const DateText = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin: 8px 0 0 0;
    color: #868e96;
    align-self: flex-end;
`;

//타이틀 텍스트를 이용해서 프롭스로 받은 포스트객체에 들어있는 타이틀 문자열을 표시해줍니다.
function PostListItem(props) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
      <ContentText>{post.content}</ContentText>
      <DateText>{post.date}</DateText>
    </Wrapper>
  );
}

export default PostListItem;