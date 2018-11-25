import React, { useReducer } from 'react'
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

export default Store
