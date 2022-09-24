import { Link } from "react-router-dom"
import { useFavs } from "../Context/FavsContext"
import RickandMortyCard from "./RickandMortyCard"

const RickandMortyCardList = ({chars}) => {

  const {addToFavs} = useFavs()

  const addHandler = (event, name) => {
    addToFavs(name)
  }

  return (
    <div>
    {/* { chars.map( c => <RickandMortyCard key={c.id}{...c}/>) }*/}    
    { chars.map( c =>
      <>
        <Link to={'/ram/' + c.id}>
          <RickandMortyCard key={c.id} id={c.id}name={c.name} species={c.species} image={c.image}/>
        </Link>
        <button onClick={(event) => {addHandler(event, c.name)}} classNameNameName="btn">Agregar a Favoritos</button> 
      </>
      )} 
    </div>
  )
}
export default RickandMortyCardList
        