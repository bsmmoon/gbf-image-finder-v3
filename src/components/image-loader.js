import React, { useState, useRef } from "react"
import { connect } from "react-redux"

import Spinner from "react-bootstrap/Spinner"
import Image from "react-bootstrap/Image"
import Overlay from "react-bootstrap/Overlay"
import Tooltip from "react-bootstrap/Tooltip"

import {
  setLoading,
  setNotFound
} from "../state/app"

import {
  clipboard
} from "../helpers/fontawesome"

import UrlBuilder from "../helpers/url-builder"

const copyToClipboard = (text) => {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

const ImageLoader = ({
  dispatch,
  loading,
  notFound,
  image
}) => {
  const url = UrlBuilder(image)
  const target = useRef(null)
  const [show, setShow] = useState(false)
  
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
    <div style={{fontSize: "8px"}}>
      <div hidden={!notFound}>Not Found!</div>
      <div hidden={loading} role="button" tabIndex={0}
        ref={target}
        className="float-right"
        onClick={() => {
          copyToClipboard(url)
          setShow(!show)
        }}
        onKeyUp={()=>{}}
      >{url}&nbsp;{clipboard()}</div>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Copied
          </Tooltip>
        )}
      </Overlay>
    </div>
  </div>
}

export default connect(state => ({
  loading: state.app.loading,
  notFound: state.app.notFound,
  image: state.app.image
}))(ImageLoader)

