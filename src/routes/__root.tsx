import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: black;
  }
`;

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <GlobalStyle />
      <Outlet />
    </>
  ),
});
