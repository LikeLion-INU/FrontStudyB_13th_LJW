import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./ui/TextInput";
import Button from "./ui/Button";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 16px;
    background-color: white;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #343a40;
    margin: 0 0 8px 0;
`;

const SubmitButton = styled.div`
    align-self: flex-end;
`;

// CommentWrite 컴포넌트: 댓글 작성 기능을 담당합니다.
function CommentWrite(props) {
    const { onSubmit } = props;
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        if (comment.trim() === "") {
            alert("댓글 내용을 입력해주세요.");
            return;
        }

        onSubmit(comment);
        
        // 입력 필드 초기화
        setComment("");
    };

    return (
        <Wrapper>
            <CommentLabel>새 댓글 작성</CommentLabel>
            <TextInput
                height={80}
                value={comment}
                onChange={(event) => {
                    setComment(event.target.value);
                }}
                placeholder="댓글을 입력해주세요"
            />
            <SubmitButton>
                <Button
                    title="댓글 작성하기"
                    onClick={handleSubmit}
                />
            </SubmitButton>
        </Wrapper>
    );
}

export default CommentWrite; 