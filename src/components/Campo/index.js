import "./Campo.css";

const Campo = (props) =>{    
    const {tipo='text'}=props;
    

    const manejarCambio=(e)=>{
        props.actualizarValor(e.target.value);
    }
    let titulo;
    if(props.titulo==='Foto'){titulo='Foto (Ingresa una URL de Imagen)'}
    else{titulo=props.titulo}

    return <div className={`campo-${tipo}`}>
        <label htmlFor={titulo} > {titulo}</label>
        <input id={titulo} 
        value={props.valor} 
        required={props.required} 
        placeholder={props.placeholder+'...'}
        onChange={manejarCambio}
        type={tipo}
        />
    </div>
}


export default Campo;