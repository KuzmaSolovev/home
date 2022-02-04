import styled from "styled-components";

export const Shapes = styled.div`
  width: 90%;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
  padding-top: 50px;
  .lastrow {
    margin-top: 30px;
    @media screen and (max-width: 500px) {
      margin-top: 0;
    }
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
