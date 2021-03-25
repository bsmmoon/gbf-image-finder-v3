import React from "react"
import { connect } from "react-redux"

import {
  submit,
} from "../helpers/search_helper"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Submit = ({
  dispatch,
  search,
  image,
}) => (
  <Form.Group>
    <Button block
      type="submit"
      size="sm"
      onClick={submit.bind(this, dispatch, search, image)}
    >
      Submit
    </Button>
  </Form.Group>
)

export default connect(state => ({
  search: state.app.search,
  image: state.app.image,
}), null)(Submit)

