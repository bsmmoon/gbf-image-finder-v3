import React from "react"
import { connect } from "react-redux"

import { setDebug } from "../state/app"

import Button from "react-bootstrap/Button"

const Debug = ({ dispatch, state }) => (
  <div>
    <Button size="sm" onClick={() => dispatch(setDebug(!state.debug))}>Debug</Button>
    <br/>
    <div hidden={!state.debug}>
      <pre>{format(state)}</pre>
    </div>
    <br/>
  </div>
)

const format = (state) => {
  return JSON.stringify(state, null, 2)
}

export default connect(state => ({
  state: {
    debug: state.app.debug,
    searchById: state.app.searchById,
    loading: state.app.loading,
    notFound: state.app.notFound,
    search: state.app.search,
    image: state.app.image,
  }
}))(Debug)
