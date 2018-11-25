import PropTypes from 'prop-types'

export const UserType = PropTypes.shape({
  id: PropTypes.string,
  index: PropTypes.number,
  fullname: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.string,
  groups: PropTypes.arrayOf(PropTypes.string)
})

export const GroupType = PropTypes.shape({
  id: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string
})

export const StoreType = PropTypes.shape({
  current: PropTypes.oneOf(['users', 'groups']),
  users: PropTypes.arrayOf(UserType),
  groups: PropTypes.arrayOf(GroupType)
})
