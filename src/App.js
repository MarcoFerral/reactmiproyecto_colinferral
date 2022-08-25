import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const mensaje = 'Bienvenido a mi App'
  const estilos = {
    backgroundColor:'#888',
    padding: '20px'
  }

  const log = () => { console.log ('Hola'); }
  const log2 = () => { console.log ('Hi!') }

  return (
  <div className= 'container'>
    <Navbar/>
    <ItemListContainer greeting={'Saludos'}/>
    <h1>Hola Mundo!!</h1>
    <h3>Ya estoy aquí de nuevo</h3>
    <h2 style={ estilos }>{ mensaje }</h2>
    <Saludo name='Juan' lastname='Pérez' fn={log}>
      <p>Este es un mensaje extra</p>
    </Saludo>
    <Saludo name='Ximena' lastname='Fernández' fn={log2}>
     <li>Un elemento de lista</li> 
    </Saludo>
    <Saludo name='Violeta' lastname='Smith'/>
  </div>
  );
}

export default App;
