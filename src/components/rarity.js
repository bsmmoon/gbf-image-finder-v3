import React from "react"
import { connect } from "react-redux"

import {
  handleChange,
} from "../helpers/search_helper"

import Form from "react-bootstrap/Form"

import Playable from "../content/playable.json"

import _ from "lodash"

const Rarity = ({
  dispatch,
  search,
}) => (
  <Form.Group>
    <Form.Control as="select"
      size="sm"
      name="category"
      defaultValue={search.category}
      onChange={handleChange.bind(this, dispatch, search)}
    >
      {
        _.map(
          _.keys(Playable), (category) => (
            <option>{category}</option>
          )
        )
      }
    </Form.Control>
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
}), null)(Rarity)

