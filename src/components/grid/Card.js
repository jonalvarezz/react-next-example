import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../theme'

const Container = styled.li`
  border: 1px solid ${({ gray }) => gray};
  padding: 1rem;
  text-align: center;
`

function Card({ children }) {
  const theme = useContext(ThemeContext)

  return <Container {...theme}>{children}</Container>
}

export default Card
