import styled from "styled-components";
import space from "../../../../assets/space.png";

export const Container = styled.div`
  max-width: 900px;
  width: 80%;
  padding: 15px 0;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    transition: 0.2s linear;
  }
`;

export const Welcome = styled.div`
  padding: 20px 0;
  margin-top: -5px;
  background: url(${space}) no-repeat center;
  background-size: 100% 100%;
  @media screen and (max-width: 768px) {
    background: #1b2026;
    padding-bottom: 0px;
  }
`;

export const WelcomeTextGroup = styled.div`
  margin-left: 70px;
  @media screen and (max-width: 768px) {
    width: 75%;
    margin: auto;
    text-align: center;
  }
`;

export const WelcomeContentHead = styled.div`
  width: 100%;
  max-width: 180px;
  word-break: break-all;
  font-family: 'Montserrat Bold',sans-serif!important;
  font-size: 25px;
  word-break: break-word;
  font-weight: bold;
  color: white;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
  }
  @media screen and (max-width: 375px) {
    font-size: 23px;
  }
  @media screen and (max-width: 320px) {
    font-size: 22px;
  }
`;

export const WelcomeContentText1 = styled.div`
  margin-top: 20px;
  word-break: break-all;
  width: 100%;
  max-width: 222px;
  word-break: break-word;
  font-family: "Montserrat",sans-serif!important;
  font-size: 15px;
  color: rgb(255, 255, 255);
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 20px auto;
  }
`;

export const WelcomeContentText2 = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 222px;
  word-break: break-all;
  font-family: "Montserrat",sans-serif!important;
  font-size: 15px;
  word-break: break-word;
  color: rgb(255, 255, 255);
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0px auto;
  }
`;

export const ImgDiv = styled.div`
  width: 100%;
  padding-top: 50%;
  position: relative;
`;

export const BlurImg = styled.img`
  position: absolute;
  top: -15%;
  width: 100%;
`;

export const WelcomeImg = styled.object`
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
`;
