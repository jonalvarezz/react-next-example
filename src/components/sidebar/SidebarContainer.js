import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { UserType, GroupType } from '../../store/types'
import UserInfo from './UserInfo'
import GroupInfo from './GroupInfo'
import Button from '../Button'

const Footer = styled.footer`
  text-align: center;
  margin-top: 10px;
`

const propTypes = {
  current: PropTypes.oneOf(['users', 'groups']),
  itemData: PropTypes.oneOfType([
    PropTypes.shape(UserType),
    PropTypes.shape(GroupType)
  ])
}

function SidebarContainer({ current, itemData }) {
  const Component = current === 'users' ? UserInfo : GroupInfo
  return (
    <div>
      <Component {...itemData} />
      <Footer>
        <Button>Edit</Button> <Button danger>Delete</Button>
      </Footer>
    </div>
  )
}
SidebarContainer.propTypes = propTypes

export default SidebarContainer
