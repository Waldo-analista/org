import './Colaborador.css'

const Colaborador=(props)=>{
    const {nombre,puesto,foto,equipo}=props.datos;
    return <div className='colaborador'>
        <div className='colaborador__encabezado' style={{background:`linear-gradient(${props.colorDestaque} 50%, transparent 50%)`}}>
            <img className="colaborador__encabezado__imagen" src={foto} alt={nombre}/>
        </div>
        <div className='colaborador__info'>
            <h4 className='colaborador__info__titulo'>{nombre}</h4>
            <h5 className='colaborador__info__subtitulo'>{puesto}</h5>
        </div>

    </div>

}

export default Colaborador;