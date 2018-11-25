import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StoreType } from './types'
import initialState from './shape'
import reducer from './reducer'
import * as actions from './actions'
import StoreContext from './context'
import { fetchData } from './api'

function Store({ initialState, children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Use effect to pull data and setup the store
  // Note that we are passing an Array as second paramenter to tell
  // React only fire the effect on mount
  useEffect(() => {
    fetchData().then(({ users, groups }) => {
      console.log('Setting up store...')
      dispatch(actions.setUsers(users))
      dispatch(actions.setGroups(groups))
    })
  }, [])

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
