import React, { useContext } from 'react'
import { Context, actions, selectors } from '../../store'
import AnimatedSidebar from './AnimatedSidebar'
import UserInfo from './UserInfo'

function Sidebar() {
  const store = useContext(Context)
  const closeSidebar = () => store.dispatch(actions.setActiveItem(''))
  const data = selectors.getCurrentItem(store)

  return (
    <AnimatedSidebar show={store.activeItem} onClose={closeSidebar}>
      <UserInfo {...data} />
    </AnimatedSidebar>
  )
}

export default Sidebar
