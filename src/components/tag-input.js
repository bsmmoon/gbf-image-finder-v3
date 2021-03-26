import React from "react"
import { connect } from "react-redux"

import {
  handleChange,
} from "../helpers/search-helper"

import Form from "react-bootstrap/Form"

const TagInput = ({
  dispatch,
  search,
  settings,
}) => (
  <Form.Group>
    <Form.Control type="text"
      disabled={!settings.searchTag}
      size="sm"
      name="tag"
      placeholder="Tag (ex. laugh)"
      value={search.tag}
      onChange={handleChange.bind(this, dispatch, search)}
    />
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
  settings: state.app.settings,
}), null)(TagInput)

