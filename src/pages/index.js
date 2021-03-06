import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageFinder from "../components/image-finder"
import ImageLoader from "../components/image-loader"
// import Debug from "../components/debug"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageFinder />
    <ImageLoader />
  </Layout>
)

export default IndexPage

