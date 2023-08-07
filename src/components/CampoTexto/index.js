import "./CampoTexto.css";

const CampoTexto = (props) =>{    
    

    const manejarCambio=(e)=>{
        props.actualizarValor(e.target.value);
    }
    let titulo;
    if(props.titulo==='Foto'){titulo='Foto (Ingresa una URL de Imagen)'}
    else{titulo=props.titulo}

    return <div className="campo-texto">
        <label> {titulo}</label>
        <input 
        value={props.valor} 
        required={props.required} 
        placeholder={props.placeholder+'...'}
        onChange={manejarCambio}
        />
    </div>
}


export default CampoTexto;