import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PokemonList from './PokemonList';
import TurnPage from './TurnPage';

const PokemonAxios =(props)=> { 
    const [pokemon, setPokemon] = useState([]);
    const [shown, setShown] =useState(false)
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageURL] = useState()
    const [prevPageUrl, setPrevPageURL] = useState()
    const [loading, setLoading]= useState(true)

    const handleSubmit=(e) => {
        e.preventDefault()
        setShown(true) 
    }

    useEffect(() => {
        setLoading(true)
        axios.get(currentPageUrl).then(res => {
            setLoading(false)
            setNextPageURL(res.data.next)
            setPrevPageURL(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
    })
    }, [currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl)
    }
    
    return (
        <div >
            <button  onClick={handleSubmit}>Fetch Pokemon</button>
            { shown && (
                <div>
                    <PokemonList pokemon={pokemon}/>
                    <TurnPage 
                    gotoNextPage= {nextPageUrl ? gotoNextPage : null}
                    gotoPrevPage= {prevPageUrl ? gotoPrevPage : null}/>
                </div>
            )
            }
        </div>
    );
}


export default PokemonAxios;