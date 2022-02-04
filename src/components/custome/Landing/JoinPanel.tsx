import React from "react";
import {
  Containter,
  NavLink,
  JoinContainer,
  JoinText1,
  JoinText2,
} from "./LandingStyled/StyledJoin";
import MailExt from "../../MailExt";

const JoinPanel = () => {
  return (
    <React.Fragment>
      <Containter>
        <JoinContainer>
          <JoinText1>JOIN OUR COMMUNITY</JoinText1>
          <JoinText2>
            Keep up to date with the latest news and reiease information for
            Kitsumon by joining our mailing list.
          </JoinText2>
          {/* <JoinBtn
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              MailExt.showPopup(e, document)
            }
          >
            JOIN US
          </JoinBtn> */}
          <NavLink
            to={{ pathname: `https://discord.com/invite/ZQqPxzN2fj` }}
            target="_blank"
          >
            JOIN US
          </NavLink>
        </JoinContainer>
      </Containter>
    </React.Fragment>
  );
};

export default JoinPanel;
