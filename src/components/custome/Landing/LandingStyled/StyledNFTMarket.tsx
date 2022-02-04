import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NftImgContainer = styled.div`
  width: 100%;
  padding-top: 50%;
  display: flex;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
  position: relative;
`;

export const SkyfallImg = styled.object`
  width: 28%;
  position: absolute;
  top: 8%;
`;

export const BaalimonImg = styled.object`
  width: 30.5%;
  left: 13%;
  top: 4%;
  position: absolute;
`;

export const KitsuneImg = styled.object`
  width: 33%;
  left: 27%;
  top: 1%;
  position: absolute;
`;

export const PharaohaImg = styled.object`
  width: 35.5%;
  left: 42%;
  top: -3%;
  position: absolute;
`;

export const NuclismoImg = styled.object`
  width: 39.5%;
  left: 58%;
  top: -8%;
  position: absolute;
`;

export const NftTextContainer = styled.object`
  width: 215px;
  margin: 20px 0;
  margin-left: 15%;
  word-break: break-word;
  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 40px auto;
    text-align: center;
  }
`;

export const NftContentText1 = styled.div`
  font-family: "Montserrat Bold",sans-serif!important;
  font-size: 25px;
  word-break: break-word;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const NftContentText2 = styled.div`
  font-family: "Montserrat",sans-serif!important;
  font-size: 1rem;
  margin-top: 15px;
  word-break: break-word;
  @media screen and (max-width: 768px) {
    display: inline;
    text-align: center;
  }
`;

export const NftContentText3 = styled.div`
  font-family: Arial;
  font-size: 1rem;
  line-height: 13px;
  word-break: break-word;
  @media screen and (max-width: 768px) {
    text-align: center;
    display: inline;
`;

export const NftContentText4 = styled.div`
  font-family: Arial;
  font-size: 1rem;
  margin-top: 22px;
  line-height: 13px;
  word-break: break-word;
  @media screen and (max-width: 768px) {
    text-align: center;
    display: inline;
  }
`;

export const BtnDiv = styled.div`
  text-align: center;
`;

export const NftContentBtn = styled.button`
  border: none;
  outline: none;
  margin-top: 22px;
  font-weight: bold;
  border-radius: 5px;
  width: 147px;
  height: 31px;
  font-family: Arial;
  font-size: 11.33px;
  color: white;
  cursor: pointer;
  background-color: #e30061;
`;
