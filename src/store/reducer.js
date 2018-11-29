import initialState from './shape'

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState

    case 'set.users':
      return { ...state, users: action.payload }

    case 'set.groups':
      return { ...state, groups: action.payload }

    case 'set.activeItem':
      return { ...state, activeItem: action.payload }

    case 'deleteItem': {
      let id = ''

      const payload = action.payload || {}
      // Support receiving id to delete in the payload
      if (payload.hasOwnProperty('id') && payload.id) {
        id = payload.id
      }
      // Otherwise delete current item
      else {
        id = state.activeItem
      }

      const current = state.current
      const newState = {
        ...state,
        activeItem: '', // Reset
        [current]: state[current].filter(item => item.id !== id)
      }

      return newState
    }

    default:
      return state
  }
}

export default reducer
