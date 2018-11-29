import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { UserType, GroupType } from '../../store/types'
import UserInfo from './UserInfo'
import UserForm from './UserForm'
import GroupInfo from './GroupInfo'
import Button from '../Button'

const Footer = styled.footer`
  text-align: center;
  margin-top: 10px;
`

const propTypes = {
  current: PropTypes.oneOf(['users', 'groups']),
  allGroups: PropTypes.arrayOf(PropTypes.shape(GroupType)),
  createNew: PropTypes.func,
  closeSidebar: PropTypes.func,
  itemData: PropTypes.oneOfType([
    PropTypes.shape(UserType),
    PropTypes.shape(GroupType)
  ])
}

function SidebarContainer({
  current,
  itemData,
  createNew,
  closeSidebar,
  allGroups
}) {
  const [isEditing, setEdit] = useState(false)
  const toggleEdit = () => setEdit(!isEditing)

  let Component = null
  if (current === 'users') {
    Component = isEditing ? UserForm : UserInfo
  } else {
    Component = isEditing ? UserForm : GroupInfo
  }

  return (
    <div>
      <Component
        {...itemData}
        allGroups={allGroups}
        createNew={createNew}
        toggleEdit={toggleEdit}
        cancel={closeSidebar}
      >
        {({ action1Props, action2Props }) => (
          <Footer>
            <Button {...action1Props} /> <Button {...action2Props} />
          </Footer>
        )}
      </Component>
    </div>
  )
}
SidebarContainer.propTypes = propTypes

export default SidebarContainer
