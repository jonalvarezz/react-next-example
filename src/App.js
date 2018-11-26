import React from 'react'
import Store from './store'
import Navbar from './components/navbar'
import ThemeContext, { defaultTheme } from './theme'

function App() {
  return (
    <Store>
      <ThemeContext.Provider value={defaultTheme}>
        <div>
          <Navbar />
        </div>
      </ThemeContext.Provider>
    </Store>
  )
}

export default App
