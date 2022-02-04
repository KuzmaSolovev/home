import styled from "styled-components";
import img from "../../../assets/Mask.png";
import img1 from "../../../assets/Mask1.png";

type Props = {
  role: number;
};

export const Warraper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  border-radius: 15px;
  background-image: ${(props: Props) => {
    if (props.role) {
      return `url(${img1})`;
    }
    return `url(${img})`;
  }};
  background-size: cover;
  background-position: center center;
  color: ${(props: Props) => {
    if (props.role) {
      return "white";
    }
  }};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  
  text-align: center;
  img {
    width: 174px;
    height: 174px;
    @media screen and (max-width: 400px) {
      width: 150px;
      height: 150px;
    }
  }
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", " Roboto ", "
    Oxygen ",    " Ubuntu ", " Cantarell ", " Fira Sans ", " Droid Sans ", "
    Helvetica Neue ",    sans-serif";
  font-weight: 700;
`;

export const Title = styled.div`
  font-size: 32px;
  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`;

export const KMC = styled.div`
  font-size: 20px;
  color: ${(props: Props) => {
    if (props.role) {
      return "#FBDC03";
    }
    return "#53d0b5";
  }};
  & > *:not(:first-child) {
    margin-left: 10px;
  }
  @media screen and (max-width: 400px) {
    font-size: 17px;
  }
`;

export const Amount = styled.span`
  font-size: 32px;
  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`;

export const APR = styled.div`
  font-size: 26px;
  @media screen and (max-width: 400px) {
    font-size: 23px;
  }
`;
