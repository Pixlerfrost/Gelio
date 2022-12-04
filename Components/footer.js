import { Stack, Box, Text, Link } from "@chakra-ui/react";
import Logo2 from "../Components/logo_2";

function Footer() {
  return (
    <>
      <Stack>
        <Stack
          direction="row"
          background="#050505"
          display="flex"
          flexWrap="wrap"
          justify="center"
          p="6"
          align="center"
          pb={{ base: "5vh" }}
        >
          <Logo2 />

          <Link href="privacy_policy" paddingX="1vw" color="white">
            Privacy Policy
          </Link>
          <Link href="/" paddingX="1vw" color="white">
            Twitter
          </Link>
          <Link href="/" paddingX="1vw" color="white">
            Instagram
          </Link>
          <Link href="/" paddingX="1vw" color="white">
            Github
          </Link>
          <Link href="/" paddingX="1vw" color="white">
            LinkedIn
          </Link>
        </Stack>
      </Stack>
    </>
  );
}

export default Footer;
