import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import BeachImg from "../../../../assets/Beach.png";

export const Containter = styled.div`
  background: url(${BeachImg}) no-repeat center;
  background-size: cover;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

export const JoinContainer = styled.div`
  width: 322px;
  height: 137px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  text-align: center;
`;

export const JoinText1 = styled.div`
  margin-top: 15px;
  font-family: "Montserrat ExtraBold", sans-serif;
  font-size: 22.65px;
  color: white;
`;

export const JoinText2 = styled.div`
  width: 250px;
  font-family: "Montserrat Bold", sans-serif;
  font-size: 10.57px;
  color: white;
  margin: auto;
`;

// export const JoinBtn = styled.button`
//   font-size: 11.33px;
//   font-weight: 900;
//   font-family: Arial;
//   width: 145px;
//   height: 30px;
//   background-color: #662d91;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   outline: none;
//   margin-top: 13px;
//   cursor: pointer;
// `;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11.33px;  
  font-family: "Montserrat ExtraBold", sans-serif;
  width: 145px;
  height: 30px;
  text-decoration: none;
  background-color: #662d91;
  color: white;
  border-radius: 5px;
  margin-left: 27%;
  margin-top: 13px;
  cursor: pointer;
`;
