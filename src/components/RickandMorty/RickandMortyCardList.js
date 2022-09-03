import RickandMortyCard from "./RickandMortyCard"

const RickandMortyCardList = ({chars}) => {
  return (
    <div>
    {/* { chars.map( c => <RickandMortyCard key={c.id}{...c}/>) }*/}    
    { chars.map( c => 
        <RickandMortyCard key={c.id} id={c.id}name={c.name} species={c.species} image={c.image}/>
        )}    
    </div>
  )
}
export default RickandMortyCardList