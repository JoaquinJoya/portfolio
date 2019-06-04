import React from 'react'
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
                <CardPostArrow src="../../images/arrow-readmore.svg"/>
            </CardPostLink>
        </CardPost>
    )

}

export default Post