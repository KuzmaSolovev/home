import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 375px) {
    height: 100px;
  }
  .polygon {
    @media screen and (max-width: 1024px) {
      width: 80%;
    }
  }
  .question {
    position: absolute;
    color: white;
    font-size: 30px;
  }
`;

export const Pattern = styled.img``;
