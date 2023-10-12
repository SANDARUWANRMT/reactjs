import React, { Component } from 'react'

export default class MainComponent extends Component {

    constructor(props) {
    super(props);
    this.state = {
        name : 'Tharindu',
        lname : 'Sandaruwan'
    }

}
changeName = () => {
    this.setState(
        {
            name : '',
            lname : 'React'
        }
    )
    }
redo = () => {
  this.setState(
  {
    name : 'Tharindu',
    lname : 'Sandaruwan'
  }
  )
}

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}  {this.state.lname} </h1>
        <h3> {`Hello ${this.state.name} ${this.state.lname}`} </h3>
        <button onClick={this.changeName}>Change Name</button>
        <br />
        <button onClick={this.redo}>Redo</button>
      </div>
    )
  }
}
