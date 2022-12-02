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
        borderBottom="2px"
        borderColor="#202023"
      >
        <Heading
          fontSize={{ base: 50, md: 100 }}
          overflow="hidden"
          maxW="container.md"
          textAlign="center"
          color="white"
        >
          Web Design &
          <Text
            overflow="hidden"
            bgGradient="linear(to-r, red.500, yellow.500)"
            bgClip="text"
            pb="1vh"
          >
            Development
          </Text>{" "}
        </Heading>
        <Text
          fontSize={{ base: 20, md: 23 }}
          color="#888"
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
        background="#050505"
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
          fontWeight="extrabold"
          pb="2vh"
        >
          We make websites the right way.
        </Heading>
        <Text
          textAlign="center"
          color="#888"
          fontSize={{ base: 18, md: 22 }}
          maxW={{ base: "90vw", md: "container.sm" }}
          overflow="hidden"
        >
          Stop wasting your time and money on uninspiring designs. It&apos;s
          time to get back what you put in.
        </Text>
        <Link href="contact_us" color="white" overflow="hidden" _hover="hidden">
          <Button mt="2vh" colorScheme="purple" textColor="white">
            Contact us!
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default Home;
