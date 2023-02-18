import {
  Text,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function Contact_Us_Hero() {
  return (
    <Stack
      direction="column"
      display="flex"
      justify="center"
      align="center"
      background={useColorModeValue("gray.200", "#050505")}
      overflow="hidden"
      minH="100vh"
      w="100vw"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading
          fontSize={{ base: 40, md: 80 }}
          maxW="container.md"
          overflow="hidden"
          color={useColorModeValue("#fa1d53", "white")}
          textAlign="center"
          pt="10vh"
          fontFamily="Poppins,sans-serif"
          pb="2vh"
        >
          We make websites the right way.
        </Heading>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Text
          textAlign="center"
          color="#888"
          fontSize={{ base: 18, md: 20 }}
          maxW={{ base: "90vw", md: "container.sm" }}
          overflow="hidden"
        >
          Stop wasting your time and money on uninspiring designs. It&apos;s
          time to get back what you put in.
        </Text>
      </motion.div>

      <motion.div initial={{ y: 1 }} whileHover={{ y: -2 }}>
        <Link href="contact_us" color="white" _hover="none" overflow="hidden">
          <Button
            borderRadius="full"
            background={useColorModeValue("#fa1d53", "white")}
            color={useColorModeValue("white", "#050505")}
            fontSize={{ base: "14px", md: "17px" }}
            padding={{ base: 4, md: 6 }}
            mt="3vh"
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 0.8 }}
            fontWeight="500"
            mb="3"
          >
            Contact us!
          </Button>
        </Link>
      </motion.div>
    </Stack>
  );
}

export default Contact_Us_Hero;
