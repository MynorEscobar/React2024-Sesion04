import React, {useState, useEffect} from "react";

function ListaPokemon(){
    const [pokemon, setPokemon]=useState([]);
    const [cargando,setCargando]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
        .then(response=>{
            if(!response.ok){
                throw new Error('Error de conexion')
            }
            return response.json();
        })
        .then((data)=>{
            setPokemon(data.results);
            setCargando(false);
        })
        .catch((error)=>{
            setError(error);
            setCargando(false);
        });

    }, []);
    return(
        <div>
            <h1>Lista de Pokemones</h1>
            <ul>
                {pokemon.map((poke)=>(
                    <li key={poke.id}>
                        <strong>{poke.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListaPokemon;