import React from "react"
import { connect } from "react-redux"

import {
  handleChange,
  shiftTag,
} from "../helpers/search-helper"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

import Tags from "../content/tags.json"

import _ from "lodash"

const Character = ({
  dispatch,
  search,
}) => (
  <Form.Group>
    <InputGroup>
      <Form.Control as="select" 
        size="sm"
        name="tag"
        value={search.tag}
        onChange={handleChange.bind(this, dispatch, search)}
      >
        <option value="default">default</option>
        {
          _.map(Tags.list, (tag) => (
            <option value={tag}>
             {tag}
            </option>
          ))
        }
      </Form.Control>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftTag(dispatch, search, -1)}
        >&nbsp;{"<"}&nbsp;</Button>
      </InputGroup.Append>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftTag(dispatch, search, 1)}
        >&nbsp;{">"}&nbsp;</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
}), null)(Character)

