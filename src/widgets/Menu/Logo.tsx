import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isDark: boolean;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  
  .desktop-icon {
    width: 410px;
    display: block;
    ${({ theme }) => theme.mediaQueries.sm} {
      width: 640px;
    }
  }
`;

const Logo: React.FC<Props> = ({ isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex alignItems="center" mb="15px">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Greed home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Greed home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
