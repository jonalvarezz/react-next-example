import initialState from './shape'

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState

    case 'set.users':
      return { ...state, users: action.payload }

    case 'set.groups':
      return { ...state, groups: action.payload }

    default:
      return state
  }
}

export default reducer
