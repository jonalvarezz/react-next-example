import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context, actions } from '../../store'
import AnimatedSidebar from './AnimatedSidebar'

const Container = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60%;
  right: 0;
  background: white;
  box-shadow: -4px 2px 16px rgba(0, 0, 0, 0.3);
`

function Sidebar() {
  const { activeItem, dispatch } = useContext(Context)
  const closeSidebar = () => dispatch(actions.setActiveItem(''))

  return (
    <AnimatedSidebar show={activeItem} onClose={closeSidebar}>
      <Container />
    </AnimatedSidebar>
  )
}

export default Sidebar
