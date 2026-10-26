import { BrowserRouter, Route, Routes } from 'react-router'

import MainLayout from './layouts/main/MainLayout'
import Character from './pages/character/Character'
import Characters from './pages/characters/Characters'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            element={<Characters />}
          />
          <Route
            path='characters/:id'
            element={<Character />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
