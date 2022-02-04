import styled from "styled-components";
import gridImg from "../../../assets/Grid.png";

export const Content = styled.div`
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: bold;
  font-size: 24px;
  color: #53d0b5;
  text-align: center;
  text-transform: uppercase;
  margin-top: 40px;
`;

export const Pattern = styled.div`
  position: absolute;
  max-width: 1050px;
  margin: auto;
  background-image: url(${gridImg});
  background-size: contain;
  height: 100vh;
  width: 90%;
`;
