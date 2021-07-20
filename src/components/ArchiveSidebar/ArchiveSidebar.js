import React from 'react'
import { Link } from 'gatsby'
import { Wrapper, Menu } from './ArchiveSidebar.styles'
import PageIcon from '../../images/page-icon.svg'

const ArchiveSidebar = ({ catId, categories }) => {
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === "all-posts") return -1
    if (y.node.slug === "all-posts") return 1
    return 0
  })

  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="Header of Archive" />
          <span>Posts</span>
        </li>
        {sortedCategories.map(cat => {
          //do not show categories without posts
          if(cat.node.count !== 0) {
            return cat.node.slug !== 'uncategorized' ? (
              <li key={cat.node.id}>
                <span className="count">{cat.node.count}</span>
                <Link to={cat.node.uri} activeClassName="sidebar-highlighted">
                  <span dangerouslySetInnerHTML={{__html: cat.node.name}}></span>
                </Link>
              </li>
            ) : null
          }
          return null
        })}
      </Menu>
    </Wrapper>
  )
}

export default ArchiveSidebar
