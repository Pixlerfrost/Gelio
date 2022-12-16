import { Text, Stack, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Stack
      justify="center"
      align="center"
      bg={useColorModeValue("white", "#050505")}
      direction="column"
      display="flex"
      minH="92vh"
      w="100vw"
      borderBottom="2px"
      borderColor="#202023"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading
          fontSize={{ base: 50, md: 100 }}
          overflow="hidden"
          maxW="container.md"
          textAlign="center"
          color={useColorModeValue("#050505", "white")}
        >
          Web Design &
          <Text overflow="hidden" color="#8255ff" pb="1vh">
            Development
          </Text>{" "}
        </Heading>
      </motion.div>
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
  );
}

export default Hero;
