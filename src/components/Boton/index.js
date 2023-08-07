import "./Boton.css"

const Boton=(props)=>{
    return <button className="boton" title={props.texto}>{props.children}</button>

}

export default Boton;