import React, { useState } from 'react'
import './index.css'
import TodoApp from './Pages/TodoApp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {

  return (
    <>
      <TodoApp />
      <ToastContainer />
    </>
  )
}

export default App
