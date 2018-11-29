import initialState from './shape'

const deleteItem = (state, payload = {}) => {
  let id = ''

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

const createOrUpdate = (state, payload = {}) => {
  const current = state.current
  const collection = state[current]
  let newCollection = []

  // Update
  if (payload.hasOwnProperty('id')) {
    newCollection = collection.map(data => {
      if (data.id !== payload.id) return data
      return { ...data, ...payload }
    })
  }
  // New
  else {
    newCollection = [{ id: new Date().getTime(), ...payload }, ...collection]
  }

  const newState = {
    ...state,
    activeItem: '', // Reset
    [current]: newCollection
  }

  return newState
}

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

    case 'deleteItem':
      return deleteItem(state, action.payload)

    case 'createOrUpdateItem':
      return createOrUpdate(state, action.payload)

    default:
      return state
  }
}

export default reducer
