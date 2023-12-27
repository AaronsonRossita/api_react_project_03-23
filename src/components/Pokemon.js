import React, { useState } from "react";
import "./Pokemon.css";

function Pokemon(){

    const baseUrl = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImg, setPokemonImg] = useState("");
    const [pokemonDisplayName, setPokemonDisplayName] = useState("Pokemon");
    
    const handleInput = (event) => {
        setPokemonName(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        fetch(baseUrl + "/" + pokemonName.toLowerCase())
            .then( res => res.json())
            .then( data => {
                setPokemonDisplayName(data.name.charAt(0).toUpperCase() + data.name.slice(1, data.name.length))
                setPokemonImg(data.sprites.other.dream_world.front_default)
            })
            .catch( err => console.log(err.message))
        setPokemonName("");    
    }

    return(
        <form onSubmit={handleClick}>
            <div className="pokemon">
                <input type="text" required value={pokemonName} onChange={handleInput}/>
                <br/>
                <button  type="submit">Get Pokemon !</button>
                <br/>
                <br/>
                <br/>
                <img src={pokemonImg}></img>
                <h1>{pokemonDisplayName}</h1>
            </div> 
        </form>
    )
}

export default Pokemon;