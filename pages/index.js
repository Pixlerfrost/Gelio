import {
  Text,
  Stack,
  Link,
  Button,
  Heading,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Grid, GridItem } from "@chakra-ui/react";

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Heading
            fontSize={{ base: 50, md: 100 }}
            overflow="hidden"
            maxW="container.md"
            textAlign="center"
            color="white"
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
      <Stack
        w="100vw"
        minH="70vh"
        background="white"
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
            <Heading overflow="hidden" fontSize="5xl" fontWeight="bold">
              Gelio
            </Heading>
            <Text
              fontSize="2xl"
              maxW={{ base: "90vw", md: "container.sm" }}
              fontWeight="light"
              pt="1vh"
            >
              We are a group of website engineers based in the U.S. We create
              beautiful digital designs and creative content. From Idea to
              Website: Full Web Design and Development.
            </Text>
          </motion.div>
        </Stack>
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
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
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        <Link href="contact_us" color="white" _hover="none" overflow="hidden">
          <Button
            borderRadius="3xl"
            background="black"
            color="white"
            border="2px"
            borderColor="#8255ff"
            _hover={{ color: "#8255ff" }}
            fontSize={{ base: "13px", md: "17px" }}
            padding={{ base: 3, md: 6 }}
            mt="3vh"
            fontWeight="500"
            mb="3"
          >
            Contact us!
          </Button>
        </Link>
      </Stack>
      <Stack
        borderTop="2px"
        borderColor="#202023"
        align="center"
        justify="center"
        w="100vw"
        minH={{ base: "100vh", md: "50vh" }}
        background="#050505"
        color="white"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading fontSize="5xl" overflow="hidden" mt="3vh" textAlign="center">
            Our Team
          </Heading>
        </motion.div>
        <Stack>
          <Image
            src="/My_bird.webp"
            alt="profile"
            borderRadius="full"
            w="100px"
            h="100px"
            border="4px"
            borderColor="white"
            ml="21%"
            mt="5vh"
          />
          <Text textAlign="center" fontWeight="bold" fontSize="xl" pt="2">
            Mohamad Youness
          </Text>
          <Text textAlign="center" fontWeight="thin" fontSize="xl">
            Founder
          </Text>
        </Stack>
      </Stack>
    </>
  );
}

export default Home;
