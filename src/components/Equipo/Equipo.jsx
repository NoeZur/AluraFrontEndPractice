import React from 'react'
import "./Equipo.css"

const Equipo = (props) => {
    const {colorPrimario, colorSecundario, titulo} = props.datos
    const titleStyle= {borderColor: colorPrimario}
  
    return <section className='equipo' style={{backgroundColor: colorSecundario}}>
        <h3 style={{titleStyle}}>{titulo}</h3>
        <div className='colaboradores'></div>

      
    </section>
  
}

export default Equipo
