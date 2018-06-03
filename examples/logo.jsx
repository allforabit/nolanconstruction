// Button.js example
import React from "react";
import { Logo } from "../src/components/logo";
import { Box } from "rebass";
import { Library, Example } from "@compositor/kit";

export default props => (
  <Library>
    <Example name="Logo">
      <Box bg="blue">
        <Logo />
      </Box>
    </Example>
  </Library>
);
