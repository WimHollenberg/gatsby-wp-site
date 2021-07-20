import React from "react"
import { useQuoteQuery } from "../../hooks/useQuoteQuery"
import { Wrapper, Content } from "./Quote.styles"
import QuoteImg from "../../images/quote.svg"

const Quote = () => {
  const {
    wpPage: { ACF_HomePage: quote },
  } = useQuoteQuery()
  const author = quote.citat1Author
  const citation = quote.citat1Text

  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="quote" />
        <h3>{author}</h3>
        <p>{citation}</p>
      </Content>
    </Wrapper>
  )
}

export default Quote
