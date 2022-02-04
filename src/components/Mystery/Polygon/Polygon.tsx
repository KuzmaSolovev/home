import React, { useState, useEffect } from "react";
import HoverImage from "react-hover-image";
import { BsQuestionLg } from "react-icons/bs";
import { Container, Pattern } from "./StyledPolygon";
import Img from "../../../assets/Polygon1.png";
import Img_hover from "../../../assets/Polygon_hover.png";
import Img_click from "../../../assets/ClickImg.png";

export default function Polygon() {
  const [ImgUrl, setSrc] = useState(Img);
  const [clickFlag, setClickFlag] = useState(false);
  const handleMouseOver = () => {
    if (!clickFlag) {
      setSrc(Img_hover);
    }
  };

  const handleMouseOut = () => {
    if (!clickFlag) {
      setSrc(Img);
    }
  };
  return (
    <React.Fragment>
      <Container
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          setClickFlag(true);
          setSrc(Img_click);
        }}
      >
        <img className="polygon" src={ImgUrl}></img>
        <BsQuestionLg className="question" />
      </Container>
    </React.Fragment>
  );
}
