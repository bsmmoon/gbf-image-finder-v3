import React from "react"
import { connect } from "react-redux"

import UrlBuilder from "../components/url-builder"

const ImageLoader = ({ image }) => {
  const url = UrlBuilder(image)
  return <div>
    <img alt="" src={url} />
    {url}
  </div>
}

export default connect(state => ({
  image: state.app.image
}))(ImageLoader)

