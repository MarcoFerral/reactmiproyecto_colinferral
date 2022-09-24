const Login = () => {
  return (
    <div classNameNameNameName="hero min-h-screen bg-base-200 mx-10">
  <div classNameNameNameName="hero-content flex-col lg:flex-row-reverse">
    <div classNameNameNameName="text-center lg:text-left">
      <h1 classNameNameNameName="text-5xl font-bold">Ingresa ahora!</h1>
      <p classNameNameNameName="py-6 tx-xl">Accede y mira nuestro catálogo de juegos renovado; las mejores ofertas y las reseñas más recientes sobre los mejores juegos multiplataforma del momento.</p>
    </div>
    <div classNameNameNameName="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div classNameNameNameName="card-body">
        <div classNameNameNameName="form-control">
          <label classNameNameNameName="label">
            <span classNameNameNameName="label-text">Email</span>
          </label>
          <input type="text" placeholder="" classNameNameNameName="input input-bordered" />
        </div>
        <div classNameNameNameName="form-control">
          <label classNameNameNameName="label">
            <span classNameNameNameName="label-text">Contraseña</span>
          </label>
          <input type="text" placeholder="" classNameNameNameName="input input-bordered" />
          <label classNameNameNameName="label">
            <a href="#" classNameNameNameName="label-text-alt link link-hover">Olvidaste tu contraseña?</a>
          </label>
        </div>
        <div classNameNameNameName="form-control mt-6">
          <button classNameNameNameName="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
export default Login