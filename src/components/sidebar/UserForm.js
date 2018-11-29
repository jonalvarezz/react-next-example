import React, { useState } from 'react'
import styled from 'styled-components'
import Select from 'antd/lib/select'
import PropTypes from 'prop-types'
import { UserType, GroupType } from '../../store/types'
import { Input } from '../form'
import Picture from '../Picture'

const Form = styled.form`
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
`

const propTypes = {
  ...UserType,
  allGroups: PropTypes.arrayOf(PropTypes.shape(GroupType)),
  children: PropTypes.func.isRequired,
  createNew: PropTypes.func,
  cancel: PropTypes.func
}

function UserForm({
  email,
  fullname,
  picture,
  groups,
  allGroups,
  children,
  createNew,
  cancel
}) {
  const [newGroups, setNewGroups] = useState(...groups)
  const onGroupChange = g => setNewGroups(g)

  const onSubmit = event => {
    event.preventDefault()
    const update = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      groups: newGroups
    }
    createNew(update)
  }

  return (
    <Form onSubmit={onSubmit}>
      <p>
        <Picture src={picture} alt={`${fullname}'s portrait`} />
      </p>
      <p>
        <Input placeholder="Fullname" name="fullname" defaultValue={fullname} />
      </p>
      <p>
        <Input
          placeholder="Email"
          name="email"
          defaultValue={email}
          type="email"
          required
        />
      </p>
      <h4>Groups</h4>
      <Select
        mode="multiple"
        style={{ width: '100%', marginBottom: '20px' }}
        placeholder="Please select"
        defaultValue={groups}
        onChange={onGroupChange}
      >
        {allGroups.map(g => (
          <Select.Option key={g.name}>{g.name}</Select.Option>
        ))}
      </Select>
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
