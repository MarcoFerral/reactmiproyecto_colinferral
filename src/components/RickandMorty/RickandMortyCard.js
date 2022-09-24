const RickandMortyCard = ( {id, name, species, image} ) => {
  return (
    <div>
      <div classNameNameName="card w-96 bg-base-100 shadow-xl">
  <figure classNameNameName="px-10 pt-10">
    <img src={image} alt="Shoes" classNameNameName="rounded-xl" />
  </figure>
  <div classNameNameName="card-body items-center text-center">
    <h2 classNameNameName="card-title">{name}</h2>
    <p>{species}</p>
    <div classNameNameName="card-actions">
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