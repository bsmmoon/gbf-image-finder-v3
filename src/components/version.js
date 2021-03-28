import React from "react"
import { connect } from "react-redux"

import {
  handleChange,
  shiftVersion,
} from "../helpers/search-helper"

import {
  versions,
} from "../helpers/data"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

import _ from "lodash"

const Uncap = ({
  dispatch,
  search,
}) => (
  <Form.Group>
    <InputGroup>
      <Form.Control as="select"
        size="sm"
        name="version"
        value={search.version}
        onChange={handleChange.bind(this, dispatch, search)}
      >{_.map(versions, (version) =>
        <option value={version.value}
          >{version.label}</option>)
      }</Form.Control>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftVersion(dispatch, search, -1)}
        >&nbsp;{"<"}&nbsp;</Button>
      </InputGroup.Append>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftVersion(dispatch, search, 1)}
        >&nbsp;{">"}&nbsp;</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
}), null)(Uncap)

