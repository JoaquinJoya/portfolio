import { Link } from "gatsby"
import styled from "styled-components"
import "../../css/styles.css"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"
import "./headerStyles.css"




export const Nav = styled.nav `
display: flex;
justify-content: space-between;
`;

export const ListNavContainer = styled.ul`
  
    list-style: none;
    margin: 0;
    padding: 0;
    display: none;


  @media ${device.laptop} {
      display: flex;
  }

  
  
`;

export const NavItem = styled.li `


@media ${device.tablet} {
  padding: 0 24px;
}

padding: 0 14px;

  
`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
  font-family: "Steradian";
  font-size: 18px;
  font-weight: 400;
  color:${colors.blueBohemian};
  
`;

export const NavContactLink = styled.a`
  font-weight: 900;
  text-decoration: underline;
  font-family: "Steradian";
  font-size: 18px;
  color:${colors.blueBohemian};
`


export const HeaderContainer = styled.header `
  display: flex;
  justify-content: center;
  padding: 32px 0;
  position: absolute;
  left: 0;
  width: 100%;
`;