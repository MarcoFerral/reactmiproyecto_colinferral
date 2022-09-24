import { Link } from "react-router-dom"

export const DarkModeButton = () => {
  return (
    <input type="checkbox" classNameName="toggle"/>
  )
}

const Footer = () => {
  return (
    <div classNameNameName="m-5">
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