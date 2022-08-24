import logo from './logo.svg';
import './App.css';

function App() {
  const mensaje = 'Bienvenido a mi App'


  return (
  <div className= 'container'>
    <h1>Hola Mundo!!</h1>
    <h3>Ya estoy aquí de nuevo</h3>
    <h2 style={ {backgroundColor:'#888'} }>{ mensaje }</h2>
  </div>
  );
}

export default App;
