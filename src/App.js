import './App.css';
import NavBar2 from './components/NavBar2';
import Bienvenida from './components/Bienvenida';
import Login from './Login';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  
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
  <div className= 'container'>
    <NavBar2/>
    <div className='my-5'>
      <strong>Contador: {counter}</strong>
    </div>
    <button onClick={handleClick} className='btn my-5'>Click</button>
    <Bienvenida/>
    <Login/>
    <ItemListContainer greeting='ARCADIA SPOT... el encuentro de los mejores gamers del planeta'/>
  </div>
  );
}

export default App;
    
  

  

