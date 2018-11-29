import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { GroupType } from '../../store/types'

const Container = styled.div`
  text-align: center;
`

const propTypes = {
  ...GroupType,
  children: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func,
  deleteItem: PropTypes.func
}

function GroupInfo({ name, children, toggleEdit, deleteItem }) {
  return (
    <Container>
      <h3>{name}</h3>
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
GroupInfo.propTypes = propTypes

export default GroupInfo
