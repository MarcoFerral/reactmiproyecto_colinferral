import { useEffect, useState } from "react"
import { useFavs } from "../Context/FavsContext"
import NavBar2 from "../NavBar2"
import RickandMortyCardList from "./RickandMortyCardList"

const RickandMortyContainer = () => {

    const [chars, setChars] = useState([])
    const {favs, clearFavs}= useFavs()
    
    useEffect(() => {
        const URL = 'https://rickandmortyapi.com/api/character'
        fetch(URL )
          .then(res => res.json() )
          .then( data => {
              console.log(data.results);
              setChars(data.results)
          })
      }, [])
    
    
    return (
      <>
      
          <h1>Rick and Morty API</h1>
          <strong>Lista de Favoritos</strong>
          {favs.map( (f,i) => <li key={i}>{f}</li>)}
          <button classNameNameName="btn" onClick={clearFavs}>Borrar Lista</button>
          <RickandMortyCardList chars={chars} />
      </>
    )
  }
  export default RickandMortyContainer
      