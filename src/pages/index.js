import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "react-bootstrap/Button"

import ImageLoader from "../components/image-loader"
// import Data from "../content/data.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button>HI</Button>
    <div>
      <ImageLoader props={{
        id: "3040053000"
      }} />
    </div>
  </Layout>
)

export default IndexPage

