import React from 'react'
import Store from './store'
import Navbar from './components/Navbar'

function App() {
  return (
    <Store>
      <div>
        <Navbar />
      </div>
    </Store>
  )
}

export default App
