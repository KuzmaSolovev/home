import styled from "styled-components";

export const Content = styled.div`
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: 500;
  font-size: 14px;
  color: #021437;
  text-align: center;
  margin-top: 30px;
  transition: 0.2s linear;
  @media screen and (max-width: 950px) {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Allocation = styled.div`
  margin-top: 30px;
  color: #53d0b5;
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
`;

export const Pricetime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 90%;
  border: 1px solid #eeeff1;
  border-radius: 8px;
  background: #f9fafb;
  padding: 15px 0;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Boxprice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 25px;
  border-right: 1px solid #7bb394;
  @media screen and (max-width: 925px) {
    padding: 0px 15px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px auto;
    width: 30%;
  }
  @media screen and (max-width: 500px) {
    border-style: none;
    width: 48%;
    border-bottom: 1px solid #7bb394;
    padding-bottom: 10px;
  }
`;

export const Detail = styled.div`
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: 600;
  font-size: 14px;
  color: #7b8394;
  text-align: center;
  @media screen and (max-width: 950px) {
    font-size: 12px;
  }
`;

export const Price = styled.div`
  margin-top: 10px;
  color: #021437;
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 950px) {
    font-size: 15px;
  }
`;

export const Ending = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 30px;
  @media screen and (max-width: 950px) {
    padding: 0px 15px;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
    padding: 0px auto;
  }
  @media screen and (max-width: 600px) {
    width: 50%;
    padding: 0px auto;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    align-items: center;
    margin-top: 10px;
    padding: 0;
  }
`;

export const Time = styled.div`
  margin-top: 5px;
  display: flex;
  & > :not(:first-child) {
    margin-left: 20px;
  }
`;

export const Timecontainer = styled.div``;

export const Value = styled.div`
  text-align: center;
  font-family: "Montserrat Bold", sans-serif !important;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #021437;
  @media screen and (max-width: 950px) {
    font-size: 15px;
  }
`;

export const Unit = styled.div`
  font-family: "Montserrat Bold", sans-serif !important;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #7b8394;
`;

export const Count = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 90%;
  padding: 20px 0px;
  background: #f9fafb;
  border: 1px solid #eeeff1;
  border-radius: 8px;
  @media screen and (max-width: 950px) {
    width: 85%;
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Total = styled.div`
  font-family: "Montserrat Bold", sans-serif !important;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  @media screen and (max-width: 950px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px auto;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
    margin-left: 20px;
  }
`;
