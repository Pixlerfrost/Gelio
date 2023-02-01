import {
  Text,
  Stack,
  Heading,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function About_us() {
  return (
    <Stack
      w="100vw"
      minH="70vh"
      background={useColorModeValue("#050505", "gray.200")}
      color="black"
      justify="center"
      direction="column"
      align="center"
    >
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
          beautiful digital designs and creative content. From Idea to Website:
          Full Web Design and Development.
        </Text>
      </motion.div>
      <motion.div initial={{ y: 1 }} whileHover={{ y: -2 }}>
        <Link href="our_services" color="white" _hover="none" overflow="hidden">
          <Button
            mt="7"
            borderRadius="full"
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="500"
            bg={useColorModeValue("white", "#050505")}
            color={useColorModeValue("#050505", "white")}
            padding={{ base: 5, md: 6 }}
            _hover={{ opacity: 0.8 }}
          >
            Our services
          </Button>
        </Link>
      </motion.div>
    </Stack>
  );
}

export default About_us;
