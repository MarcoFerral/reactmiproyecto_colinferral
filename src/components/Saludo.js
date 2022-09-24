import { useContext } from "react"
import DarkmodeContext from "./Context/DarkMode"

const Saludo = ( {name, lastname, fn, children} ) => {

  const darkmode = useContext(DarkmodeContext)
  
  if (fn) {
    fn()
  }

  return (
    <>
    <h1 classNameNameNameName=" font-mono text-3xl font-bold underline m-6">¡Saludos a: {name} {lastname}!</h1> 
    {children}
    <div>
        <strong>Darkmode: {darkmode ? 'Activado' : 'Desactivado'}</strong>
      </div>

    </>
  )
}

export default Saludo