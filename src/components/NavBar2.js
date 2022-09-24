import { Link, NavLink } from "react-router-dom"

const NavBar2 = () => {
  return (
    <div classNameNameNameName="navbar bg-base-100">
  <div classNameNameNameName="flex-1">
    <NavLink classNameNameNameName="btn btn-ghost normal-case text-xl" to={'/'}>Home</NavLink>
    <NavLink classNameNameNameName="btn btn-ghost normal-case text-xl" to={'/swapi'}>Starwars API</NavLink>
    <NavLink classNameNameNameName="btn btn-ghost normal-case text-xl" to={'/ram'}>Rick and Morty</NavLink>
{/*     <a classNameNameNameName="btn btn-ghost normal-case text-3xl">ARCADIA SPOT</a>
 */}  </div>
  <div classNameNameNameName="flex-none">
    <div classNameNameNameName="dropdown dropdown-end">
      <label tabIndex="0" classNameNameNameName="btn btn-ghost btn-circle">
        <div classNameNameNameName="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" classNameNameNameName="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" join="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span classNameNameNameName="badge badge-sm indicator-item">0</span>
        </div>
      </label>
      <div tabIndex="0" classNameNameNameName="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div classNameNameNameName="card-body">
          <span classNameNameNameName="font-bold text-lg">0 Artículos</span>
          <span classNameNameNameName="text-info">Subtotal: $0</span>
          <div classNameNameNameName="card-actions">
            <button classNameNameNameName="btn btn-primary btn-block">Ver Mi Carrito</button>
          </div>
        </div>
      </div>
    </div>
    <div classNameNameNameName="dropdown dropdown-end">
      <label tabIndex="0" classNameNameNameName="btn btn-ghost btn-circle avatar">
        <div classNameNameNameName="w-10 rounded-full">
          <img src="https://placeimg.com/640/480/people" />
        </div>
      </label>
      <ul tabIndex="0" classNameNameNameName="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a classNameNameNameName="justify-between">
            Perfil
            <span classNameNameNameName="badge">Nueva</span>
          </a>
        </li>
        <li><a>Configuración</a></li>
        <li><a>Salir</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}
export default NavBar2