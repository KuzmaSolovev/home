import styled from "styled-components";

export const Container = styled.div`
  background-color: #1b2026;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6% 30px 50px 30px;
`;

export const StrategicText = styled.div`
  font-family: "Montserrat ExtraBold", sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: white;
  @media screen and (max-width: 325px) {
    font-size: 25px;
  }
`;

export const ImgCotainer = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .img_border {
    max-width: calc(90% - 90px);
    margin: 30px 40px;
    height: auto;
  }
`;

export const StrategicImgGroup = styled.div`
  width: 200px;
  min-width: 250px;
  @media screen and (max-width: 320px) {
    min-width: 100%;
  }
`;

export const Img = styled.img``;
