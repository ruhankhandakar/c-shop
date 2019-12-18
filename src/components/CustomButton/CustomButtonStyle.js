import styled, { css } from "styled-components";

const buttonStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSigninStyle = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyle = props => {
  if (props.isGoogleSignIn) {
    return googleSigninStyle;
  }
  return props.inverted ? invertedButtonStyle : buttonStyle;
};

export const CustomButtonContainers = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  margin: 0 5px;
  display: flex;
  justify-content: center;

  ${getButtonStyle}
`;
