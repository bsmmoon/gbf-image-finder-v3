import React from "react"
import { connect } from "react-redux"

import { setDebug } from "../state/app"

import Button from "react-bootstrap/Button"

const Debug = ({
  dispatch,
  debug,
  searchById,
  search,
  image,
}) => (
  <div>
    <Button size="sm" onClick={() => dispatch(setDebug(!debug))}>Debug</Button>
    <br/>
    <div hidden={!debug}>
      {
        JSON.stringify({
          debug,
          searchById,
          search,
          image
        })
      }
    </div>
    <br/>
  </div>
)

export default connect(state => ({
  debug: state.app.debug,
  searchById: state.app.searchById,
  search: state.app.search,
  image: state.app.image,
}))(Debug)
