import { Box, Container, Button, Link, IconButton } from "@chakra-ui/react";
import Logo from "../Components/logo";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <>
      <Box w="100vw" bg="#050505" zIndex={1}>
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          justify="space-between"
          overflow="hidden"
          color="white"
        >
          <Logo />

          <IconButton
            icon={<HamburgerIcon />}
            ml="auto"
            mr={{ base: "5vw", md: 0 }}
            background="#202023"
            _hover="hidden"
          />
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
