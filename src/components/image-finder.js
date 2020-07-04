import React from "react"
import { connect } from "react-redux"

import {
  setSearchById,
  setSearch,
  setImage
} from "../state/app"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

import Playable from "../content/playable.json"

import _ from "lodash"

// Set default values when category changes
const onCategoryChange = (search, value) => {
  switch (value) {
    case "R":
      search.id = "3020016000"
      break
    case "SR":
      search.id = "3030019000"
      break
    case "SSR":
      search.id = "3040040000"
      break
    default:
  }
  return search
}

const handleChange = (dispatch, search, event) => {
  search = JSON.parse(JSON.stringify(search))
  
  const name = event.target.name
  const value = event.target.value
  
  search[name] = value

  switch(name) {
    case "category":
      search = onCategoryChange(search, value)
      break
    default:
  }

  dispatch(setSearch(search))
}

const submit = (dispatch, search, event) => {
  event.preventDefault()
  dispatch(setImage(search))
}

const prevImage = (dispatch, search) => {
  let ids = _.keys(Playable[search.category])
  let id = ids[ids.indexOf(search.id) - 1]
  if (!!id) search.id = id
  dispatch(setSearch(search, { load: true }))
}

const nextImage = (dispatch, search) => {
  let ids = _.keys(Playable[search.category])
  let id = ids[ids.indexOf(search.id) + 1]
  if (!!id) search.id = id
  dispatch(setSearch(search, { load: true }))
}

const ImageFinder = ({
  dispatch,
  debug,
  search,
  searchById
}) => <div>
  <Form>
    <Form.Group>
      <Form.Check
        type="switch"
        id="manual"
        label="Search by ID"
        onClick={() => dispatch(setSearchById(!searchById))}
      />
    </Form.Group>

    <Form.Group>
      <Form.Control as="select"
        hidden={searchById}
        size="sm"
        name="category"
        defaultValue={search.category}
        onChange={handleChange.bind(this, dispatch, search)}
      >
        {
          _.map(
            _.keys(Playable), (category) => (
              <option>{category}</option>
            )
          )
        }
      </Form.Control>
    </Form.Group>
    
    <Form.Group>
      <InputGroup hidden={searchById}>
        <InputGroup.Prepend>
          <Button size="sm"
            onClick={() => prevImage(dispatch, search)}
          >{"<"}</Button>
        </InputGroup.Prepend>
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
        <InputGroup.Append>
          <Button size="sm"
            onClick={() => nextImage(dispatch, search)}
          >{">"}</Button>
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

    <Form.Group>
      <Form.Control as="select"
        size="sm"
        name="uncap"
        defaultValue={search.uncap}
        onChange={handleChange.bind(this, dispatch, search)}
      >
        <option value="01">★</option>
        <option value="02">★★★</option>
        <option value="03">★★★★★</option>
      </Form.Control>
    </Form.Group>

    <Form.Group>
      <Button
        type="submit"
        size="sm"
        onClick={submit.bind(this, dispatch, search)}
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
  searchById: state.app.searchById
}), null) (ImageFinder)
