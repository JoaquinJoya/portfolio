
import logo from "../../images/logo.svg"
import React from "react"
import "../../css/styles.css"
import "./headerStyles.css"
import Menu from "./hamburgerMenu.js"
import { Nav, ListNavContainer, NavItem, NavItemLink, NavContactLink,
 HeaderContainer, 

} from "./header.style"
import { Wrapper, LogoContainer } from "../StyledComponents/styledComponents.js"



const Header = () => (

  
    <HeaderContainer className="HeaderActivated">
    <Wrapper>
    <Nav>
      <LogoContainer to="/">
            <img className="logo" style={{
              maxWidth: `inherit`
            }} src={logo} alt="Joaquin Joya"/>
      </LogoContainer>
      <ListNavContainer>
          <NavItem><NavItemLink to="/">Home</NavItemLink></NavItem>
          <NavItem><NavItemLink to="/work">Work</NavItemLink></NavItem>
          <NavItem><NavItemLink to="/">About Me</NavItemLink></NavItem>
          <NavItem><NavItemLink to="/">Blog</NavItemLink></NavItem>
      </ListNavContainer>

      <NavContactLink href="mailto:contact@joaquinjoyareal.com">Contact Me</NavContactLink>
    </Nav>
    </Wrapper>
    <Menu/>
  </HeaderContainer>
  

 
)





export default Header
