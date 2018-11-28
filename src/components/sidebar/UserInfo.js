import React from 'react'
import styled from 'styled-components'
import { UserType } from '../../store/types'
import Picture from '../Picture'
import Button from '../Button'

const Container = styled.div`
  text-align: center;
`

function UserInfo({ email, fullname, picture, groups }) {
  return (
    <Container>
      <Picture src={picture} alt={`${fullname}'s portrait`} />
      <h3>{fullname}</h3>
      <p>{email}</p>
      <h4>Groups</h4>
      <p>{groups.join(', ')}</p>
      <Button>Edit</Button> <Button danger>Delete</Button>
    </Container>
  )
}
UserInfo.propTypes = UserType

export default UserInfo
