import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageFinder from "../components/image-finder"
import ImageLoader from "../components/image-loader"
import Debug from "../components/debug"

function Development(props) {
  const development = props.isDevelopment 
  if (development) {
    return <Debug />
  }
  return <span />
}

const IndexPage = () => (
  <Layout>
    <SEO />
    <ImageFinder />
    <ImageLoader />
    <Development isDevelopment={process.env.NODE_ENV == "development"}/>
  </Layout>
)

export default IndexPage

