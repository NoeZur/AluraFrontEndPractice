import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props)=> {
    // Estados -> hooks = useState
    const manejarClickAdd = ()=>{
        console.log("Mostrar/ocultar formulario", props)
    }
    return <section className="orgSection"> 
        <h3 className="title"> Mi Organización</h3>
        <img src="img/addButton.png" alt= "button agregar" onClick={props.cambiarMostrar}/>
        <div className="cardsColaborador">

        </div>

</section>

}
export default MiOrg;