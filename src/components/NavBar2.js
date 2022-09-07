const NavBar2 = () => {
  return (
    <div classNameName="navbar bg-base-100">
  <div classNameName="flex-1">
    <a classNameName="btn btn-ghost normal-case text-3xl">ARCADIA SPOT</a>
  </div>
  <div classNameName="flex-none">
    <div classNameName="dropdown dropdown-end">
      <label tabIndex="0" classNameName="btn btn-ghost btn-circle">
        <div classNameName="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" classNameName="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" join="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span classNameName="badge badge-sm indicator-item">0</span>
        </div>
      </label>
      <div tabIndex="0" classNameName="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div classNameName="card-body">
          <span classNameName="font-bold text-lg">0 Artículos</span>
          <span classNameName="text-info">Subtotal: $0</span>
          <div classNameName="card-actions">
            <button classNameName="btn btn-primary btn-block">Ver Mi Carrito</button>
          </div>
        </div>
      </div>
    </div>
    <div classNameName="dropdown dropdown-end">
      <label tabIndex="0" classNameName="btn btn-ghost btn-circle avatar">
        <div classNameName="w-10 rounded-full">
          <img src="https://placeimg.com/640/480/people" />
        </div>
      </label>
      <ul tabIndex="0" classNameName="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a classNameName="justify-between">
            Perfil
            <span classNameName="badge">Nueva</span>
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