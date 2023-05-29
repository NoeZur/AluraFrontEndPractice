import { useState } from "react";
import "./Form.css";
import TextField from "../TextField/TextField";
import OpcionesForm from "../OpcionesForm/OpcionesForm";
import ButtonSubmit from "../buttonSubmit/ButtonSubmit";


const Form = ()=> {
    const [nombre, setNombre]= useState("")
    const [puesto, setPuesto]= useState("")
    const [foto, setFoto]= useState("")

    const manejarSubmit = (e)=>{
        e.preventDefault()
        console.log("Manejar envío")
        let datosRecogidos = {
            nombre: nombre,
            puesto: puesto,
            foto: foto
        }
        console.log(datosRecogidos);
    }
    return <section className="formulario">
            <form className="formLogin" onSubmit={manejarSubmit}> 
            <h2>Rellena el formulario para ingresar un colaborador</h2>
        <TextField titulo="Nombre" placeholder = "Escribe tu nombre" required={true} 
        valorInput={nombre} setValor={setNombre}/> 
        
        <TextField titulo= "Puesto" placeholder="Puesto al que se propone" required 
        valorInput={puesto} setValor={setPuesto}/>
        <TextField titulo= "Foto" placeholder="Ingresar enlace de foto" required
        valorInput={foto} setValor={setFoto}/>
        <OpcionesForm required/>
        <ButtonSubmit> Crear </ButtonSubmit> 
    
            </form>
            </section>
}
export default Form;

