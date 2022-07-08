import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/Home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import PokeInfoScreen from './components/pokemonInfo/PokeInfoScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="header">
    <h1></h1>
  </div>
  <div className="header2"></div>
  <div className="header3"></div>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/pokedex' element={<PokedexScreen/>} />
        <Route path='/pokemon/:name' element={<PokeInfoScreen />} />
      </Routes>
    </div>
    
    </>
  )
}

export default App