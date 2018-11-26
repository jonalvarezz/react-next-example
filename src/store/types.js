import PropTypes from 'prop-types'

export const UserType = {
  id: PropTypes.string,
  index: PropTypes.number,
  fullname: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.string,
  groups: PropTypes.arrayOf(PropTypes.string)
}

export const GroupType = {
  id: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string
}

export const StoreType = {
  current: PropTypes.oneOf(['users', 'groups']),
  users: PropTypes.arrayOf(PropTypes.shape(UserType)),
  groups: PropTypes.arrayOf(PropTypes.shape(GroupType))
}
