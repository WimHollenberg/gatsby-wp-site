import React from 'react'
import {Link} from 'gatsby'
import { Wrapper } from './LatestBlogPost.styles'
import{ useLatestBlogQuery } from '../../hooks/useLatestBlogQuery'

const LatestBlogPost = () => {
  const data = useLatestBlogQuery();
  // console.log(data);
  const dataSrc = data.allWpPost.edges[0].node;
  return (
    <Wrapper>
      <h1>Latest Blog Post</h1>
      <h4>{dataSrc.title}</h4>
      <div dangerouslySetInnerHTML={{
        __html: dataSrc.excerpt
      }}></div>
      <Link to={dataSrc.uri}>
        <h5>Read more</h5>
      </Link>
    </Wrapper>
  )
}

export default LatestBlogPost
