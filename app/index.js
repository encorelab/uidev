import React, { Component } from 'react'
import { render } from 'react-dom'

import { createStore, bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'

const increment = () => ({ type: 'increment' })

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    default:
      return state
  }
}

const store = createStore(counter)

class Counter extends Component {
  render = () => <h1 onClick={ this.props.increment }>
    { this.props.counter }
  </h1>
}

const mapState = counter => ({ counter })
const mapDispatch = dispatch => bindActionCreators({ increment }, dispatch)

const CounterWrapper = connect(mapState, mapDispatch)(Counter)

render(
  <Provider store={ store }>
    <CounterWrapper />
  </Provider>,
document.getElementById('root'))
