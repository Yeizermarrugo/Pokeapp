import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

//   const navigate = useNavigate()

//   const clickCard = () => navigate(`/pokemon/${pokemon?.name}`)


  return (
    <article  className={`${pokemon?.types[0].type.name}`}>
       <Link className="link" to={`/pokemon/${pokemon?.name}`}>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt=""/>
      </Link>
      <h3>{pokemon?.name}</h3>
    </article>
  )
}

export default PokeCard