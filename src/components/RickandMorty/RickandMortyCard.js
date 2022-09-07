const RickandMortyCard = ( {id, name, species, image} ) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{species}</p>
    <div className="card-actions">
    </div>
  </div>
</div>
        {/* <h1>{id}-{name}</h1>
        <h3>{species}</h3>
        <img src={image}/> */}
    </div>
  )
}
export default RickandMortyCard