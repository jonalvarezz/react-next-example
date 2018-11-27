import React from 'react'
import Store from './store'
import Navbar from './components/navbar'
import ThemeContext, { defaultTheme } from './theme'
import Body from './components/grid'
import Sidebar from './components/sidebar'

function App() {
  return (
    <Store>
      <ThemeContext.Provider value={defaultTheme}>
        <div>
          <Navbar />
          <Body />
          <Sidebar />
        </div>
      </ThemeContext.Provider>
    </Store>
  )
}

export default App
