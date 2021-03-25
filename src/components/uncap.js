import React from "react"
import { connect } from "react-redux"

import {
  setSearch,
} from "../state/app"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

const handleChange = (dispatch, search, event) => {
  search = JSON.parse(JSON.stringify(search))
  
  const name = event.target.name
  const value = event.target.value
  
  search[name] = value

  dispatch(setSearch(search))
}

const shiftUncap = (dispatch, search, shift) => {
  let uncaps = ["01", "02", "03"]
  let uncap = uncaps[uncaps.indexOf(search.uncap) + shift]
  if (!uncap) return

  search.uncap = uncap
  dispatch(setSearch(search, { load: true }))
}

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

