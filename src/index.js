import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducers, initialState } from './store/reducers'
import RandomQuotes from './components/RandomQuotes'

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <RandomQuotes/>
  </Provider>,
  document.getElementById('root')
);