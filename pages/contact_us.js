import {
  Button,
  Flex,
  Input,
  Heading,
  Container,
  Textarea,
  useToast,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export function Contact_Page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k3o1pqk",
        "template_sfglumo",
        form.current,
        "NZRkaK2Sv2rlabx3F"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.status === 200) {
            return toast({
              title: "Success",
              description:
                "Your Email has been sent! We will be in contact soon.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }

          if (!result.text === OK) {
            return toast({
              title: "Error",
              description: "Something went wrong! Your email wasn't sent.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const toast = useToast();
  return (
    <Box
      bg={useColorModeValue("gray.200", "#050505")}
      minH="100vh"
      overflow="hidden"
    >
      <Container mt="8vh" overflow="hidden">
        <Flex as="section-title">
          <Flex direction="column" m={5} background="-dark" rounded={6}>
            <form ref={form} onSubmit={sendEmail}>
              <Heading
                mb={6}
                overflow="hidden"
                fontFamily="'M PLUS Rounded 1c'"
                color={useColorModeValue("#fa1d53", "white")}
              >
                Contact Us
              </Heading>
              <Input
                background={useColorModeValue("gray.200", "black")}
                name="subject"
                id="subject"
                placeholder="Company Name"
                variant="filled"
                mb={6}
                type="text"
                textColor={useColorModeValue("black", "white")}
                _hover="hidden"
                _placeholder={{ opacity: 1, color: "#888" }}
                border="2px"
                borderColor={useColorModeValue("black", "white")}
                required
                borderRadius="2xl"
                minW="full"
                pl={{ md: "2vw", base: "6vw" }}
              />
              <Input
                background={useColorModeValue("gray.200", "black")}
                name="email"
                id="email"
                placeholder="Your E-mail"
                variant="filled"
                textColor={useColorModeValue("black", "white")}
                mb={6}
                _hover="hidden"
                type="email"
                _placeholder={{ opacity: 1, color: "#888" }}
                border="2px"
                borderColor={useColorModeValue("black", "white")}
                required
                borderRadius="2xl"
                pl={{ md: "2vw", base: "6vw" }}
                minW="full"
              />

              <Textarea
                background={useColorModeValue("gray.200", "black")}
                borderRadius="2xl"
                name="message"
                text
                textColor={useColorModeValue("black", "white")}
                id="message"
                placeholder="Additional Information"
                variant="filled"
                _hover="hidden"
                mb={6}
                _placeholder={{ opacity: 1, color: "#888" }}
                border="2px"
                borderColor={useColorModeValue("black", "white")}
                required
                minH="16em"
                pl={{ md: "2vw", base: "5vw" }}
                pt={{ md: "2vh", base: "2vw" }}
                minW="fit-content"
              />
              <Button
                bg={useColorModeValue("#fa1d53", "#8255ff")}
                color={useColorModeValue("white", "black")}
                _hover={{ opacity: 0.84 }}
                _active={{ opacity: 0.84 }}
                type="submit"
                value="send"
              >
                Send
              </Button>
            </form>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Contact_Page;
