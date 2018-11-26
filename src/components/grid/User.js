import React from 'react'
import styled from 'styled-components'
import { UserType } from '../../store/types'

const Picture = styled.img`
  width: 128px;
  height: auto;
  border-radius: 50%;
`

const Name = styled.figcaption`
  font-weight: bold;
  font-size: 1.1rem;
`

function User({ fullname, picture }) {
  return (
    <div>
      <figure>
        <Picture src={picture} alt={`${fullname}'s Portrait`} />
        <Name>{fullname}</Name>
      </figure>
    </div>
  )
}
User.propTypes = UserType

export default User
