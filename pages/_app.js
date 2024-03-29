import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../Components/fonts";
import Navbar from "../Components/navbar";
import theme from "../Components/theme";
import Head from "next/head";
import Footer from "../Components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gelio</title>
        <meta name="description" content="Gelio | Web design agency" />
        <meta name="author" content="Mohamad Youness" />

        <link rel="shortcut icon" href="/Logo.png" type="image/x-icon" />
      </Head>

      <ChakraProvider theme={theme}>
        <Navbar />
        <Fonts />

        <Component {...pageProps} />

        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
