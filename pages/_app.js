import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../Components/fonts";
import Navbar from "../Components/navbar";
import theme from "../Components/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gelio</title>
        <meta name="description" content="MGY-Tech | Web design agency" />
        <meta name="author" content="Mohamad Youness" />

        <link
          rel="shortcut icon"
          href="/Logo.
png"
          type="image/x-icon"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Fonts />

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
