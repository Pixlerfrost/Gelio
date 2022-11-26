import {
  Text,
  Stack,
  Link,
  Box,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";

import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MGY-Tech | Web design agency</title>
        <meta name="description" content="MGY-Tech | Web design agency" />
        <meta name="author" content="Mohamad Youness" />

        <link rel="shortcut icon" href="/Logo_white.png" type="image/x-icon" />
      </Head>
      <Stack
        justify="center"
        align="center"
        h="100vh"
        w="100vw"
        background="#050505"
        direction="column"
        display="flex"
      >
        <Heading
          position="absolute"
          fontSize={{ base: 53, md: 100 }}
          overflow="hidden"
          maxW="container.md"
          textAlign="center"
          fontFamily="agrandir"
          color="white"
        >
          Web Design & Development.
        </Heading>
        <Text
          fontWeight="bold"
          fontFamily="'M PLUS Rounded 1c'"
          fontSize={{ base: 16, md: 23 }}
          color="white"
          pt={{ base: "20vh", md: "40vh" }}
        >
          A website to fullfill your heart&apos;s desires
        </Text>
      </Stack>

      <Stack
        direction="column"
        display="flex"
        justify="center"
        align="center"
        background="white"
        overflow="hidden"
        h="100vh"
        w="100vw"
      >
        <Heading
          fontFamily="agrandir"
          fontSize={{ base: 35, md: 80 }}
          color="#8255ff"
          textAlign="center"
          w={{ base: "110vw", md: "45vw" }}
        >
          We make websites the right way.
        </Heading>
        <Text
          textAlign="center"
          color="#201652"
          fontFamily="'M PLUS Rounded 1c'"
          fontSize={{ base: 18, md: 20 }}
          w={{ base: "90vw", md: "45vw" }}
          pt="3vh"
        >
          Stop wasting your time and money on uninspiring designs. It&apos;s
          time to get back what you put in.
        </Text>
        <Link href="contact_us">
          <Button
            borderRadius="60"
            background="#8255ff"
            fontFamily="Agrandir"
            color="white"
            w="40"
            h="6vh"
            _hover="none"
            mt="3vh"
          >
            Contact us!
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default Home;
