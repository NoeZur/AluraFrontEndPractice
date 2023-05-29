import "./OpcionesForm.css"

const OpcionesForm = (props) =>{
    const equipos= ["Programación","Front-end","Data Science","DevOps","UX y Diseño","Móvil","Innovación y Gestión"]

    return <div className="opciones-form">
            <label>Equipos</label>
            <select value= {props.valor} placeholder="Equipos">
                <option value ="" disabled defaultValue="" hidden>Selecciona un equipo</option>
                    {equipos.map( (equipo, index) => <option key = {index} >{equipo}</option>
//esto puedo hacerlo como arrow function porque quiero retornar una sola linea, sino iria el
//{return <option key = index>{equipo}</option>}
    )}

</select>

    </div>
}
export default OpcionesForm