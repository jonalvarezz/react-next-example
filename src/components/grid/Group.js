import React from 'react'
import { GroupType } from '../../store/types'

function Group({ name }) {
  return <div>{name}</div>
}
Group.propType = GroupType

export default Group
