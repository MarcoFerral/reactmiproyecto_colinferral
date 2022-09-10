import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="m-5">
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/swapi'}>Starwars API</Link>
      </li>
      <li>
        <Link to={'/ram'}>Rick and Morty</Link>
      </li>
    </div>
  )
}
export default Footer