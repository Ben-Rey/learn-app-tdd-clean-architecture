import { extendTheme } from "@chakra-ui/react";

const colors = {
  bg: {
    dark: "#211D42",
    light: "#F5F5F5",
  },
  text: {
    light: "#211D42",
    dark: "#F5F5F5",
  },
  error: {
    100: "#ED254E",
  },
  greeny: {
    100: "#E2F297",
    200: "#02575C",
    300: "#02575C",
  },
  crayola: {
    100: "#C4D7F2",
  },
  border: {
    card: "#514B77",
  },
};

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({ config, colors });

export default theme;
