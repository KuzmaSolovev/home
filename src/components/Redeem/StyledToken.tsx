import styled from "styled-components";
import img from "../../assets/background.png";

export const Warraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 65%;
  background-color: #e5e5e5;
  border-radius: 16px;
  margin-top: -60px;
  padding-top: 20px;
  padding-bottom: 30px;
  background: #000000d9;
  color: white;
`;

export const AvatarContainer = styled.div``;

export const Avatar = styled.img`
  width: 240px;
  @media screen and (max-width: 650px) {
    width: 240px;
  }
`;

// export const TokenID = styled.div`
//   margin-top: 10px;
//   font-family: "-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",    sans-serif";
//   font-size: 16px;
//   font-weight: bold;
//   @media screen and (max-width: 650px) {
//     font-size: 80%;
//   }
// `;

export const Content = styled.div`
  margin-top: 15px;
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", " Roboto ", "
    Oxygen ",    " Ubuntu ", " Cantarell ", " Fira Sans ", " Droid Sans ", "
    Helvetica Neue ",    sans-serif";
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 650px) {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const Withdraw = styled.div`
  margin-top: 5px;
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", " Roboto ", "
    Oxygen ",    " Ubuntu ", " Cantarell ", " Fira Sans ", " Droid Sans ", "
    Helvetica Neue ",    sans-serif";
  font-size: 16px;
  font-weight: 700;
  color: #535868;
  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 70px;
  border-radius: 16px;
  margin-top: 30px;
  @media screen and (max-width: 650px) {
    width: 180px;
    height: 50px;
    border-radius: 14px;
  }

  background: rgb(12 12 12);
  border: 1px solid #0f0e16;
`;

export const Amount = styled.div`
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", " Roboto ", "
    Oxygen ",    " Ubuntu ", " Cantarell ", " Fira Sans ", " Droid Sans ", "
    Helvetica Neue ",    sans-serif";
  font-size: 18px;
  font-weight: 700;
  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

export const Vector = styled.img`
  margin-left: 17px;
  width: 23px;
  height: 23px;
  @media screen and (max-width: 650px) {
    width: 20px;
    height: 20px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 355px;
  margin-top: 40px;
  @media screen and (max-width: 650px) {
    margin: 40px 20px 0px;
    width: 320px;
  }
`;

export const WithdrawBtn = styled.button`
  width: 170px;
  height: 43px;
  border-style: none;
  background: #53d0b5;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", " Roboto ", "
    Oxygen ",    " Ubuntu ", " Cantarell ", " Fira Sans ", " Droid Sans ", "
    Helvetica Neue ",    sans-serif";
  font-weight: 500;
  font-size: 18px;
  :hover {
    color: black;
  }
  @media screen and (max-width: 650px) {
    width: 150px;
    height: 40px;
  }
`;

export const WithdrawDiv = styled.div`
  width: 170px;
  height: 43px;
  border-style: none;
  background: #53d0b5;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", " Roboto ", "
    Oxygen ",    " Ubuntu ", " Cantarell ", " Fira Sans ", " Droid Sans ", "
    Helvetica Neue ",    sans-serif";
  font-weight: 500;
  font-size: 18px;
  :hover {
    color: black;
  }
  @media screen and (max-width: 650px) {
    width: 150px;
    height: 40px;
  }
`;

export const StakeBtn = styled.button`
  width: 170px;
  height: 43px;
  background: #7d66da;
  border-style: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", " Roboto ", "
    Oxygen ",    " Ubuntu ", " Cantarell ", " Fira Sans ", " Droid Sans ", "
    Helvetica Neue ",    sans-serif";
  font-weight: 500;
  font-size: 18px;
  :hover {
    color: black;
  }
  @media screen and (max-width: 650px) {
    width: 150px;
    height: 40px;
  }
`;
