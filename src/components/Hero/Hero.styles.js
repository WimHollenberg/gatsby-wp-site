import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image'

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  width: 100%;
`
export const Wrapper = styled.div`
  position: relative;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
`