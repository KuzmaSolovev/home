import styled from "styled-components";
import img from "../../../assets/MaskGroup1.png";
import img1 from "../../../assets/MaskGroup2.png";

type Props = {
  role: number;
};

export const Warraper = styled.div`
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  border-radius: 18px;
  background-image: ${(props: Props) => {
    if (props.role) {
      return `url(${img1})`;
    }
    return `url(${img})`;
  }};
  background-size: cover;
  background-position: center center;
  @media screen and (max-width: 400px) {
    padding: 0px 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", " Roboto ", "
    Oxygen ",    " Ubuntu ", " Cantarell ", " Fira Sans ", " Droid Sans ", "
    Helvetica Neue ",    sans-serif";
`;

export const KMC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const Img = styled.img`
  width: 69px;
  height: 69px;
  margin-bottom: 10px;
  @media screen and (max-width: 400px) {
    width: 55px;
    height: 55px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
  @media screen and (max-width: 400px) {
    font-size: 16px;
  } 
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  background: ${(props: Props) => {
    if (props.role) {
      return "#53D0B5";
    }
    return "#7D66DA";
  }};
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
  color: white;
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 400px) {
    width: 120px;
    font-size: 16px;
  }
`;
