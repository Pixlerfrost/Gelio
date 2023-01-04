import { Text, Stack, Heading, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Our_Team() {
  return (
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
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Heading fontSize="5xl" overflow="hidden" mt="3vh" textAlign="center">
          Our Team
        </Heading>
      </motion.div>
      <Stack>
        <Image
          src="/My_Bird.ico"
          alt="profile"
          borderRadius="full"
          w="100px"
          h="100px"
          border="4px"
          borderColor="white"
          ml="23%"
          mt="3vh"
        />

        <Link href="https://mohamad.vercel.app/">
          <Text textAlign="center" fontWeight="bold" fontSize="xl" pt="2">
            Mohamad Youness
          </Text>
        </Link>
        <Text textAlign="center" fontWeight="thin" fontSize="xl">
          Founder
        </Text>
      </Stack>
    </Stack>
  );
}

export default Our_Team;
