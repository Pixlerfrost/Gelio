import Link from "next/link";
import { Text, useColorModeValue, Image, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  display: flex;
  font-weight: bold;
  padding-top: 2px;
  padding-left: 2px;
  overflow: hidden;
  color: white;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Image src="/Logo_white.png" width={10} height={10} alt="logo" mr="2" />
        <Text
          fontSize={20}
          color="white"
          fontFamily="'M PLUS Rounded 1c'"
          fontWeight="bold"
          className="m"
        >
          MGY-Tech
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
