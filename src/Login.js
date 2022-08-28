const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mx-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Ingresa ahora!</h1>
      <p className="py-6 tx-xl">Accede y mira nuestro catálogo de juegos renovado; las mejores ofertas y las reseñas más recientes sobre los mejores juegos multiplataforma del momento.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contraseña</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Olvidaste tu contraseña?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
export default Login