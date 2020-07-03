import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageFinder from "../components/image-finder"
import ImageLoader from "../components/image-loader"
import UrlBuilder from "../components/url-builder"

class IndexPage extends React.Component {
  state = {
    search: {
      id: "3040053000",
      category: "SSR",
      uncap: "01"
    }
  }

  updateSearch(search) {
    this.setState({ search })
  }

  render() {
    return <Layout>
      <SEO title="Home" />
      <div>
        <ImageFinder
          search={this.state.search} // remove this?
          updateSearch={this.updateSearch.bind(this)} />
        <ImageLoader url={UrlBuilder(this.state.search)} />
      </div>
    </Layout>
  }
}

export default IndexPage

