import React from "react"
import { connect } from "react-redux"

import {
  setSearchById,
  setState,
} from "../state/app"

import {
  handleChange,
  shiftImage,
  submit,
} from "../helpers/search_helper"

import Rarity from "./rarity"
import Uncap from "./uncap"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

import Playable from "../content/playable.json"

import _ from "lodash"

const ImageFinder = ({
  dispatch,
  debug,
  dialogue,
  search,
  image,
  searchById
}) => <div>
  <Form>
    <Form.Group>
      <Form.Check
        type="switch"
        id="dialogue"
        label="Dialogue"
        onClick={() => dispatch(setState({dialogue: !dialogue}))}
      />
    </Form.Group>
    <Form.Group>
      <Form.Check
        type="switch"
        id="manual"
        label="Search by ID"
        onClick={() => dispatch(setSearchById(!searchById))}
      />
    </Form.Group>

    <div hidden={searchById}><Rarity /></div>
    
    <Form.Group>
      <InputGroup hidden={searchById}>
        <Form.Control as="select" 
          size="sm"
          name="id"
          value={search.id}
          onChange={handleChange.bind(this, dispatch, search)}
        >
          {
            _.map(
              _.keys(Playable[search.category]), (id) => (
                <option value={id}>
                 {Playable[search.category][id]}
                </option>
              )
            )
          }
        </Form.Control>
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

    <Uncap />

    <div hidden={dialogue}>
    </div>

    <Form.Group>
      <Button block
        type="submit"
        size="sm"
        onClick={submit.bind(this, dispatch, search, image)}
      >
        Submit
      </Button>
    </Form.Group>
  </Form>
  <br/>
</div>

export default connect(state => ({
  debug: state.app.debug,
  search: state.app.search,
  image: state.app.image,
  searchById: state.app.searchById,
  dialogue: state.app.dialogue,
}), null) (ImageFinder)
