
const Saludo = ( {name, lastname, fn, children} ) => {

  if (fn) {
    fn()
  }

  return (
    <>
    <h1 classNameName=" font-mono text-3xl font-bold underline m-6">¡Saludos a: {name} {lastname}!</h1> 
    {children}
    </>
  )
}

export default Saludo