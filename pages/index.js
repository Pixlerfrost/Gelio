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
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
        <title>MGY-Tech | Web design agency</title>
        <meta name="description" content="MGY-Tech | Web design agency" />
        <meta name="author" content="Mohamad Youness" />

        <link rel="shortcut icon" href="/Logo_white.png" type="image/x-icon" />
      </Head>
      <Flex justify="center" h="100vh" w="100vw" background="#050505">
        <Heading
          position="absolute"
          fontSize={{ base: 55, md: 100 }}
          pt={{ base: "30vh", md: "32vh" }}
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
          fontSize={{ base: 15, md: 23 }}
          mt={{ base: "50vh", md: "66vh" }}
          color="white"
        >
          A website to fullfill your heart&apos;s desires
        </Text>
      </Flex>

      <Box background="white" overflow="hidden" h="100vh">
        <Flex justify="center" align="center">
          <Stack direction="column">
            <Heading
              fontFamily="agrandir"
              fontSize={{ base: 35, md: 80 }}
              color="#8255ff"
              textAlign="center"
              mt="30vh"
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
              pl="5vw"
            >
              Stop wasting your time and money on uninspiring designs. It&apos;s
              time to get back what you put in.
            </Text>
            <Link ml="auto" href="contact_us">
              <Button
                borderRadius="60"
                background="#8255ff"
                fontFamily="Agrandir"
                color="white"
                w="40"
                h="6vh"
                mr={{ base: 7, md: 0 }}
                _hover="none"
                ml={{ base: "29vw", md: "17vw" }}
                mt="3vh"
              >
                Contact us!
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
