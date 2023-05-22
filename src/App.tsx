import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./pages/AppRoutes"

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
