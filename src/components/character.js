import React from "react"
import { connect } from "react-redux"

import {
  setSettings,
} from "../state/app"

import {
  handleChange,
  shiftImage,
} from "../helpers/search-helper"

import {
  edit
} from "../helpers/fontawesome"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

import Characters from "../content/characters.json"

import _ from "lodash"

const Character = ({
  dispatch,
  search,
  settings,
}) => (
  <Form.Group>
    <InputGroup>
      <Form.Control as="select" 
        size="sm"
        name="id"
        value={search.id}
        onChange={handleChange.bind(this, dispatch, search)}
      >
        {
          _.map(
            _.keys(Characters[search.category]), (id) => (
              <option value={id}>
               {Characters[search.category][id]}
              </option>
            )
          )
        }
      </Form.Control>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          style={{color: "white"}}
          onClick={() => dispatch(setSettings({...settings, searchById: !settings.searchById}))}
        >&nbsp;{edit}&nbsp;</Button>
      </InputGroup.Append>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftImage(dispatch, search, -1)}
        >&nbsp;{"<"}&nbsp;</Button>
      </InputGroup.Append>
      &nbsp;
      <InputGroup.Append>
        <Button size="sm"
          onClick={() => shiftImage(dispatch, search, 1)}
        >&nbsp;{">"}&nbsp;</Button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
  settings: state.app.settings,
}), null)(Character)

