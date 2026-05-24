import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './layouts/main/MainLayout'
import Characters from './pages/characters/Characters'
import Character from './pages/character/Character'
import './App.css'

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
