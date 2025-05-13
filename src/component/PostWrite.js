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
    padding: 20px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const TitleLabel = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #343a40;
    margin: 0 0 8px 0;
`;

const ContentLabel = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #343a40;
    margin: 16px 0 8px 0;
`;

const SubmitButton = styled.div`
    align-self: flex-end;
    margin-top: 16px;
`;

// PostWrite 컴포넌트: 글 작성 기능을 담당합니다.
function PostWrite(props) {
    const { onSubmit } = props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        if (title.trim() === "" || content.trim() === "") {
            alert("제목과 내용을 모두 입력해주세요.");
            return;
        }

        onSubmit({ title, content });
        
        // 입력 필드 초기화
        setTitle("");
        setContent("");
    };

    return (
        <Wrapper>
            <TitleLabel>제목</TitleLabel>
            <TextInput
                height={40}
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
                placeholder="제목을 입력해주세요"
            />
            <ContentLabel>내용</ContentLabel>
            <TextInput
                height={480}
                value={content}
                onChange={(event) => {
                    setContent(event.target.value);
                }}
                placeholder="내용을 입력해주세요"
            />
            <SubmitButton>
                <Button
                    title="글 작성하기"
                    onClick={handleSubmit}
                />
            </SubmitButton>
        </Wrapper>
    );
}

export default PostWrite; 