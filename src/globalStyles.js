import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  a{
    color: ${({ theme }) => theme.aColor};
  }
  a:hover{
    color: ${({ theme }) => theme.aColorHover};
  }
  .AHover { 
    color: #000000 !important;
  }
  .AHover:hover {
    color: #3d3d3d !important;
  }
  .shortaboutme{
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
`