const NavBar2 = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-3xl">ARCADIA SPOT</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">0</span>
        </div>
      </label>
      <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">0 Artículos</span>
          <span className="text-info">Subtotal: $0</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">Ver Mi Carrito</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/640/480/people" />
        </div>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Perfil
            <span className="badge">Nueva</span>
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