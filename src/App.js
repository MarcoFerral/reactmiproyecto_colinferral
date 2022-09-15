import './App.css';
import NavBar2 from './components/NavBar2';
import Bienvenida from './components/Bienvenida';
import Login from './Login';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import InputNoVowels from './components/InputNoVowels';
import DarkmodeContext from './components/Context/DarkMode';


function App() {
  const [counter, setCounter] = useState(0)
  const [products, setProducts] = useState([])
  
  useEffect( () => {
    console.log('promesa en mounting');
    
    //estructura de un Promise//
    const getProducts = new Promise( (resolve, reject) => {
      const rand = Math.random()
      console.log(rand);
      
      if ( rand >0.5 ){
        resolve( ['mouse', 'teclado', 'cpu'] )
      } else {
        reject( 'promesa rechazada')
      }
    })


    getProducts
    .then (data => {
      console.log(data); 
      setProducts( data )
    })
    .catch ( err => { console.log(err); })
    .finally( () => {console.log('finally siempre sucede'); })

  }, [])
  
  useEffect( () => {
    console.log('efecto al montaje');
  }, [])

  useEffect( () => {
    console.log('efecto al montaje y cambio en counter');
  }, [counter])

  useEffect( () => {
    console.log('efecto en cada render');
  })

  const handleClick = () => {
    console.log('hiciste click');
    setCounter( counter + 1 )
  }

  console.log('hubo render');

  return (
    
  <div classNameName= 'container'>
    <NavBar2/>
    <DarkmodeContext.Provider value={true}/>
    <InputNoVowels/>
    <div classNameName='my-5'>
      <strong>Contador: {counter}</strong>
    </div>
    <button onClick={handleClick} classNameName='btn my-5'>Click</button>
    {products.map( p => <li>{p}</li> )}
    <Bienvenida/>
    <Login/>
    <ItemListContainer greeting='ARCADIA SPOT... el encuentro de los mejores gamers del planeta'/>
  </div>
  );
}

export default App;
    
  

  

