import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CallToActionArea.styles"
import CallToAction from "../CallToAction/CallToAction"

const CallToActionArea = () => {
  const {
    cta: { ACF_HomePage: cta },
  } = useCTAAreaQuery()

  return (
    <Wrapper>
      {new Array(3).fill("").map((el, i) => (
        <CallToAction
          key={i}
          image={
            cta[`cta${i + 1}Image`].localFile.childImageSharp.gatsbyImageData
          }
          link={cta[`cta${i + 1}Link`]}
          text={cta[`cta${i + 1}Text`]}
        />
      ))}
    </Wrapper>
  )
}

export default CallToActionArea
