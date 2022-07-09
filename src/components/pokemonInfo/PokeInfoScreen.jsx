import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeInfoScreen = () => {
    const {name} = useParams()
    const [poke, setPoke] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
        axios.get(URL)
            .then(res => setPoke(res.data))
            .catch(err => console.error(err))
    }, [])


  return (
    <div>
        <main className="flex">
        <article  className="card2">
            <img className={`${poke?.types[0].type.name}`}/>
            <img src={poke?.sprites.other['official-artwork'].front_default} className="card-body-img"/>
            <h1 className="card-body-title">
                    {poke && poke?.name.charAt(0).toUpperCase() + poke?.name.slice(1)}
                </h1>
                <p className="card-body-text">Type:</p>
                <div>
                <span className={poke?.types[0].type.name}>
                    {poke?.types.map((tipo)=>{
                        return (
                            <span key={tipo.type.name}>/{tipo.type.name}/</span>
                        )
                    })}
                </span>

                </div>
            <div className="card-footer">
                <div className="card-footer-info">
                    <h3>{poke?.stats[0].base_stat}</h3>
                    <p>HP</p>
                </div>
                <div className="card-footer-info">
                    <h3>{poke?.stats[1].base_stat}</h3>
                    <p>Attack</p>
                </div>
                <div className="card-footer-info">
                    <h3>{poke?.stats[2].base_stat}</h3>
                    <p>Defense</p>
                </div>
                <div className="card-footer-info">
                    <h3>{poke?.stats[5].base_stat}</h3>
                    <p>Speed</p>
                </div>               
            </div>
            <div className="card-footer">
            <div className="card-footer-info">
                    <h3>{poke?.stats[3].base_stat}</h3>
                    <p>special-attack</p>
                </div>
                <div className="card-footer-info">
                    <h3>{poke?.stats[4].base_stat}</h3>
                    <p>special-defense</p>
                </div>
               
            </div>
        </article>
        <article className="mov">
        <h2>Movimientos</h2>
            <ul className="movimientos">
                {
                    poke?.moves.map(move =>(
                        <li key={move.move.url}>{move.move.name}</li>
                    ))
                }
            </ul>
        </article>
    </main>
    </div>
    
  )
}

export default PokeInfoScreen