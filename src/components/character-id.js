import React from "react"
import { connect } from "react-redux"

import {
  setSettings,
} from "../state/app"

import {
  handleChange,
  shiftImageId,
} from "../helpers/search-helper"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

const CharacterId = ({
  dispatch,
  search,
  settings,
}) => (
  <Form.Group>
    <InputGroup>
      <Form.Control type="text"
        size="sm"
        name="id"
        placeholder="ID (ex. 3040053000)"
        value={search.id}
        onChange={handleChange.bind(this, dispatch, search)}
      />
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => dispatch(setSettings({...settings, searchById: !settings.searchById}))}
        >&nbsp;*&nbsp;</Button>
      </InputGroup.Append>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftImageId(dispatch, search, -1000)}
        >&nbsp;{"<"}&nbsp;</Button>
      </InputGroup.Append>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftImageId(dispatch, search, 1000)}
        >&nbsp;{">"}&nbsp;</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
  settings: state.app.settings,
}), null)(CharacterId)

