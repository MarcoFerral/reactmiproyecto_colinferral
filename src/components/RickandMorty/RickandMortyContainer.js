import { useEffect, useState } from "react"
import NavBar2 from "../NavBar2"
import RickandMortyCardList from "./RickandMortyCardList"

const RickandMortyContainer = () => {

    const [chars, setChars] = useState([])
    
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
        <RickandMortyCardList chars={chars} />
    </>
  )
}
export default RickandMortyContainer