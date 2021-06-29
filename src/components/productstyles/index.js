import styled from 'styled-components';

export const GridContainer = styled.div`
  height: 100vh;
  display: grid;
  /* grid-template-columns: 150px 1fr;
  grid-template-rows: 1fr 1fr; */
  grid-template-areas:
    'left right'
    'left right'
    'bottom right';

  /* gap: 1em; */

  .left,
  .right {
    border: 1px solid #161616;
  }

  .left {
    background: red;
  }
`;
