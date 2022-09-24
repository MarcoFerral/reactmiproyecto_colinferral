import { useEffect, useState } from "react"
import Spinner from "./Spinner";

const SwapiContainer = () => {

  const [chars, setChars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    setTimeout(() => {
      getChars()
    }, 3000);
      
    
    console.log('Mounting...')
  }, [])

  const getChars = () => {
    const URL = 'https://swapi.dev/api/people/'
    fetch ( URL )
        .then( response => response.json() )
        .then( data => {
          console.log(data.results)
          setChars(data.results)
          setLoading(false)
        })
  }

  return (
    <>
      <div>StarWars API</div>
      { loading ? 
        <Spinner/> :
        chars.map( char => <li key={char.url}>{char.name}</li>) 
      }
    </>
  )
}
export default SwapiContainer
      
         
