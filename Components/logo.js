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
    transition: 500ms ease;
  }
  &:hover img {
    transform: rotate(360deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Image src="/Logo_white.png" width={10} height={10} alt="logo" mr="2" />
      </LogoBox>
    </Link>
  );
};

export default Logo;
