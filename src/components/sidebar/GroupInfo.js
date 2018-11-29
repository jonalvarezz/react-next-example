import React from 'react'
import styled from 'styled-components'
import { GroupType } from '../../store/types'

const Container = styled.div`
  text-align: center;
`

function GroupInfo({ name }) {
  return (
    <Container>
      <h3>{name}</h3>
    </Container>
  )
}
GroupInfo.propTypes = GroupType

export default GroupInfo
