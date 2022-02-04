import { useEffect, useRef, useState } from "react";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavLink,
  openNav,
  closeNav,
  Img,
} from "./StyledNavbar";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [state] = useState({ mobileView: false });
  const { mobileView } = state;
  const dropMenuRef = useRef<any>(null);

  useEffect(() => {
    const setResponsiveness = () => {
      window.innerWidth >= 700 ? openNav() : closeNav();
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    closeNav();
  };

  document.addEventListener("mousedown", handleClickOutside);

  return (
    <Nav ref={dropMenuRef} mobile={mobileView} id="Nav">
      <NavLogo to="/">
        <Img
          style={{ marginBottom: "-1rem", width: "3rem", marginLeft: "-3px" }}
          src={Logo}
        />
      </NavLogo>
      <NavMenu>
        <NavLink to="/" onClick={closeNav}>
          HOME
        </NavLink>

        {/* <NavLink to="#" onClick={closeNav}>MARKET</NavLink>
         */}
        {/* <NavLink to={{pathname:"https://github.com/Kitsumon/documents"}} target="_blank" onClick={closeNav}>DOCS</NavLink> */}
        <NavLink
          to={{ pathname: "https://workdrive.zohopublic.eu/file/6z7ah614ce0951527444791851f61baa7c369" }}
          target="_blank"
          onClick={closeNav}
        >
          WHITE PAPER
        </NavLink>
        <NavLink
          to={{ pathname: "https://workdrive.zohopublic.eu/file/6z7ah04284379265e47d587c85b451ecc6dd3" }}
          target="_blank"
          onClick={closeNav}
        >
          DECK
        </NavLink>
        
        <NavLink
          to={{ pathname: "https://quickswap.exchange/#/swap?outputCurrency=0x44d09156c7b4acf0c64459fbcced7613f5519918" }}
          target="_blank"
          onClick={closeNav}
        >
          BUY
        </NavLink>
        <NavLink
          to="/vesting"
          onClick={closeNav}
        >
          VESTING
        </NavLink>
        <NavLink
          to="/staking"
          onClick={closeNav}
        >
          STAKING
        </NavLink>
        <NavLink
          to="/buy"
          onClick={closeNav}
        >
          MYSTERY SALE
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
