import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

const CartView = () => {

  const order = {
    buyer: { name:'Juan', phone: 123, email: 'juan@gmail.com' },
    items: [ {name: 'mouse', price: 600}, {name: 'teclado', price: 350} ],
    total: 999
  }

  const orderHandler = () => { 
     const  db = getFirestore()
     const orderCollection = collection(db, 'orders')

     addDoc(orderCollection, order ).then( ({id}) => {
      console.log({id});
     })
  }

  const getOrdersHandler = () => {
    const  db = getFirestore()
    const orderCollection = collection(db, 'orders')
    getDocs( orderCollection).then( res => {
      console.log(
        res.docs.map ( d => ({id: d.id, ...d.data()}) )
        );
    })
   }

   const updateHandler = () => {
    const  db = getFirestore()
     const orderCollection = collection(db, 'orders') 
     const orderDoc = doc(orderCollection, "WsPnEfYuP355Kqe0uVGH")
     updateDoc( orderDoc, {
      price:1900,
    })
   }

  return (
    <div>
      <button className="btn" onClick={orderHandler}>Finalizar compra</button>
      <button className="btn" onClick={getOrdersHandler}>Ver ordenes</button>
      <div className="m-5">
        <button className="btn" onClick={updateHandler}>Actualizar orden</button>
      </div>
    </div>
  )
}
export default CartView