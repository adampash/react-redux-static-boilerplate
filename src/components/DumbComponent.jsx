import React from 'react'
import '../stylesheets/DumbComponent.scss'

let DumbComponent
export default DumbComponent = React.createClass({
  handleClick(e) {
    this.props.test('oh hi')
  },
  render() {
    return(
      <div onClick={this.handleClick} className="dummy" style={styles.dummy} >
        Hello world {this.props.foo}
      </div>
    )
  }
})

let styles = {
  dummy: {
    fontSize: 30,
    cursor: 'pointer',
  },
}
