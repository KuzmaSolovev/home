import styled from "styled-components";
import img from "../../../assets/Mask.png";
import img1 from "../../../assets/Mask1.png";

type Props = {
  role: number;
  w: string;
  h: string;
};

export const Warraper = styled.div`
  border-radius: 15px;
  background-image: ${(props: Props) =>
    props.role === 1 ? `url(${img1})` : `url(${img})`};
  background-size: cover;
  background-position: center center;
`;

export const Img = styled.img<Props>`
  overflow: hidden;
  &:hover {
    transform: scale(1.25);
  }
  
  width: ${(props: Props) => {
    return props.w;
  }};
  height: ${(props: Props) => {
    return props.h;
  }};
`;
