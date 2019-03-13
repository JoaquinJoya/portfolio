import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import styled from "styled-components"
import React from "react"
import "../../css/styles.css"
import colors from "../../css/colors.js"
import { device } from "../../css/devices"
import { Wrapper, Section } from "../styledComponents/styledComponents.js"
import CTAFooter from "./CTAFooter.js"


const Footer = () => (

<footer>
    <Section blue>
        <CTAFooter/>
    </Section>
    
</footer>

 
)


export default Footer