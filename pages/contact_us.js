import {
  Button,
  Flex,
  Input,
  Heading,
  Container,
  Textarea,
  useToast,
  Box,
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
    <Box background="#050505" h="100vh">
      <Container mt="15vh">
        <Flex height="100vh" as="section-title">
          <Flex direction="column" m={5} background="-dark" p={12} rounded={6}>
            <form ref={form} onSubmit={sendEmail}>
              <Heading
                mb={6}
                overflow="hidden"
                fontFamily="'M PLUS Rounded 1c'"
                color="white"
              >
                Contact Us
              </Heading>
              <Input
                background="#202023"
                name="name"
                id="name"
                placeholder="Name"
                variant="filled"
                mb={6}
                type="text"
                color="white"
              />
              <Input
                background="#202023"
                name="email"
                id="email"
                placeholder="Email"
                variant="filled"
                color="white"
                mb={6}
                type="email"
              />
              <Input
                background="#202023"
                name="subject"
                id="subject"
                placeholder="Subject"
                variant="filled"
                color="white"
                mb={6}
                type="text"
              />

              <Textarea
                background="#202023"
                name="message"
                color="white"
                id="message"
                placeholder="Message"
                variant="filled"
                mb={6}
              />
              <Button colorScheme="teal" type="submit" value="send">
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
