import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../Components/fonts";
import Navbar from "../Components/navbar";
import theme from "../Components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Fonts />

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
