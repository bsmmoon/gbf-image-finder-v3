import React from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

class ImageFinder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: props.search
    }
  }

  handleChange(event) {
    let search =  JSON.parse(JSON.stringify(this.state.search))
    search[event.target.name] = event.target.value
    this.setState({
      search
    })
  }
  
  submit(event) {
    event.preventDefault()
    this.props.updateSearch(this.state.search)
  }

  render() {
    return <div>
      <Form> 
        <Form.Group>
          <Form.Control
            type="text"
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

