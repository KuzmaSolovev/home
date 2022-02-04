import React from "react";
import { Warraper, MysteryContainer } from "../StyledMystery";

import { Video } from "./StyledVideo";
import VideoFile from "../../../assets/video/introvideo.mp4";
import Menubar from "../../../layouts/Menubar";

export default function Reveal() {
  return (
    <React.Fragment>
      <Menubar />
      <Warraper>
        <MysteryContainer>
          <Video width="100%" height="100%" src={VideoFile} controls />
        </MysteryContainer>
      </Warraper>
    </React.Fragment>
  );
}
