import React from "react"
import instagram from "../../images/instagram-joaquinjoyareal.svg"
import twitter from "../../images/twitter-joaquinjoyareal.svg"
import dribbble from "../../images/dribbble-joaquinjoyareal.svg"
import linkedin from "../../images/linkedin-joaquinjoyareal.svg"


import { FooterSocialContainer, SocialMediaWrapper, SocialLink, SocialLogoImg, 
} from "./footer.style.js"

const FooterSocial = () => (
<FooterSocialContainer>
    <SocialMediaWrapper>
            <SocialLink href="https://www.instagram.com/joaquinjoyareal/">
                <SocialLogoImg src={instagram}/>
            </SocialLink>
            <SocialLink href="https://twitter.com/joaquinjoyareal">
                <SocialLogoImg src={twitter}/>
            </SocialLink>
            <SocialLink href="https://dribbble.com/joaquinjoyareal">
                <SocialLogoImg src={dribbble}/>
            </SocialLink> <SocialLink href="https://www.linkedin.com/in/joaquinjoyareal/">
                <SocialLogoImg src={linkedin}/>
            </SocialLink>
    </SocialMediaWrapper>
</FooterSocialContainer>
)

export default FooterSocial