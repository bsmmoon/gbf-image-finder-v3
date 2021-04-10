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
  url,
  source,
}) => {
  const target = useRef(null)
  const [show, setShow] = useState(false)
  
  return <div>
    <Image
      alt=""
      src={source}
      onLoad={() => dispatch(setLoading(false))}
      onError={() => dispatch(setNotFound(true))}
    />
    <Spinner
      hidden={!loading}
      className="float-right"
      animation="border"
      size="sm"
    >
      <span className="sr-only"/>
    </Spinner>
    <div className="float-right">
      <div hidden={!notFound}>Not Found!</div>
      <div hidden={notFound || loading}
        role="button" tabIndex={0}
        ref={target}
        onClick={() => {
          copyToClipboard(url)
          setShow(!show)
        }}
        onKeyUp={()=>{}}
      >Copy URL&nbsp;{clipboard()}</div>
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
  url: state.app.url,
  source: state.app.source,
}))(ImageLoader)

