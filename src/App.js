import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Form from "./components/form/Form";
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';

function App() {
  //aca voy a usar mi primer hook : useState el cambio de estado va a hacer desaparecer el form si toco el button Add de MiOrg

  const [mostrarForm, actualizarMostrar] = useState(false);
  const cambiarMostrar =() => {
    actualizarMostrar (!mostrarForm)
  }

  const equipos= [    
    {titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario:"#D9F7E9"},
    {titulo: "Front-end",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"},
    {titulo: "Data Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"},
    {titulo: "DevOps",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"},
    {titulo: "UX y Diseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"},
    {titulo: "Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"},
    {titulo: "Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"},
    
  ]


  return (
    <div className="App">
      <Header />
{/* //condicional ternario condicion ? seMuestra : noSeMuestra */}
      {mostrarForm === true ? <Form /> : <></>}
      
      <MiOrg cambiarMostrar={cambiarMostrar} /> 
      {/* le estoy pasando la funcion que declaro arriba a miOrg */}
      {equipos.map((equipo) =>  <Equipo datos= {equipo} key ={equipo.titulo}/>)
      }

    </div>
  );
}

export default App;
