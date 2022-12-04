import { Stack, Image, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <>
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
        <Link href="/">
          <Image
            color="white"
            src="/Logo_white.png"
            width="25px"
            height="25px"
            alt="logo"
            mt="1"
          />
        </Link>

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
    </>
  );
}

export default Footer;
