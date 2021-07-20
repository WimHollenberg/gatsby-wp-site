import React from 'react'
import { useAboutQuery } from '../../hooks/useAboutQuery'
import { Wrapper, AboutImage } from './About.styles'

const About = () => {
  const {wpPage} = useAboutQuery();
  const imageUrl = wpPage.featuredImage.node.localFile.publicURL
  const content = wpPage.content

  return (
    <Wrapper>
      <AboutImage image={imageUrl} />
      <div className="about-text" dangerouslySetInnerHTML={{
        __html: content
      }} />
    </Wrapper>
  )
}

export default About
