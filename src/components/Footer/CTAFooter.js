import React from "react"
import { Wrapper, Section } from "../StyledComponents/styledComponents.js"

import { Title, Text, ContactContainer, ContactButton } from "./CTAFooter.style"
const CTAFooter = () => (
    <Section blue>
        <Wrapper>
            <Title>Want to work with me?</Title>
            <Text><b>Let’s work together</b>, If you want to build or 
                refine your product, website or app. feel free to contact me, I would love to hear how can I help you. Currently available for freelance projects, send me a message to get in touch!
            </Text>
            <ContactContainer>
                <ContactButton href="mailto:contact@joaquinjoyareal.com">Contact Me</ContactButton>
            </ContactContainer>
            <Text>contact@joaquinjoyareal.com</Text>
        </Wrapper>
    </Section>
    
        


)

export default CTAFooter