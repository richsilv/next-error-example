import React from 'react'

export default class extends React.Component {
  alert () {
    window.alert('This works!')
  }

  render () {
    return (
      <p>
        <p>Click the button!</p>
        <button onClick={this.alert}>Click me</button>
      </p>
    )
  }
}
