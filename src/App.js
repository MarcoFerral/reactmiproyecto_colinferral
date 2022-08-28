import logo from './logo.svg';
import './App.css';
import NavBar2 from './components/NavBar2';
import Bienvenida from './components/Bienvenida';
import Login from './Login';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
  <div className= 'container'>
    <NavBar2/>
    <Bienvenida/>
    <Login/>
    <ItemListContainer greeting='ARCADIA SPOT... el encuentro de los mejores gamers del planeta'/>
  </div>
  );
}

export default App;
    
  

  

