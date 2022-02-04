import styled from "styled-components";
import img from "../../assets/background.png";

export const Warraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center center;
`;

export const Container = styled.div`
  min-width: 50%;
  margin: 10rem;
  margin-top: 5rem;
  background-color: #ffffff;
  border-radius: 16px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 100%;
    margin: 30px 0px;
    flex-direction: column;
  }
  padding: 30px 40px 40px;
  @media screen and (max-width: 425px) {
    padding: 30px 10px;
  }
  @media screen and (max-width: 580px) {
    margin: 0px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const KMC = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Left = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  gap: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 340px) {
    gap: 15px;
  }
`;
