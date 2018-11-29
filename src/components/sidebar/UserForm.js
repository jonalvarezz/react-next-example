import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { UserType } from '../../store/types'
import { Input } from '../form'
import Picture from '../Picture'

const Form = styled.form`
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
`

const propTypes = {
  ...UserType,
  children: PropTypes.func.isRequired,
  createNew: PropTypes.func,
  cancel: PropTypes.func
}

function UserForm({
  email,
  fullname,
  picture,
  groups,
  children,
  createNew,
  cancel
}) {
  return (
    <Form onSubmit={createNew}>
      <Picture src={picture} alt={`${fullname}'s portrait`} />
      <p>
        <Input placeholder="Fullname" defaultValue={fullname} />
      </p>
      <p>
        <Input placeholder="Email" defaultValue={email} type="email" required />
      </p>
      <h4>Groups</h4>
      <p>{groups.join(', ')}</p>
      {children({
        action1Props: {
          children: 'Save',
          type: 'submit'
        },
        action2Props: {
          onClick: cancel,
          danger: false,
          ghost: true,
          children: 'Cancel'
        }
      })}
    </Form>
  )
}
UserForm.propTypes = propTypes

export default UserForm
