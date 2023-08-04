import "./CampoTexto.css";

const CampoTexto = (props) =>{    
    

    const manejarCambio=(e)=>{
        props.actualizarValor(e.target.value);
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        value={props.valor} 
        required={props.required} 
        placeholder={props.placeholder+'...'}
        onChange={manejarCambio}
        />
    </div>
}


export default CampoTexto;