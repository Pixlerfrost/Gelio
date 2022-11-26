import { Box, Container, Button, Link } from "@chakra-ui/react";
import Logo from "../Components/logo";

function Navbar() {
  return (
    <>
      <Box position="absolute" w="100vw" bg="whiteAlpha.50" zIndex={1}>
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          justify="space-between"
          overflow="hidden"
          color="white"
        >
          <Logo />

          <Link ml="auto" href="contact_us">
            <Button
              borderRadius="md"
              background="#202023"
              fontFamily="Agrandir"
              color="white"
              w="30"
              mr={{ base: 1, md: 0 }}
            >
              Hi there, let&apos;s chat!
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
