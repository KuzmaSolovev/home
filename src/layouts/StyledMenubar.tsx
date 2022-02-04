import styled from "styled-components";

export const Menu = styled.div`
  width: 100%;
  height: 35px;
  background-color: rgb(20, 24, 29);
  position: fixed;
  z-index: 3;
`;

export const MenuBtn = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    position: absolute;
    top: 5px;
    left: 10px;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const ConnectWalletBtn = styled.button`
  width: 150px;
  height: 35px;
  font-family: "Montserrat", sans-serif;
  background-color: rgb(237, 29, 91);
  font-size: 13.3px;
  color: rgb(255, 255, 255);
  outline: none;
  border: none;
  float: right;
  cursor: pointer;
  transition: 0.2s linear;
  @media screen and (max-width: 750px) {
    width: 100px;
    font-size: 11px;
  }
  & > a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;
