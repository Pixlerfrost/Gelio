import { Box, Flex, Button, Link, IconButton } from "@chakra-ui/react";
import Logo from "../Components/logo";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <>
      <Box w="100vw" bg="#050505" className="n">
        <Flex p={2} justify="center" overflow="hidden" color="white">
          <Logo />
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
