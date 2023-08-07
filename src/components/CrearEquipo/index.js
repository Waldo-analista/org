import "./CrearEquipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const CrearEquipo=(props)=>{
    const {titulo,colorDestaque,colorFondo,id}=props.datos;
    const {colaboradores,eliminarColaborador,actualizarColorEquipo,manejarLike}=props;   

    const cambiarColor=(event)=>{
        actualizarColorEquipo(event.target.value,id);
    } 

    
    return colaboradores.length>0 && <section className="equipo" style={{backgroundColor:hexToRgba(colorDestaque,'0.3')}}>
        <div className='equipo__contenedorColor'>
            <label htmlFor={titulo} className='equipo__contenedorColor__titulo'>Selecciona un color <img src="https://img.icons8.com/stickers/100/arrow.png" alt="arrow"/> </label>
        <input
        id={titulo}
        className="equipo__seleccionarColor"
        type="color"
        value={colorDestaque}
        onChange={cambiarColor}/>
        </div>

        <h3 className="equipo__titulo" style={{borderBottomColor: colorDestaque}}>{titulo}</h3>
        <div className="equipo__colaboradores">
            {colaboradores.map((colaborador,index)=>{
                {return <Colaborador eliminarColaborador={eliminarColaborador} key={index} datos={colaborador} colorDestaque={colorDestaque} manejarLike={manejarLike}/>}
            })}
                
        </div>
    </section>;
}

export default CrearEquipo;



