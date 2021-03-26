import React from "react"
import { connect } from "react-redux"

import {
  setSearchById,
} from "../state/app"

import {
  toggleDialogue,
} from "../helpers/search-helper"

import Rarity from "./rarity"
import Character from "./character"
import CharacterId from "./character-id"
import Uncap from "./uncap"
import Submit from "./submit"

import Form from "react-bootstrap/Form"

const ImageFinder = ({
  dispatch,
  search,
  searchById
}) => <div>
  <Form>
    <Form.Group>
      <Form.Check
        type="switch"
        id="dialogue"
        label="Dialogue"
        onClick={() => {
          dispatch(toggleDialogue(dispatch, search))
        }}
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

    <div hidden={search.dialogue}>
    </div>

    <Submit />
  </Form>
  <br/>
</div>

export default connect(state => ({
  searchById: state.app.searchById,
  search: state.app.search,
}), null) (ImageFinder)
