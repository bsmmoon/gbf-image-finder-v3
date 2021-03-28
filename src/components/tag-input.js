import React from "react"
import { connect } from "react-redux"

import {
  setSettings,
} from "../state/app"

import {
  handleChange,
} from "../helpers/search-helper"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

const TagInput = ({
  dispatch,
  search,
  settings,
}) => (
  <Form.Group>
    <InputGroup>
      <Form.Control type="text"
        disabled={!settings.searchTag}
        size="sm"
        name="tag"
        placeholder="Tag (ex. laugh)"
        value={search.tag}
        onChange={handleChange.bind(this, dispatch, search)}
      />
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => dispatch(setSettings({...settings, searchTag: !settings.searchTag}))}
        >&nbsp;*&nbsp;</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
  settings: state.app.settings,
}), null)(TagInput)

