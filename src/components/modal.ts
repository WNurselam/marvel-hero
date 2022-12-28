import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => {
  const { colorScheme: c } = props;
  return {
    dialog: {
      borderRadius: "md",
      bg: `${c}.100`,
      _dark: {
        bg: `${c}.600`,
        color: "white",
      },
    },
  };
});

const xl = defineStyle({
  px: "6",
  py: "0",
  fontSize: "xl",
});

const sm = defineStyle({
  fontSize: "sm",
  py: "2",
  pt: "8",
});

const sizes = {
  xl: definePartsStyle({ header: sm, dialog: xl }),
};

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    colorScheme: "#2D3748", //set the default color scheme to purple
    size: "xl",
  },
});
