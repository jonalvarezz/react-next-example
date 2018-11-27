import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeContext from '../../theme'

const Container = styled.li`
  border: 1px solid ${({ theme }) => theme.gray};
  padding: 1rem;
  text-align: center;

  &.Card--active {
    border-color: ${({ theme }) => theme.darkGray};
  }
`

const propTypes = {
  children: PropTypes.element,
  active: PropTypes.bool
}

function Card({ children, active, ...props }) {
  const theme = useContext(ThemeContext)
  let classString = 'Card'
  if (active) classString += ' Card--active'

  return (
    <Container {...props} theme={theme} className={classString}>
      {children}
    </Container>
  )
}
Card.propTypes = propTypes

export default Card
