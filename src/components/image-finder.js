import React from "react"
import { connect } from "react-redux"

import {
  setSearchById,
  setState,
} from "../state/app"

import {
  submit,
} from "../helpers/search_helper"

import Rarity from "./rarity"
import Character from "./character"
import CharacterId from "./character_id"
import Uncap from "./uncap"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

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

    <div hidden={searchById}>
      <Rarity />
      <Character />
    </div>

    <CharacterId />

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
