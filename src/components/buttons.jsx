import styled from "styled-components";
import {
  Button,
  ButtonOutline
} from rebass;

export const PrimaryButton = styled(Button)({
  transition: "background-color .2s ease-out",
  "&:hover": {
    backgroundColor: "magenta"
  }
});

export const SecondaryButton = styled(ButtonOutline)({
  transition: ".2s ease-out",
  transitionProperty: "color, box-shadow",
  backgroundColor: "transparent",
  "&:hover": {
    color: "magenta",
    backgroundColor: "transparent",
    boxShadow: "inset 0 0 0 2px magenta"
  }
});
