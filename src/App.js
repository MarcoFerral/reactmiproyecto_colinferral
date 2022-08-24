import logo from './logo.svg';
import './App.css';

function App() {
  const mensaje = 'Bienvenido a mi App'
  const estilos = {
    backgroundColor:'#888',
    padding: '20px'
  }

  return (
  <div className= 'container'>
    <h1>Hola Mundo!!</h1>
    <h3>Ya estoy aquí de nuevo</h3>
    <h2 style={ estilos }>{ mensaje }</h2>
  </div>
  );
}

export default App;
