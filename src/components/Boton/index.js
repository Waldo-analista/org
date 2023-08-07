import "./Boton.css"

const Boton=(props)=>{
    return <button className="boton" title="Crear Colaborador">{props.children}</button>

}

export default Boton;