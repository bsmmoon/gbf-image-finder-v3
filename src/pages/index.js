import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "react-bootstrap/Button"

import ImageLoader from "../components/image-loader"
import UrlBuilder from "../components/url-builder"

// import Data from "../content/data.json"


const IndexPage = () => {
  return <Layout>
    <SEO title="Home" />
    <Button>HI</Button>
    <div>
      <ImageLoader url={UrlBuilder({
        id: "3040053000"
      })} />
    </div>
  </Layout>
}

export default IndexPage

