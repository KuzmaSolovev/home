import styled from "styled-components";

export const Content = styled.div`
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: 500;
  font-size: 14px;
  color: #021437;
  text-align: center;
  margin-top: 40px;
  transition: 0.2s linear;
  @media screen and (max-width: 950px) {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Auction = styled.div`
  width: 90%;
`;

export const Detail = styled.div`
  margin-top: 50px;
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: 500;
  font-size: 18px;
  color: #7b8394;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
`;

export const Value = styled.div`
  margin-top: 10px;
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: 600;
  font-size: 18px;
  color: #021437;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
`;

export const Space = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Custominput = styled.div`
  margin-top: 15px;
  display: flex;
  padding: 0px 12px;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 48px;
  border: 2px solid #021437;
  border-radius: 8px;
  @media screen and (max-width: 500px) {
    width: 35%;
  }
`;

export const Input = styled.input`
  display: block;
  width: 30%;
  height: 40px;
  border-style: none;
  outline: none;
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: 600;
  font-size: 14px;
`;

export const Inputcontent = styled.div`
  font-family: "Montserrat Bold", sans-serif !important;
  font-weight: 600;
  font-size: 14px;
  color: #021437;
`;
