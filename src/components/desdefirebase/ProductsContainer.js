import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import products from "../shop/productsData";

export const ProductCard = ( {title, price, stock, img, description} ) => {
  return (
    <div>
        <li>{title}</li>
        <li>{price}</li>
        <li>{stock}</li>
        <li>{description}</li>
        <img className="w-12" src={img} />
    </div>
  )
}
        
        

const ProductsContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        /* getIphone */()
        getProducts()
    }, [])
    
    /* const getIphone = () => {
       const db = getFirestore()
       const iphoneRef = doc( db, 'items', 'WsPnEfYuP355Kqe0uVGH' )
       getDoc( iphoneRef ).then(res => {
        const data = res.data()
        setProducts( data )

       })
    } */
  
  const getProducts = () => {
    const db = getFirestore()
    const itemCollection = collection( db, 'items' )
    getDocs( itemCollection ).then( snapshot => {
        setProducts( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
    } )
  }
  
  return (
    <{/* ProductCard */} {...products}/>
    <>
        { products.map( p => <ProductCard key={p-id} {...p}/> ) }
    </>
  )
}
export default ProductsContainer