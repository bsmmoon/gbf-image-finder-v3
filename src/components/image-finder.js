import React from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

class ImageFinder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data
    }
  }

  handleChange(event) {
    let data =  JSON.parse(JSON.stringify(this.state.data))
    data[event.target.name] = event.target.value
    this.setState({
      data: data
    })
  }
  
  submit(event) {
    event.preventDefault()
    this.props.updateData(this.state.data)
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
            value={this.state.data.id}
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

