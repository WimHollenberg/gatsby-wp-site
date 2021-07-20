import React from "react"
import{ Link } from 'gatsby'
import {
  StyledImg,
  ImageBox,
  } from "./CallToAction.styles"

const CallToAction = ({ image, link, text }) => {
  return (
    <ImageBox>
      <StyledImg image={image} alt="Call-to-action Image" />
      <Link to={link}>
        <div className="text-box">
          <p className="text">{text}</p>
        </div>
      </Link>
    </ImageBox>
  )
}

export default CallToAction
