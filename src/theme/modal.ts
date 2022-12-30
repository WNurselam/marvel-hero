import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const purple = definePartsStyle({
  dialog: {
    borderRadius: 'md',
    bg: `rgb(1, 22, 39)`,

    _dark: {
      bg: `rgb(1, 22, 39)`,
      color: 'white',
    },
  },
})

export const modalTheme = defineMultiStyleConfig({
  variants: { purple },
})


