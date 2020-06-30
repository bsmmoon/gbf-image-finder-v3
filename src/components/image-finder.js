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
  
  submit() {
    this.props.updateData(this.state.data)
  }

  render() {
    return <div>
      <Form> 
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control type="text"
            name="id"
            onChange={this.handleChange.bind(this)}
          />
        </Form.Group>
      </Form>
      <Button onClick={this.submit.bind(this)}>Submit</Button>
      <br/>
    </div>
  }
}

export default ImageFinder

