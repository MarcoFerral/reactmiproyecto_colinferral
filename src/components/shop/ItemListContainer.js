import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CartContext from "../Context/CartContext"
import products from "./productsData"

const ItemListContainer = () => {

    const [item, setItems] = useState([])

    useEffect(() => {
      setItems( products )
    }, [])
    

  return (
    <CartContext.Provider value={[]}>
    <div>
        { items.map( i => 
            <Link to={`/shop/item/${i.slug}`} key={i.id}>
            <div classNameNameName="m-2 p-2 bg-blue-300"> { i.name } </div>
            </Link>
        )}
    </div>
    </CartContext.Provider>
  )
}
export default ItemListContainer
            