import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Form from "./components/form/Form";
import MiOrg from './components/MiOrg/MiOrg';

function App() {
  //aca voy a usar mi primer hook : useState el cambio de estado va a hacer desaparecer el form si toco el button Add de MiOrg

  const [mostrarForm, actualizarMostrar] = useState(true);
  const cambiarMostrar =() => {
    actualizarMostrar (!mostrarForm)
  }
  return (
    <div className="App">
      <Header />
{/* //condicional ternario condicion ? seMuestra : noSeMuestra */}
      {mostrarForm === true ? <Form /> : <></>}
      
      <MiOrg cambiarMostrar={cambiarMostrar} /> 
      {/* le estoy pasando la funcion que declaro arriba a miOrg */}

    </div>
  );
}

export default App;
