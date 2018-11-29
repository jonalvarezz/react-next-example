import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { GroupType } from '../../store/types'
import { Input } from '../form'

const Form = styled.form`
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
`

const propTypes = {
  ...GroupType,
  children: PropTypes.func.isRequired,
  createNew: PropTypes.func,
  cancel: PropTypes.func
}

function GroupForm({ name, children, createNew, cancel }) {
  return (
    <Form onSubmit={createNew}>
      <p>
        <Input placeholder="Name" defaultValue={name} required />
      </p>
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
GroupForm.propTypes = propTypes

export default GroupForm
