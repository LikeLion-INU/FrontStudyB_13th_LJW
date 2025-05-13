import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) =>
    props.height &&
    `
      height: ${props.height}px;
    `}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  resize: none;
  transition: border-color 0.2s ease-in-out;
  font-family: 'Noto Sans KR', sans-serif;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(77, 171, 247, 0.25);
  }
  
  &::placeholder {
    color: ${colors.textLighter};
  }
`;

//텍스트인풋이라는 함수 컴포넌트를 만든다.
//텍스트인풋의 프롭스로는 높이 설정을 위한 height, 입력된 값을 표시하기 위한 value, 변경된 값을 상위 컴포넌트로 전달하기 위한 onChange가 있다.
//텍스트에어리어에 스타일을 입힌 스타일드텍스트에어리어를 만듬
function TextInput(props) {
  const { height, value, onChange, placeholder } = props;

  return <StyledTextarea 
    height={height} 
    value={value} 
    onChange={onChange} 
    placeholder={placeholder}
  />;
}

export default TextInput;