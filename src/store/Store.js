import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { StoreType } from './types'
import initialState from './shape'
import reducer from './reducer'
import StoreContext from './context'

function Store({ initialState, children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
Store.propTypes = {
  initialState: StoreType,
  children: PropTypes.element
}
Store.defaultProps = {
  initialState
}

export default Store
