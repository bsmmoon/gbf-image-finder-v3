import React from "react"
import { connect } from "react-redux"

import {
  handleChange,
} from "../helpers/search-helper"

import {
  categories,
} from "../helpers/data"

import Form from "react-bootstrap/Form"

import _ from "lodash"

const Categories = ({
  dispatch,
  search,
}) => (
  <Form.Group>
    <Form.Control as="select"
      size="sm"
      name="category"
      defaultValue={search.category}
      onChange={handleChange.bind(this, dispatch, search)}
    >{
      _.map(categories, category => <option key={category}>{category}</option>)
    }
    </Form.Control>
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
}), null)(Categories)

