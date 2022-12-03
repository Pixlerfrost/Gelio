import { Stack, Box, Heading, Link } from "@chakra-ui/react";
import Logo from "../Components/logo";

function Footer() {
  return (
    <>
      <Stack
        w="100vw"
        minH="10vh"
        direction={"row"}
        background="#050505"
        justify="center"
        align="center"
      >
        <Logo />
        <Link></Link>
      </Stack>
    </>
  );
}

export default Footer;
