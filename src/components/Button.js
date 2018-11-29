import React, { useContext } from 'react'
import Context from '../theme'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  line-height: 1.499;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  height: 32px;

  border-color: ${props => props.theme.darkGray};
  color: ${props => props.theme.darkGray};
  &:hover {
    background-color: ${props => props.theme.darkGray};
    color: white;
  }

  ${props =>
    props.danger &&
    css`
      border-color: ${props.theme.red};
      color: ${props.theme.red};

      &:hover {
        background-color: ${props.theme.red};
        color: white;
      }
    `}

  ${props =>
    props.ghost &&
    css`
      border-width: 0;
      box-shadow: none;
    `}
`

const StyledButton = props => {
  const theme = useContext(Context)
  return <Button theme={theme} type="button" {...props} />
}

export default StyledButton
