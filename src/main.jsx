import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import App from './App.jsx'
import ListTodo from "./ListTodo.jsx"
import AddTodo from "./AddTodo.jsx"
import UpdateTodo from "./UpdateTodo.jsx"

// Hanya import todoListSlice
import { todoListSlice } from "./todoListSlice.js"

const store = configureStore({
  reducer: {
    // Hilangkan reducer counter
    todoList: todoListSlice.reducer,
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/todolist" element={<ListTodo/>}/>
          <Route path="/todolist/add" element={<AddTodo/>}/>
          <Route path="/todolist/:id/edit" element={<UpdateTodo/>}/>
          <Route path="/" element={<App/>}/>
          {/* Route counter sudah dihapus */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)