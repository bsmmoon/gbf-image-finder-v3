import React from "react"
import { connect } from "react-redux"

import {
  setSettings,
} from "../state/app"

import {
  toggleDialogue,
} from "../helpers/search-helper"

import Rarity from "./rarity"
import Character from "./character"
import CharacterId from "./character-id"
import Uncap from "./uncap"
import Tag from "./tag"
import TagInput from "./tag-input"
import Submit from "./submit"

import Form from "react-bootstrap/Form"

const ImageFinder = ({
  dispatch,
  search,
  settings,
}) => <div>
  <Form>
    <Form.Group>
      <Form.Check
        type="switch"
        label="Dialogue"
        id="dialogue"
        onClick={() => toggleDialogue(dispatch, search)}
      />
    </Form.Group>
    <Form.Group hidden={!search.dialogue}>
      <Form.Check
        type="switch"
        label="Search tag"
        id="search-tag"
        onClick={() => dispatch(setSettings({...settings, searchTag: !settings.searchTag}))}
      />
    </Form.Group>
    <Form.Group>
      <Form.Check
        type="switch"
        label="Search by ID"
        id="search-by-id"
        onClick={() => dispatch(setSettings({...settings, searchById: !settings.searchById}))}
      />
    </Form.Group>

    <div hidden={settings.searchById}>
      <Rarity />
      <Character />
    </div>

    <CharacterId />

    <Uncap />

    <div hidden={!search.dialogue}>
      <div hidden={settings.searchTag}><Tag /></div>

      <div hidden={!settings.searchTag}><TagInput /></div>
    </div>

    <Submit />
  </Form>
  <br/>
</div>

export default connect(state => ({
  search: state.app.search,
  settings: state.app.settings,
}), null) (ImageFinder)
