import React from 'react'
import arrow from "../../images/arrow-readmore.svg"
import { Link } from 'gatsby'
import { CardPost, CardPostTitle, CardPostText, CardPostLink, CardPostArrow, CardPostReadMore } from './post.style.js'

const Post = ({ title, path, body }) => {
    return(
        <CardPost className="blog-post-card">
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
        </CardPost>
    )

}

export default Post