import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from './Pagination.styles'

const Pagination = ({ catUri, page, totalPages}) => {
  return (
    <>
      <h2>
        Page {page} of {totalPages}
      </h2>
      <Wrapper isFirst={page === 1}>
        {/* Previous page btn */}
        {/* if page nr equals 2, the back link directs to the first page, which is just ${catUri};
        otherwise the back link directs to the current page nr minus 1 */}
        {page > 1 ? (
          <Link to={`${catUri}${page === 2 ? "" : page - 1}`} className="back">
            Previous page
          </Link>
        ) : null}

        {/* Next page btn */}
        {page < totalPages ? (
          <Link to={`${catUri}${page + 1}`} className="forward">
            Next page
          </Link>

        ) : null}
      </Wrapper>
    </>
  )
}

export default Pagination
