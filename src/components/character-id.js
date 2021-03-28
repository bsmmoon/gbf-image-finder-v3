import React from "react"
import { connect } from "react-redux"

import {
  handleChange,
} from "../helpers/search-helper"

import Form from "react-bootstrap/Form"

const CharacterId = ({
  dispatch,
  search,
}) => (
  <Form.Group>
    <Form.Control type="text"
      size="sm"
      name="id"
      placeholder="ID (ex. 3040053000)"
      value={search.id}
      onChange={handleChange.bind(this, dispatch, search)}
    />
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
}), null)(CharacterId)

