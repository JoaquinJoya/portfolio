import React from 'react'
import arrow from "../../images/arrow-readmore.svg"
import { Link } from 'gatsby'
import { CardPost, CardPostTitle, CardPostText, CardPostLink, CardPostArrow, CardPostReadMore,
    CardPostTextContainer } from './post.style.js'
import Img from 'gatsby-image'

const Post = ({ title, path, body, fluid }) => {
    return(
        <CardPost className="blog-post-card">
            <CardPostTextContainer>
                <CardPostTitle>
                    {title}
                </CardPostTitle>

                <CardPostText>
                    {body}
                </CardPostText>
                <CardPostLink to={path}>
                    <CardPostReadMore>
                        Read More
                    </CardPostReadMore>
                    <CardPostArrow src={arrow}/>
                </CardPostLink>
            </CardPostTextContainer>
                <Img className="post-card-img" fluid={fluid}/>
                
        </CardPost>
    )

}

export default Post