import React, { Component } from 'react'
import Routes from './Routes'
import { Provider } from 'react-redux'
import promise from 'redux-promise-middleware'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import './App.css'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, promise())(createStore)
)
class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Routes />
      </Provider>
    )
  }
}

export default App
