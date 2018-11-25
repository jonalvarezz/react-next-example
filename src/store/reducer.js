import initialState from './shape'

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState

    default:
      return state
  }
}

export default reducer
