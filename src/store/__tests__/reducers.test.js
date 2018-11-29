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

it('should set current property', () => {
  const state = {
    current: 'something',
    users: [{ id: '3093' }, { id: '45845' }, { id: 'askdjf' }],
    groups: [{ id: '3490d' }]
  }

  const result = reducer(state, actions.setCurrent('groups'))
  expect(result.current).toEqual('groups')
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

it('should delete current item', () => {
  const state = {
    current: 'users',
    activeItem: '45845',
    users: [{ id: '3093' }, { id: '45845' }, { id: 'askdjf' }],
    groups: [{ id: '3490d' }]
  }
  expect(state.users.length).toEqual(3)

  const result = reducer(state, actions.deleteItem())
  expect(result.activeItem).toEqual('')
  expect(result.users.length).toEqual(2)
  expect(result.users).toEqual([{ id: '3093' }, { id: 'askdjf' }])
})

it('should delete item with given id', () => {
  const state = {
    current: 'users',
    activeItem: '45845',
    users: [{ id: '3093' }, { id: '45845' }, { id: 'askdjf' }],
    groups: [{ id: '3490d' }]
  }
  expect(state.users.length).toEqual(3)

  const result = reducer(state, actions.deleteItem({ id: 'askdjf' }))
  expect(result.activeItem).toEqual('')
  expect(result.users.length).toEqual(2)
  expect(result.users).toEqual([{ id: '3093' }, { id: '45845' }])
})

it('should update existing user', () => {
  const state = {
    current: 'users',
    activeItem: '3093',
    users: [{ id: '3093' }, { id: '45845' }, { id: 'askdjf' }],
    groups: [{ id: '3490d' }]
  }
  expect(state.users.length).toEqual(3)

  const result = reducer(
    state,
    actions.createOrUpdateItem({ id: '45845', fullname: 'John Doe' })
  )
  expect(result.activeItem).toEqual('')
  expect(result.users.length).toEqual(3)
  expect(result.users).toEqual([
    { id: '3093' },
    { id: '45845', fullname: 'John Doe' },
    { id: 'askdjf' }
  ])
})

it('should create new user', () => {
  const state = {
    current: 'users',
    activeItem: '',
    users: [{ id: '3093' }, { id: '45845' }, { id: 'askdjf' }],
    groups: [{ id: '3490d' }]
  }
  expect(state.users.length).toEqual(3)
  expect(state.users[0].id).toEqual('3093')

  const result = reducer(
    state,
    actions.createOrUpdateItem({ fullname: 'Diana Doe' })
  )
  expect(result.activeItem).toEqual('')
  expect(result.users.length).toEqual(4)
  expect(result.users[0].id).toBeTruthy()
  expect(result.users[0].fullname).toEqual('Diana Doe')
})
