import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10%;
  display: flex;
  .container {
    display: grid;
    grid-template-rows: repeat(3 1fr);
    height: 50vh;
    margin: 0 auto;
    font-size: 100%;
  }
`;
