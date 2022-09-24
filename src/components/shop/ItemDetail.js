import { useContext } from "react"
import DarkmodeContext from "../Context/DarkMode"

const ItemDetail = ({item: name, price}) => {
  
  const darkmode = useContext(DarkmodeContext)
  
  return (
    <div classNameNameName="m-5">
      <div>
        <strong>Darkmode: {darkmode ? 'Activado' : 'Desactivado'}</strong>
      </div>
        <div>{name}</div>
        <div>{price}</div>
    </div>
  )
}
export default ItemDetail