import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components';

const Container = styled.header`
  font-family: sans-serif;
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const Heading = styled.h1`
  margin: 0;
  color: tomato;
`
const HeadingLink = styled(Link)`
  color: tomato;
  text-decoration: none;
`


const Header2 = ({ siteTitle }) => (
  <Container>
    <Inner>
      <Heading>
        <HeadingLink to="/">
          {siteTitle}
        </HeadingLink>
      </Heading>
    </Inner>
  </Container>
)

Header2.propTypes = {
  siteTitle: PropTypes.string,
}

Header2.defaultProps = {
  siteTitle: ``,
}

export default Header2
