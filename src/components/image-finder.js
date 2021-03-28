import React from "react"
import { connect } from "react-redux"

import {
  toggleDialogue,
} from "../helpers/search-helper"

import Categories from "./categories"
import Character from "./character"
import CharacterId from "./character-id"
import Version from "./version"
import Tag from "./tag"
import TagInput from "./tag-input"
// import Submit from "./submit"

import Form from "react-bootstrap/Form"

const ImageFinder = ({
  dispatch,
  search,
  settings,
}) => <div>
  <Form>
    <Form.Group className="float-right">
      <Form.Check
        type="switch"
        label="Dialogue"
        id="dialogue"
        onClick={() => toggleDialogue(dispatch, search)}
      />
    </Form.Group>

    <div hidden={settings.searchById}>
      <Categories />
      <Character />
    </div>

    <div hidden={!settings.searchById}>
      <CharacterId />
    </div>
    
    <Version />

    <div hidden={!search.dialogue}>
      <div hidden={settings.searchTag}><Tag /></div>

      <div hidden={!settings.searchTag}><TagInput /></div>
    </div>

  </Form>
  <br/>
</div>

export default connect(state => ({
  search: state.app.search,
  settings: state.app.settings,
}), null) (ImageFinder)
