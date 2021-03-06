import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Box } from "./layout-components"
import Button from "./button"
import LogoImage from "../images/logo"
import Hamburger from "./hamburger"

const LINKS = [
  {
    title: "Speakers",
    href: "/speakers",
  },
  {
    title: "Schedule",
    href: "/schedule",
  },
  {
    title: "Venue & Travel",
    href: "/venue",
  },
  {
    title: "Diversity",
    href: "/diversity",
  },
  {
    title: "Conduct",
    href: "/conduct",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
  },
  {
    title: "About",
    href: "/about",
  },
]

const Container = props => (
  <Box as="header" top="0" bg="white" zIndex="1" {...props} />
)

const Logo = ({ ...props }) => (
  <Box
    as={Link}
    display="flex"
    alignItems="center"
    width={["200px", "250px"]}
    px={8}
    py={4}
    aria-label="React Boston 2019"
    {...props}
  >
    <LogoImage width="100%" />
  </Box>
)

const Nav = props => (
  <Box
    as="nav"
    py={10}
    px={[9, null, null, 11, 12]}
    color="white"
    bg="primaryDark"
    {...props}
  />
)

const NavItem = styled(Box)`
  list-style: none;
`

const NavLinkBase = styled(Link)`
  color: ${p => p.theme.colors.white};
  text-decoration: none;
  transition: 0.3s ease;
  border-bottom: 2px solid transparent;

  &:hover,
  &:focus,
  &:active {
    border-bottom-color: ${({ theme }) => theme.colors.white};
  }

  &:focus {
    outline-offset: 2px;
    outline: 1px dotted;
  }
`

const NavLink = props => (
  <NavLinkBase
    {...props}
    activeStyle={{
      borderBottomColor: "#fff",
    }}
  />
)

const ButtonWrap = styled(Box)`
  list-style: none;
`

const Header = ({ siteTitle, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  return (
    <Container {...props}>
      <Box display="flex">
        <Logo title="Home" to="/">
          {siteTitle}
        </Logo>
        <Nav
          display={[null, null, null, "flex"]}
          flexGrow="1"
          fontSize={2}
          position="relative"
          borderRadius={isOpen ? null : "0 0 0 65px"}
        >
          <Hamburger onClick={toggleMenu} isActive={isOpen} />
          <Box
            as="ul"
            display={[isOpen ? "flex" : "none", null, null, "flex"]}
            flexDirection={["column", null, null, "row"]}
            alignItems={["center", null, null, "baseline"]}
            justifyContent="space-between"
            flexGrow="1"
            borderRadius={isOpen ? "0 0 0 65px" : null}
            boxShadow={isOpen ? "0 10px 20px rgba(0,0,0,.4)" : null}
            px={isOpen ? ["4", null, "11"] : 0}
            py={isOpen ? "10" : 0}
            left={0}
            bg="primaryDark"
            width="100%"
            position={isOpen ? "absolute" : "relative"}
          >
            {LINKS.map(({ title, href }) => (
              <NavItem as="li" key={href} p={[3, null, null, 0]}>
                <NavLink to={href}>{title}</NavLink>
              </NavItem>
            ))}
            <ButtonWrap as="li" listStyle="none" mt={[6, null, null, 0]}>
              <Button
                href="https://www.youtube.com/playlist?list=PLhBlV3WSUrT3jCmqmYWcUEvmon_6K6WUy"
                openInNewTab
              >
                YouTube
              </Button>
            </ButtonWrap>
          </Box>
        </Nav>
      </Box>
    </Container>
  )
}

export default Header
