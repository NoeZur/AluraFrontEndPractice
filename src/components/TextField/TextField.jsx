import { useState } from "react";
import "./TextField.css"

const TextField = (props) => {
    const [valorInput, setValor] = useState ("")
    const placeholderModificado = `${props.placeholder}...`;

    const setChange =(e)=>{
        props.setValor (e.target.value)
    }
    return <div className="campo-texto">
        <label>{props.titulo} </label>
        <input placeholder={placeholderModificado} required={props.required} value={props.valorInput} onChange={setChange}/> 
    {/* aca puedo usar cualquier metodo tbn. como place holder es un string, puedo usar metodos de strings */}
        </div>  
} 
export default TextField;