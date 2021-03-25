import React from "react"
import { connect } from "react-redux"

import Spinner from "react-bootstrap/Spinner"
import Image from "react-bootstrap/Image"

import {
  setLoading,
  setNotFound
} from "../state/app"

import UrlBuilder from "../helpers/url-builder"

const ImageLoader = ({
  dispatch,
  loading,
  notFound,
  image
}) => {
  const url = UrlBuilder(image)
  return <div>
    <Image
      alt=""
      src={url}
      onLoad={() => dispatch(setLoading(false))}
      onError={() => dispatch(setNotFound(true))}
    />
    <Spinner
      hidden={!loading}
      animation="border"
      size="sm"
    >
      <span className="sr-only"/>
    </Spinner>
    <div hidden={!notFound}>Not Found!</div>
    <div hidden={loading}>{url}</div>
  </div>
}

export default connect(state => ({
  loading: state.app.loading,
  notFound: state.app.notFound,
  image: state.app.image
}))(ImageLoader)

