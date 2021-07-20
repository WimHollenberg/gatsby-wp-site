import React from 'react'
import { Link } from 'gatsby'
import { useMenuQuery } from '../../hooks/useMenuQuery'

import InvertedLogo from "../../images/logo-inverted.svg"
import CloseButton from "../../images/close-btn.svg"

import { Overlay } from './OverlayMenu.styles'


const OverlayMenu = ({ menuOpen, callback}) => {
  const { menu } = useMenuQuery();

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img src={InvertedLogo} alt="logo" className="invertedLogo" />
        <ul className="overlayMenu">
          {menu.menuItems.nodes.map(item =>
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeClassName="overlayActive">
                  {item.label}
                </Link>
              </li>
            ) : (
              null
            )
          )}
        </ul>
        <div
          className="closeButton"
          onClick={callback} onKeyDown={callback}
          role="button"
          tabIndex="0"
        >
          <img src={CloseButton} alt="Close overlay" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
