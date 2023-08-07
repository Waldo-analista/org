import "./CrearEquipo.css"
import Colaborador from "../Colaborador";

const CrearEquipo=(props)=>{
    const {titulo,colorDestaque,colorFondo}=props.datos;
    const {colaboradores}=props;    

    
    return colaboradores.length>0 && <section className="equipo" style={{backgroundColor:colorFondo}}>
        <h3 className="equipo__titulo" style={{borderBottomColor: colorDestaque}}>{titulo}</h3>
        <div className="equipo__colaboradores">
            {colaboradores.map((colaborador,index)=>{
                {return <Colaborador key={index} datos={colaborador} colorDestaque={colorDestaque}/>}
            })}
                
        </div>
    </section>;
}

export default CrearEquipo;



