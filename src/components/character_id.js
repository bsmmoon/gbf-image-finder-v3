import React from "react"
import { connect } from "react-redux"

import {
  handleChange,
} from "../helpers/search_helper"

import Form from "react-bootstrap/Form"

const CharacterId = ({
  dispatch,
  search,
  searchById,
}) => (
  <Form.Group>
    <Form.Control type="text"
      disabled={!searchById}
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
  searchById: state.app.searchById,
}), null)(CharacterId)

