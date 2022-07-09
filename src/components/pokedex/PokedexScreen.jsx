import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading'
import Paginacion from '../Paginacion'
import Form from './Form'
import PokeCard from './PokeCard'

const PokedexScreen = () => {

  const nameUser = useSelector(state => state.nameUser)

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [filterPokemon, setFilterPokemon] = useState()
  const [typeList, setTypeList] = useState()
  const [filterType, setFilterType] = useState('All Pokemons')
  const [isLoading, setIsLoading] = useState(true)


  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorPagina] = useState(20)

  const maximo = Math.ceil(pokemons?.length / porPagina)


  useEffect(() => {
    if(filterType === 'All Pokemons'){
        const locationNumber = 1154
      // Todos los pokemons
      const URL_POKEMONS = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${locationNumber}`
      axios.get(URL_POKEMONS)
        .then(res => {
          console.log(res.data.results)
          setPokemons(res.data.results)
          setPokeSearch('')
          setIsLoading(false)
        })
        .catch(err => console.log(err))
    } else {
      // Pokemons por tipo
      const URL = `https://pokeapi.co/api/v2/type/${filterType}/`
      axios.get(URL)
        .then(res => {
          const array = res.data.pokemon.map(e => e.pokemon)
          setPokemons(array)
          setPokeSearch('')
          setIsLoading(false)
        })
        .catch(err => console.log(err))
    }
  }, [filterType])

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type/'
    axios.get(URL)
      .then(res => {
        setTypeList(res.data.results)
        setIsLoading(false)
    })
      .catch(err => console.log(err))
  }, [])
  
  useEffect(() => {
    setFilterPokemon(pokemons?.filter(e => e.name.includes(pokeSearch?.toLowerCase())))
  }, [pokeSearch, pokemons])

  console.log(pokemons)

  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Hola {nameUser}, bienvenido a la pokedex </h2>
      <Form 
        setPokeSearch={setPokeSearch}
        typeList={typeList}
        setFilterType={setFilterType}
      />
      <Paginacion 
      pagina={pagina}
      setPagina={setPagina}
      maximo={maximo}/>
      <div className='card-container'>
        {
            isLoading ?
            <Loading/> :
         filterPokemon ?
            filterPokemon?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map(pokemon => (
              <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          :
            pokemons?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map(pokemon => (
              <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
        }
      </div>
      <div className="footer">
      <i className='bx bxl-netlify' ></i> <p></p>
        <p><b>Made by Yeizer Marrugo</b></p> <p></p>
        <i className='bx bxl-github' ></i>
      </div>
    </div>
  )
}

export default PokedexScreen