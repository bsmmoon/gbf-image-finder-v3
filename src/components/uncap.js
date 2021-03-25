import React from "react"
import { connect } from "react-redux"

import {
  handleChange,
  shiftUncap,
} from "../helpers/search-helper"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

const Uncap = ({
  dispatch,
  search,
}) => (
  <Form.Group>
    <InputGroup>
      <Form.Control as="select"
        size="sm"
        name="uncap"
        value={search.uncap}
        onChange={handleChange.bind(this, dispatch, search)}
      >
        <option value="01">★</option>
        <option value="02">★★★</option>
        <option value="03">★★★★★</option>
      </Form.Control>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftUncap(dispatch, search, -1)}
        >&nbsp;{"<"}&nbsp;</Button>
      </InputGroup.Append>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftUncap(dispatch, search, 1)}
        >&nbsp;{">"}&nbsp;</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
}), null)(Uncap)

