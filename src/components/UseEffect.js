import React, { useEffect, useState } from "react";

function UseEffect(){

    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    const [pokemonList, setPokemonList] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect( () => {
        fetch(baseUrl)
            .then( res => res.json())
            .then( data => setPokemonList(data.results))
            .catch( err => console.log(err.message))
    },[isClicked])

    const handleClick = () => {
        setIsClicked(!isClicked)
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
            <button onClick={handleClick}>Get Again</button>
        </div>
    )
}

export default UseEffect;