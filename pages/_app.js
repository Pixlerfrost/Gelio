import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../Components/fonts";
import Navbar from "../Components/navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
