import React, { useContext } from 'react'
import styled from 'styled-components'
import Context from '../../theme'

const Input = styled.input`
  height: 28px;
  padding: 5px 2px;
  border: 1px solid ${({ theme }) => theme.gray};
  position: relative;
  display: inline-block;
  padding: 4px 11px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 1.5;
`

function StyledInput(props) {
  const theme = useContext(Context)
  return <Input theme={theme} {...props} />
}

export default StyledInput
