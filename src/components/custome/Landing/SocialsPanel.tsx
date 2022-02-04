import React from "react";
import {
  Container,
  KitsuImg,
  SocialIcon,
  SocialLinks,
  SocialsText,
} from "./LandingStyled/StyledSocials";

import Kitsu_Image from "../../../assets/Kitsu.png";
import DiscordIcon from "../../../assets/SVG/Discord.svg";
import FacebookIcon from "../../../assets/SVG/Facebook.svg";
import GithubIcon from "../../../assets/SVG/Github.svg";
import InstagramIcon from "../../../assets/SVG/Instagram.svg";
import TelegramIcon from "../../../assets/SVG/Telegram.svg";
import LogoIcon from "../../../assets/SVG/Logo.svg";
import RedditIcon from "../../../assets/SVG/Reddit.svg";
import YouTubeIcon from "../../../assets/SVG/YouTube.svg";

const SocialsPanel = () => {
  return (
    <React.Fragment>
      <Container>
        <SocialsText>Socials</SocialsText>
        <SocialLinks>
          <a href="https://discord.gg/Kitsumon"><SocialIcon src={DiscordIcon}></SocialIcon></a>
          <a href="https://www.reddit.com/r/Kitsumon/"><SocialIcon src={RedditIcon}></SocialIcon></a>
          <a href="https://github.com/Kitsumon"><SocialIcon src={GithubIcon}></SocialIcon></a>
          <a href="https://www.facebook.com/KitsumonWorld"><SocialIcon src={FacebookIcon}></SocialIcon></a>
          <a href="https://www.instagram.com/kitsumonworld/"><SocialIcon src={InstagramIcon}></SocialIcon></a>
          {/* <a href="https://discord.com/invite/ZQqPxzN2fj"><SocialIcon src={YouTubeIcon}></SocialIcon></a> */}
          <a href="https://twitter.com/KitsumonWorld"><SocialIcon src={LogoIcon}></SocialIcon></a>
          <a href="https://t.me/Kitsumon"><SocialIcon src={TelegramIcon}></SocialIcon></a>
        </SocialLinks>
        <KitsuImg src={Kitsu_Image}></KitsuImg>
      </Container>
    </React.Fragment>
  );
};

export default SocialsPanel;
