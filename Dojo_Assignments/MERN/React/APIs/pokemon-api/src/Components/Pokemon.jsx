import React, {useState, useEffect} from 'react'

const Pokemon =(props)=> { 
    const [pokemon, setPokemon] = useState([]);
    const [shown, setShown] =useState(false)

    const handleSubmit=(e) => {
        e.preventDefault()
        setShown(true) 
      }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);
    
        return (
            <div >
                <button  onClick={handleSubmit}>Fetch Pokemon</button>
                {shown && (
                    <div>{pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                        return (<div key={index}>{pokemon.name}</div>)
                        
                    })}
                    </div>
                )}
            </div>
        );
    }

export default Pokemon;