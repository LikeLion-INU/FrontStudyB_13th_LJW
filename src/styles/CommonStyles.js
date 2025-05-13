import styled from "styled-components";
import { colors, shadows, media } from "./GlobalStyles";

// 페이지 래퍼 컴포넌트
export const PageWrapper = styled.div`
  padding: 24px;
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  ${media.mobile} {
    padding: 16px;
    width: calc(100% - 32px);
  }
`;

// 컨테이너 컴포넌트
export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// 카드 컨테이너 스타일
export const Card = styled.div`
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 12px;
  box-shadow: ${shadows.large};
  width: 100%;
  box-sizing: border-box;
`;

// 헤더 컨테이너 스타일
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  padding: 16px;
  border-radius: 12px;
  box-shadow: ${shadows.medium};
  margin-bottom: 24px !important;
`;

// 제목 텍스트 스타일
export const TitleHeading = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  color: ${colors.text};
`;

// 목록 컨테이너 스타일
export const ListContainer = styled.div`
  background-color: ${colors.background};
  padding: 8px;
  border-radius: 12px;
`;

// 라벨 스타일
export const Label = styled.p`
  font-size: ${props => props.size || '16px'};
  font-weight: 600;
  color: ${colors.text};
  margin: ${props => props.margin || '0 0 8px 0'};
`; 