import React from 'react'
import { Link } from 'gatsby'
import { useMenuQuery } from '../../hooks/useMenuQuery'
import Logo from '../../images/logo.svg'
import { Wrapper, Content } from './Header.styles'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  const data = useMenuQuery();

  const {site, menu} = data;

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} alt={site.siteMetadata.title} />
        </Link>
        <Navigation menu={menu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header
