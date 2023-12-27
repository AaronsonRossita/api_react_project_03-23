import React from "react";
import { useState } from "react";

function Button(){

    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    const [pokemonList, setPokemonList] = useState([]) 

    const handleClick = () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => setPokemonList(data.results))
            .catch( err => console.log(err.message))
    }

    return(
        <div style={{border : "solid 2px", margin: "10px", width:"25%"}}>
            <ul>
                {pokemonList.map( (pokemon) => {
                    return(
                        <li key={pokemon.name}>{pokemon.name}</li>
                    )
                })}
            </ul>
            <button onClick={handleClick}>Get pokemon</button>
        </div>
    )
}

export default Button;