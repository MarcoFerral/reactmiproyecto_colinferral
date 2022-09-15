import { Link } from "react-router-dom"

export const DarkModeButton = () => {
  return (
    <input type="checkbox" class="toggle"/>
  )
}

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
      <DarkModeButton/>
    </div>
  )
}
export default Footer