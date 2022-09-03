import { useEffect, useState } from "react"
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
        <div>Rick and Morty</div>
        <RickandMortyCardList chars={chars} />
    </>
  )
}
export default RickandMortyContainer