import {
  Box,
  Flex,
  Button,
  Stack,
  Link,
  IconButton,
  Container,
} from "@chakra-ui/react";
import Logo from "../Components/logo";
import ThemeToggleButton from "./theme-button";

function Navbar() {
  return (
    <>
      <Box w="100vw" bg="#050505" borderBottom="1px" borderColor="#202023">
        <Container maxW="container.lg" display="flex" paddingY={2}>
          <Flex position="absolute" overflow="hidden" pt="0.5">
            <ThemeToggleButton />
          </Flex>

          <Flex align="center" mx="auto">
            <Logo />
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
