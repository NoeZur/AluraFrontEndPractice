import "./OpcionesForm.css"

const OpcionesForm = () =>{
    const equipos= ["Programación","Front-end","Data Science","DevOps","UX y Diseño","Móvil","Innovación y Gestión"]

    return <div className="opciones-form">
<label>Equipos</label>
<select placeholder="Equipos">
    {equipos.map( (equipo, index) => <option key = {index} >{equipo}</option>
//esto puedo hacerlo como arrow function porque quiero retornar una sola linea, sino iria el
//{return <option key = index>{equipo}</option>}
    )}

</select>

    </div>
}
export default OpcionesForm