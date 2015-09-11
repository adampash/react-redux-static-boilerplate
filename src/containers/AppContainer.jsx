import React from 'react'
import { connect, dispatch } from 'react-redux'
import DumbComponent from '../components/DumbComponent.jsx'
import { test } from '../actions/example'


let AppContainer = React.createClass({
  render() {
    const { dispatch, foo } = this.props
    return(
      <div>
        <DumbComponent foo={foo} test={(text='hi') => dispatch(test(text))} />
      </div>
    )
  }
})

function select(state) {
  return {foo: state.foo}
}

export default connect(select)(AppContainer)
