import styled from "styled-components";

export const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  background-color: rgb(20, 24, 29);
`;

export const CopyrightText = styled.div`
  color: rgb(255, 255, 255);
  font-size: 7.55px;
  margin-left: 55px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }  
  font-family: "Montserrat", sans-serif;
`;
