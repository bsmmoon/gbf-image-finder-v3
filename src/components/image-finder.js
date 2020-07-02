import React from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import Playable from "../content/playable.json"

import _ from "lodash"

class ImageFinder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: {
        category: "SSR",
        id: "3040053000"
      }
    }
  }

  // Set default values when category changes
  onCategoryChange(search, value) {
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

  handleChange(event) {
    let search = JSON.parse(JSON.stringify(this.state.search))
    
    const name = event.target.name
    const value = event.target.value
    
    search[name] = value

    switch(name) {
      case "category":
        search = this.onCategoryChange(search, value)
        break
      default:
    }

    this.setState({
      search
    })
  }
  
  submit(event) {
    event.preventDefault()
    this.props.updateSearch(this.state.search)
  }

  render() {
    const search = JSON.parse(JSON.stringify(this.state.search))

    return <div>
      {JSON.stringify(this.state)} <br/><br />
      {JSON.stringify(Playable)} <br /><br />
      {JSON.stringify(Playable[search.category])}
      <Form> 
        <Form.Group>
          <Form.Control as="select"
            size="sm"
            name="category"
            defaultValue={search.category}
            onChange={this.handleChange.bind(this)}
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
          <Form.Control as="select"
            size="sm"
            name="id"
            defaultValue={search.id}
            onChange={this.handleChange.bind(this)}
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
        </Form.Group>
        <Form.Group>
          <Form.Control type="text"
            size="sm"
            name="id"
            placeholder="ID (ex. 3040053000)"
            value={this.state.search.id}
            onChange={this.handleChange.bind(this)}
          />
        </Form.Group>
        <Button
          type="submit"
          size="sm"
          onClick={this.submit.bind(this)}>
          Submit
        </Button>
      </Form>
      <br/>
    </div>
  }
}

export default ImageFinder

