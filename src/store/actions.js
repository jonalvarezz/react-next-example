export const resetStore = () => ({ type: 'reset' })

export const setUsers = users => ({ type: 'set.users', payload: users })

export const setGroups = groups => ({ type: 'set.groups', payload: groups })
