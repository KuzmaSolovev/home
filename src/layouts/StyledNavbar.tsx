import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

type NavProps = {
  mobile: boolean;
};
// ${({mobile}) => }
export const Nav = styled.div<NavProps>`
  ${({ mobile }: any) =>
    mobile
      ? "left: -55px; transition: 0.2s linear;"
      : "left: 0px; transition: 0.2s linear;"}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  background-color: rgb(20, 24, 29);
  width: 55px;
  height: 100vh;
  z-index: 10;
`;

export const NavLogo = styled(Link)`
  margin: 20px auto 20px 6px;
  cousor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:first-child) {
    margin-top: 0px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  font-family: "Montserrat Bold", sans-serif;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: rgb(255, 255, 255);
  font-size: 9.44px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
`;

export const Img = styled.img``;

export const openNav = () => {
  const MyNav: any = document.getElementById("Nav");
  MyNav.style.left = "0px";
};

export const closeNav = () => {
  const MyNav: any = document.getElementById("Nav");
  if (window.innerWidth <= 700) {
    MyNav.style.left = "-55px";
  }
};
