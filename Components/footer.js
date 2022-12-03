import { Stack, Box, Text, Link } from "@chakra-ui/react";
import Logo2 from "../Components/logo_2";

function Footer() {
  return (
    <>
      <Stack
        minW="100vw"
        minH="10vh"
        direction={"row"}
        background="#050505"
        justify="center"
        align="center"
        pb={{ base: "5vh" }}
      >
        <Logo2 />

        <Text fontSize="md" color="white">
          <Link href="privacy_policy" paddingX="1vw">
            Privacy Policy
          </Link>
          <Link href="/" paddingX="1vw">
            Twitter
          </Link>
          <Link href="/" paddingX="1vw">
            Instagram
          </Link>
          <Link href="/" paddingX="1vw">
            Github
          </Link>
          <Link href="/" paddingX="1vw">
            LinkedIn
          </Link>
        </Text>
      </Stack>
    </>
  );
}

export default Footer;
