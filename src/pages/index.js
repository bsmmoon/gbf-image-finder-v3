import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "react-bootstrap/Button"

import ImageLoader from "../components/image-loader"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button>HI</Button>
    <div>
      <ImageLoader />
    </div>
  </Layout>
)

export default IndexPage

