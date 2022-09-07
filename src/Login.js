const Login = () => {
  return (
    <div classNameName="hero min-h-screen bg-base-200 mx-10">
  <div classNameName="hero-content flex-col lg:flex-row-reverse">
    <div classNameName="text-center lg:text-left">
      <h1 classNameName="text-5xl font-bold">Ingresa ahora!</h1>
      <p classNameName="py-6 tx-xl">Accede y mira nuestro catálogo de juegos renovado; las mejores ofertas y las reseñas más recientes sobre los mejores juegos multiplataforma del momento.</p>
    </div>
    <div classNameName="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div classNameName="card-body">
        <div classNameName="form-control">
          <label classNameName="label">
            <span classNameName="label-text">Email</span>
          </label>
          <input type="text" placeholder="" classNameName="input input-bordered" />
        </div>
        <div classNameName="form-control">
          <label classNameName="label">
            <span classNameName="label-text">Contraseña</span>
          </label>
          <input type="text" placeholder="" classNameName="input input-bordered" />
          <label classNameName="label">
            <a href="#" classNameName="label-text-alt link link-hover">Olvidaste tu contraseña?</a>
          </label>
        </div>
        <div classNameName="form-control mt-6">
          <button classNameName="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
export default Login