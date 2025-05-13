import { createGlobalStyle } from 'styled-components';

// 색상 팔레트
export const colors = {
  primary: '#4dabf7',
  primaryDark: '#339af0',
  primaryDarker: '#228be6',
  text: '#212529',
  textLight: '#495057',
  textLighter: '#868e96',
  background: '#f8f9fa',
  border: '#e9ecef',
  borderLight: '#f1f3f5',
  white: '#ffffff',
};

// 그림자 스타일
export const shadows = {
  small: '0 1px 3px rgba(0, 0, 0, 0.05)',
  medium: '0 2px 4px rgba(0, 0, 0, 0.1)',
  large: '0 2px 8px rgba(0, 0, 0, 0.08)',
  button: '0 4px 8px rgba(0, 0, 0, 0.15)',
};

// 반응형 크기
export const sizes = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

// 미디어 쿼리
export const media = {
  mobile: `@media (max-width: ${sizes.mobile})`,
  tablet: `@media (max-width: ${sizes.tablet})`,
  desktop: `@media (max-width: ${sizes.desktop})`,
};

// 글로벌 스타일
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${colors.background};
    color: ${colors.text};
    line-height: 1.5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${colors.text};
  }
  
  p {
    margin: 0;
  }
  
  a {
    color: ${colors.primary};
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles; 