import React, { useContext } from 'react'
import { Context, actions, selectors } from '../../store'
import AnimatedSidebar from './AnimatedSidebar'
import Container from './SidebarContainer'

function Sidebar() {
  const store = useContext(Context)
  const closeSidebar = () => store.dispatch(actions.setActiveItem(''))
  const createNew = data => store.dispatch(actions.createNew(data))
  const data = selectors.getCurrentItem(store)

  return (
    <AnimatedSidebar show={store.activeItem} onClose={closeSidebar}>
      <Container
        itemData={data}
        current={store.current}
        closeSidebar={closeSidebar}
        createNew={createNew}
      />
    </AnimatedSidebar>
  )
}

export default Sidebar
