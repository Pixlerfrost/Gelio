import { Text, Stack, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

function About_us() {
  return (
    <Stack
      w="100vw"
      minH="70vh"
      background={useColorModeValue("#050505", "gray.200")}
      color="black"
      justify="center"
      align="center"
    >
      <Stack direction="column">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            overflow="hidden"
            fontSize="5xl"
            fontWeight="bold"
            color={useColorModeValue("white", "#050505")}
          >
            Gelio
          </Heading>
          <Text
            fontSize="2xl"
            maxW={{ base: "90vw", md: "container.sm" }}
            fontWeight="light"
            pt="1vh"
            color={useColorModeValue("#c5c6d0", "#050505")}
          >
            We are a group of website engineers based in the U.S. We create
            beautiful digital designs and creative content. From Idea to
            Website: Full Web Design and Development.
          </Text>
        </motion.div>
      </Stack>
    </Stack>
  );
}

export default About_us;
