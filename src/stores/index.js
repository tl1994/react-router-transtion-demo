import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import rootReducers from '../reducers'
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
const store = createStore(
  combineReducers(rootReducers),
  applyMiddleware(...middleware)
)
export default store