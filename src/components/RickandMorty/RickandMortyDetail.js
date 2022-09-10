import { useEffect } from "react"
import { useParams } from "react-router-dom"
import RickandMortyCard from "./RickandMortyCard"

const RickandMortyDetail = () => {
    const [char, setChar] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const URL = 'https://rickandmortyapi.com/api/character' + id
        fetch( URL )
          .then(res => res.json() )
          .then( data => {
              //console.log(data.results);
              setChar={ data }
            })
      }, [])
              
    
    return (
        <RickandMortyCard {...char}/>
    
  )
}
export default RickandMortyDetail