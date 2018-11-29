import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context, actions } from '../../store'
import ThemeContext from '../../theme'

const List = styled.ul`
  margin: 0;
  padding: 1rem 20px;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.lightGray};
  justify-content: center;
  list-style: none;
  > li {
    padding: 0 10px;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  color: ${props => (props.active ? 'tomato' : '#333')};
`

function Navbar() {
  const { current, dispatch } = useContext(Context)
  const theme = useContext(ThemeContext)

  return (
    <nav>
      <List theme={theme}>
        <li>
          <Button
            active={current === 'users'}
            onClick={() => dispatch(actions.setCurrent('users'))}
          >
            Users
          </Button>
        </li>
        <li>
          <Button
            active={current === 'groups'}
            onClick={() => dispatch(actions.setCurrent('groups'))}
          >
            Groups
          </Button>
        </li>
      </List>
    </nav>
  )
}

export default Navbar
