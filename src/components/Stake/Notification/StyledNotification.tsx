import styled from "styled-components";

type Props = {
  role: number;
};

export const Warraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  background: ${(props: Props) => {
    if (props.role) {
      return "#FFFFFF";
    }
    return "#f9fafb";
  }};
  border: 1px solid #eeeff1;
  border-radius: 10px;
  height: 50px;
  font-family: "-apple-system, BlinkMacSystemFont, " Segoe UI ", " Roboto ", "
    Oxygen ",    " Ubuntu ", " Cantarell ", " Fira Sans ", " Droid Sans ", "
    Helvetica Neue ",    sans-serif";
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const APR = styled.div`
  font-size: 18px;
  @media screen and (max-width: 400px) {
    font-size: 17px;
  }
`;

export const Percent = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #461387;
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;
