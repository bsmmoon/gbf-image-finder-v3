import React from "react"
import { connect } from "react-redux"

import {
  setSearchById,
  setState,
} from "../state/app"

import Rarity from "./rarity"
import Character from "./character"
import CharacterId from "./character-id"
import Uncap from "./uncap"
import Submit from "./submit"

import Form from "react-bootstrap/Form"

const ImageFinder = ({
  dispatch,
  dialogue,
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

    <Submit />
  </Form>
  <br/>
</div>

export default connect(state => ({
  searchById: state.app.searchById,
  dialogue: state.app.dialogue,
}), null) (ImageFinder)
