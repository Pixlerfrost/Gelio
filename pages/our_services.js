import { Heading, Stack, useColorModeValue } from "@chakra-ui/react";

export default function our_services() {
  return (
    <>
      <Stack
        justify="center"
        align="center"
        bg={useColorModeValue("white", "black")}
        minH="77.5vh"
        w="100vw"
      >
        <Heading
          color={useColorModeValue("black", "white")}
          fontSize="6xl"
          flexWrap="wrap"
          overflow="hidden"
          size="100%"
          textAlign="center"
        >
          Page still in progress!
        </Heading>
      </Stack>
    </>
  );
}
