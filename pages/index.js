import { Text, Stack, Link, Button, Heading, Box } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Stack
        justify="center"
        align="center"
        background="#050505"
        direction="column"
        display="flex"
        minH="92vh"
        w="100vw"
      >
        <Heading
          fontSize={{ base: 50, md: 100 }}
          overflow="hidden"
          maxW="container.md"
          textAlign="center"
          color="white"
        >
          <Text
            overflow="hidden"
            bgGradient="linear(to-r, teal.300, blue.500,  purple.400)"
            bgClip="text"
            pb="1vh"
          >
            Web Design &
          </Text>{" "}
          Development.
        </Heading>
        <Text
          fontWeight="bold"
          fontSize={{ base: 20, md: 23 }}
          color="white"
          w="75vw"
          textAlign="center"
          p="5"
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
        minH="100vh"
        w="100vw"
      >
        <Heading
          fontSize={{ base: 40, md: 80 }}
          maxW="container.md"
          overflow="hidden"
          color="#8255ff"
          textAlign="center"
          pt="10vh"
          pb="2vh"
        >
          We make websites the right way.
        </Heading>
        <Text
          textAlign="center"
          color="#201652"
          fontFamily="'M PLUS Rounded 1c'"
          fontSize={{ base: 18, md: 25 }}
          maxW={{ base: "90vw", md: "container.sm" }}
          overflow="hidden"
        >
          Stop wasting your time and money on uninspiring designs. It&apos;s
          time to get back what you put in.
        </Text>
        <Link href="contact_us" color="white" overflow="hidden">
          <Button
            borderRadius="3xl"
            background="#8255ff"
            fontFamily="Agrandir"
            color="white"
            _hover="none"
            p="6"
            mt="3vh"
          >
            Contact us!
          </Button>
        </Link>
      </Stack>
      <Stack background="white" h="100vh" w="100vw"></Stack>
    </>
  );
}

export default Home;
