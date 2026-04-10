import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
// Gunakan 'react-router-dom' jika 'react-router' saja tidak jalan di versimu
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import App from './App.jsx'
import ListTodo from "./ListTodo.jsx"
import AddTodo from "./AddTodo.jsx"
import UpdateTodo from "./UpdateTodo.jsx"
import Counter from "./Counter.jsx" // <--- HARUS DI-IMPORT

// IMPORT KEDUA SLICE
import { counterSlice } from "./counterSlice.js" // <--- PASTIKAN SUDAH ADA FILENYA
import { todoListSlice } from "./todoListSlice.js"

const store = configureStore({
  reducer: {
    // Pastikan memanggil .reducer dari objek slice-nya
    counter: counterSlice.reducer,
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
          <Route path="/counter" element={
            <>
              <Counter/>
              <Counter/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)