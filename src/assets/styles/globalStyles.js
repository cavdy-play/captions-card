import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fafafa;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  /* REACTSCROLL STYLES */
  .ps .ps__rail-x:hover,
  .ps .ps__rail-y:hover,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-y:focus,
  .ps .ps__rail-x.ps--clicking,
  .ps .ps__rail-y.ps--clicking {
    background-color: transparent !important;
  }

  /*
  * Scrollbar thumb styles
  */
  .ps__thumb-x {
    background-color: transparent !important;
  }

  .ps__thumb-y {
    background-color: transparent !important;
  }

  .ps__rail-x:hover > .ps__thumb-x,
  .ps__rail-x:focus > .ps__thumb-x,
  .ps__rail-x.ps--clicking .ps__thumb-x {
    background-color: transparent !important;
  }

  .ps__rail-y:hover > .ps__thumb-y,
  .ps__rail-y:focus > .ps__thumb-y,
  .ps__rail-y.ps--clicking .ps__thumb-y {
    background-color: transparent !important;
  }
`;
