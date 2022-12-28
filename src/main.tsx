import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { modalTheme } from './components/modal';


const theme = extendTheme({
  fonts: {
    body: ` 'Aclonica', sans-serif;`,
    heading: `'Aclonica', sans-serif;`,
  },
  components:{
    Modal:modalTheme
  },
  styles: {
    global: {
      "html, body": {
        bg: "rgb(1, 22, 39)",
        color: "#fff"
      },
    },
  },
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>

)
