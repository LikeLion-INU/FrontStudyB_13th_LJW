import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './pages/MainPage';
import PostWritePage from './pages/PostWritePage';
import PostViewPage from './pages/PostViewPage';
// Styles
import GlobalStyles, { colors, shadows } from './styles/GlobalStyles';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const MainTitleText = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 32px 0;
  background-color: ${colors.primary};
  color: ${colors.white};
  box-shadow: ${shadows.medium};
`;

function App(props) {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BrowserRouter>
          <MainTitleText>미니 블로그</MainTitleText>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="post-write" element={<PostWritePage />} />
            <Route path="post/:postId" element={<PostViewPage />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

export default App;