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
      bg: `${c}.200`,
      _dark: {
        bg: "rgb(1, 22, 39)",
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
    colorScheme: "rgb(1, 22, 39)", 
    size: "xl",
  },
});
