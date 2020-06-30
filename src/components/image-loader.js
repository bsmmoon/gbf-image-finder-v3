import React from "react"

const ImageLoader = ({ url }) => {
  return <div>
    <img alt="" src={url} />
    {url}
  </div>
}

export default ImageLoader

