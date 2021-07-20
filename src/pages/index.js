import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import CallToActionArea from "../components/CallToActionArea/CallToActionArea"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Quote from "../components/Quote/Quote" 
import About from "../components/About/About"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CallToActionArea />
    <LatestBlogPost />
    <Quote />
    <About />
  </Layout>
)

export default HomePage
 