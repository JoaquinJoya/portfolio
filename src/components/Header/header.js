
import logo from "../../images/logo.svg"
import React from "react"
import "../../css/styles.css"
import "./headerStyles.css"
import Menu from "./hamburgerMenu.js"
import { Nav, ListNavContainer, NavItem, NavItemLink, NavContactLink,
  LogoContainer, HeaderContainer, 

} from "./header.style"
import { Wrapper } from "../styledComponents/styledComponents"



const Header = () => (

  
    <HeaderContainer className="HeaderActivated">
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
          <NavItem><NavItemLink to="/">About Me</NavItemLink></NavItem>
          <NavItem><NavItemLink to="/">Blog</NavItemLink></NavItem>
      </ListNavContainer>

      <NavContactLink href="#contact">Contact Me</NavContactLink>
    </Nav>
    </Wrapper>
    <Menu/>
  </HeaderContainer>
  

 
)





export default Header
