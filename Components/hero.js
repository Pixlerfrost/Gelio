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
        transition={{ duration: 1, delay: 0.1 }}
      >
        <Heading
          fontSize={{ base: 52, md: 100 }}
          overflow="hidden"
          maxW="container.md"
          textAlign="center"
          color={useColorModeValue("#fa1d53", "white")}
          fontFamily="Poppins,sans-serif"
        >
          Web Design &
          <Text
            overflow="hidden"
            color={useColorModeValue("#fa1d53", "#8255ff")}
          >
            Development
          </Text>{" "}
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Text
          fontSize={{ base: 15, md: 22 }}
          color="#888"
          w="75vw"
          textAlign="center"
          p="2"
          fontFamily="Poppins,sans-serif"
        >
          A website to fullfill your heart&apos;s desires.
        </Text>
      </motion.div>
    </Stack>
  );
}

export default Hero;
