import { useStaticQuery, graphql } from "gatsby"

export const useLatestBlogQuery = () => {
  const data = useStaticQuery(graphql`
    query LatestBlog {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            excerpt
            uri
          }
        }
      }
    }
  `)
  return data
}