import Link from "next/link";
import { Text, useColorModeValue, Image, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  color: white;
  padding-top: 3px;
`;

const Logo2 = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Image src="/Logo_white.png" width="25px" height="25px" alt="logo" />
      </LogoBox>
    </Link>
  );
};

export default Logo2;
