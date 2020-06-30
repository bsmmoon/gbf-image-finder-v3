import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageFinder from "../components/image-finder"
import ImageLoader from "../components/image-loader"
import UrlBuilder from "../components/url-builder"

// import Data from "../content/data.json"


class IndexPage extends React.Component {
  state = {
    data: {
      id: "3040053000"
    }
  }

  updateData(data) {
    this.setState({ data: JSON.parse(JSON.stringify(data)) })
  }

  render() {
    return <Layout>
      <SEO title="Home" />
      <div>
        <ImageFinder
          data={this.state.data}
          updateData={this.updateData.bind(this)} />
        <ImageLoader url={UrlBuilder(this.state.data)} />
      </div>
    </Layout>
  }
}

export default IndexPage

