import styled from "styled-components";
import ForestImage from "../../../../assets/Forest.png";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: url(${ForestImage}) no-repeat center;
  background-size: cover;
  padding: 33px 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-bottom: 0px;
  }
`;

export const BoyImgCotainer = styled.div`
  position: relative;
  padding-top: 50%;
`;

export const BoyImg = styled.object`
  left: 5%;
  top: -37%;
  width: 85%;
  position: absolute;
  @media screen and (max-width: 768px) {
    min-width: 85%;
    left: -3%;
  }
`;

export const RawImg = styled.object`
  top: 9%;
  left: 82%;
  width: 15%;
  min-width: 60px;
  position: absolute;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    left: 72%;
  }
`;

export const CookImg = styled.object`
  top: 50%;
  left: 90%;
  width: 15%;
  min-width: 60px;
  position: absolute;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    left: 81%;
  }
`;

export const MobaContainer = styled.div`
  z-index: 2;
  padding: 20px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 230px;
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 10px;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    width: 60%;
    margin: 20% auto 10% auto;
  }
`;

export const MobaContent = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const MobaContent1 = styled.div`
  font-size: 26px;
  font-family: "Montserrat Bold",sans-serif!important;
`;

export const MobaContent2 = styled.div`
  font-family: Arial;
  font-size: 1rem;
  font-family: "Montserrat",sans-serif!important;
  font-size: 15px;
`;

export const MobaContent3 = styled.div`
  font-family: Arial;
  font-family: "Montserrat",sans-serif!important;
  font-size: 15px;
`;

export const MobaBtn = styled.button`
  border: none;
  outline: none;
  margin-top: 22px;
  font-weight: bold;
  border-radius: 5px;
  width: 147px;
  height: 31px;
  font-family: "Montserrat ExtraBold", sans-serif;
  font-size: 11.33px;
  color: white;
  cursor: pointer;
  background-color: #136a9f;
  margin-top: 23px;
`;
