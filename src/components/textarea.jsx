import sys from "system-components";
import { themeGet, space, color } from "styled-system";
import {Textarea as RBTextarea } from "rebass";
import styled from "styled-components";
// A good example of extending combining styled system with custom stuff

export const Textarea = styled.textarea`
  ${space}
  ${color}
`;

Textarea.defaultProps = {
  bg: "transparent"
}

// export const Textarea = sys(
//   {
//     is: "textarea",
//     px: 1,
//     py: 2,
//     m: 0,
//     width: 1,
//     fontSize: "inherit",
//     color: "inherit",
//     bg: "transparent",
//     border: 0,
//     borderColor: "gray",
//     boxShadow: 1,
//     borderRadius: 2
//   },
//   props => ({
//     fontFamily: "inherit",
//     appearance: "none",
//     "&:focus": {
//       outline: "none",
//       boxShadow: "inset 0 0 0 1px" + themeGet("colors.blue")(props)
//     },
//     "&:disabled": {
//       opacity: 1 / 4
//     }
//   })
// );
