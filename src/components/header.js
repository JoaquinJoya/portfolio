import { Link } from "gatsby"
import logo from "../images/logo.svg"
import styled from "styled-components"
import React from "react"
import "../css/styles.css"
import colors from "../css/colors.js"
import { device } from "../css/devices"




const Wrapper = styled.div `
  margin: 0 auto;
  padding: 0 80px;
  width: 100%;

  @media ${device.mobileL} {
    max-width: 300px;
  }

  @media ${device.tablet} {
    max-width: 768px;
  }

  @media ${device.laptopL} {
    max-width: 1316px;
  }

  

  
`;

const Nav = styled.nav `
display: flex;
justify-content: space-between;
`;

const ListNavContainer = styled.ul`
  
    
    list-style: none;
    margin: 0;
    padding: 0;
    display: none;


  @media ${device.tablet} {
      display: flex;
  }

  
  
`;

const NavItem = styled.li `
  padding: 0 24px;
 
`;

const NavItemLink = styled(Link)`
  text-decoration: none;
  font-family: "Steradian";
  font-size: 18px;
  font-weight: 400;
  color:${colors.blueBohemian};
  
`;

const NavContactLink = styled.a`
  font-weight: 900;
  text-decoration: underline;
  font-family: "Steradian";
  font-size: 18px;
  color:${colors.blueBohemian};
`

const LogoContainer = styled(Link)`
  height: 100%;
`;

const HeaderContainer = styled.header `
  display: flex;
  justify-content: center;
  padding: 32px 0;
`;



const Header = () => (
  <HeaderContainer>
    <Wrapper>
    <Nav>
      <LogoContainer to="/">
            <img style={{
              maxWidth: `inherit`
            }} src={logo} alt="Joaquin Joya"/>
      </LogoContainer>
      <ListNavContainer>
          <NavItem><NavItemLink to="/">Home</NavItemLink></NavItem>
          <NavItem><NavItemLink to="/">Work</NavItemLink></NavItem>
          <NavItem><NavItemLink to="/">The Process</NavItemLink></NavItem>
          <NavItem><NavItemLink to="/">About Me</NavItemLink></NavItem>
          <NavItem><NavItemLink to="/">Blog</NavItemLink></NavItem>
      </ListNavContainer>

      <NavContactLink href="#contact">Contact Me</NavContactLink>
    </Nav>
    </Wrapper>
    
  </HeaderContainer>
)



export default Header