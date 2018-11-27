import reducer from '../reducer'
import * as actions from '../actions'
import initialState from '../shape'

it('should works for reset action', () => {
  const state = {
    current: 'something',
    users: [{ id: '3093' }, { id: '45845' }, { id: 'askdjf' }],
    groups: [{ id: '3490d' }]
  }

  const result = reducer(state, actions.resetStore())
  expect(result).toEqual(initialState)
})

it('should set users', () => {
  const state = {
    current: 'something',
    users: [{ id: '3093' }, { id: '45845' }, { id: 'askdjf' }],
    groups: [{ id: '3490d' }]
  }

  const newUsers = [
    { id: '1', fullname: '1 w' },
    { id: '2', fullname: '2 w' },
    { id: '3', fullname: '3 w' }
  ]

  const result = reducer(state, actions.setUsers(newUsers))
  expect(result.users).toEqual(newUsers)
})

it('should set groups', () => {
  const state = {
    current: 'something',
    users: [{ id: '3093' }, { id: '45845' }, { id: 'askdjf' }],
    groups: [{ id: '3490d' }]
  }

  const newGroups = [
    { id: '1', name: 'group 1' },
    { id: '2', name: 'group 2' },
    { id: '3', name: 'group 3' }
  ]

  const result = reducer(state, actions.setGroups(newGroups))
  expect(result.groups).toEqual(newGroups)
})

it('should set activeItem', () => {
  const state = {
    current: 'something',
    activeItem: '',
    users: [{ id: '3093' }, { id: '45845' }, { id: 'askdjf' }],
    groups: [{ id: '3490d' }]
  }

  const result = reducer(state, actions.setActiveItem('3981029182'))
  expect(result.activeItem).toEqual('3981029182')
})
