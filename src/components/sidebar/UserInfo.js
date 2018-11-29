import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { UserType } from '../../store/types'
import Picture from '../Picture'

const Container = styled.div`
  text-align: center;
`

const propTypes = {
  ...UserType,
  children: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func,
  deleteItem: PropTypes.func
}

function UserInfo({
  email,
  fullname,
  picture,
  groups,
  children,
  toggleEdit,
  deleteItem
}) {
  return (
    <Container>
      <Picture src={picture} alt={`${fullname}'s portrait`} />
      <h3>{fullname}</h3>
      <p>{email}</p>
      <h4>Groups</h4>
      <p>{groups.join(', ')}</p>
      {children({
        action1Props: {
          onClick: toggleEdit,
          children: 'Edit'
        },
        action2Props: {
          onClick: deleteItem,
          children: 'Delete',
          danger: true
        }
      })}
    </Container>
  )
}
UserInfo.propTypes = propTypes

export default UserInfo
