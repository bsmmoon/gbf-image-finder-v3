import React from "react"

import Button from "react-bootstrap/Button"

const About = () => (
  <Button
    className="float-right"
    size="sm"
    variant="outline-primary"
    onClick={() => { window.open(process.env.ABOUT, "_blank") }}
  >About</Button>
)

export default About
