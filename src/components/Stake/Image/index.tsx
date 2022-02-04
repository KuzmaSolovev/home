import { Img, Warraper } from "./StyledImage";

export default function index(props: any) {
  return (
    <Warraper role={props.role}>
      <Img w={props.w} h={props.h} src={props.url} />
    </Warraper>
  );
}
