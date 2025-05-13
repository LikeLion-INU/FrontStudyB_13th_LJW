import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    margin-bottom: 8px;
`;

const ContentText = styled.p`
    font-size: 16px;
    white-space: pre-wrap;
    margin: 0;
    color: #495057;
`;

const CommentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 8px;
`;

const AuthorText = styled.p`
    font-size: 13px;
    color: #868e96;
    margin: 0;
`;

const DateText = styled.p`
    font-size: 13px;
    color: #adb5bd;
    margin: 0;
`;

//CommentListItem 컴포넌트는 프롭스로 커멘트 객체 하나만 사용한다.
//comment 객체는 사용자가 작성한 댓글 내용이 들어있다.
//이를 스타일드 컴포넌트를 통해 만든 contentText라는 컴포넌트를 이용해서 화면에 표시한다.
//글은 클릭이 가능했지만, 댓글은 별도의 클릭기능이 없기 때문에 온클릭이벤트를 따로 처리해주지 않았습니다
function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
      <CommentInfo>
        <AuthorText>{comment.author || "익명"}</AuthorText>
        <DateText>{comment.date || "날짜 없음"}</DateText>
      </CommentInfo>
    </Wrapper>
  );
}

export default CommentListItem;