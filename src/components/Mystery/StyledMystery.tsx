import styled from "styled-components";
import gridImg from "../../assets/Grid.png";

type Props = {
  width: string;
  height: string;
  fsize: string;
  bgcolor: string;
};

export const Warraper = styled.div`
  margin-left: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #661863;
  position: relative;
  @media screen and (max-width: 700px) {
    margin: 0;
  }
`;

export const Container = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1050px;
  width: 87%;
  background: #ffffff;
  border-radius: 15px;
  padding: 100px 20px;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const MysteryContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgContainer = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  overflow: hidden;
  width: 100%;
  max-height: 400px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 220px;
  }
`;

export const DetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Head = styled.div`
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: bold;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  transition: 0.2s linear;
  @media screen and (max-width: 950px) {
    font-size: 28px;
  }
  @media screen and (max-width: 760px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 500px) {
    font-size: 23px;
  }
`;

export const Button = styled.button`
  width: ${(props: Props) => {
    return props.width;
  }};
  height: ${(props: Props) => {
    return props.height;
  }};
  margin-top: 75px;
  background: ${(props: Props) => {
    return props.bgcolor;
  }};
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  font-family: "Montserrat Bold", sans-serif !important;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props: Props) => {
    return props.fsize;
  }};
  border-style: none;
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
