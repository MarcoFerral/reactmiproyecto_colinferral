import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import products from "./productsData"


const product = {
    name: 'Samsung Galaxy S20',
    price: 2500
    img:'',
    description:''
}


const ItemDetailContainer = () => {

const [item, setItem] = useState({})

    useEffect(() => {
      getItem().then( data => {
        setItem(data)

      })
    }, [])
    

    const getItem = () => { 
       return new Promise((resolve => {
          setTimeout(() => {
            resolve( product )
          }, 2000);  
        })
    }
  
    return (
    <ItemDetail item={item}/>
    
    
  )
}
export default ItemDetailContainer