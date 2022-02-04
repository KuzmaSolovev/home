import styled from "styled-components";

export const Cointer = styled.div`
  background-color: #1b2026;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const KMCCointer = styled.div`
  width: 100%;
  max-width: 230px;
  margin-right: 70px;
  @media screen and (max-width: 768px) {
    margin: auto;
    max-width: 80%;
  }
`;

export const KMCText1 = styled.div`
  font-size: 26px;
  font-weight: 900;
  font-family: "Montserrat Bold",sans-serif!important;
  color: white;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const KMCText2 = styled.div`
  font-size: 1rem;
  font-weight: Black;
  font-family: "Montserrat",sans-serif!important;
  color: white;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const KMCBtn = styled.button`
  font-size: 11.33px;
  font-weight: Black;
  font-family: Arial;
  width: 145px;
  height: 30px;
  background-color: #e30061;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    margin: 20px auto 0;
  }
`;

export const KMCImgCointer = styled.div`
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    margin: auto;
    margin-top: 30px;
  }
`;

export const KMCImg = styled.object`
  width: 300px;
`;
