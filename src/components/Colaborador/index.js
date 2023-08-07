import './Colaborador.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from 'react-icons/ai';


const Colaborador=(props)=>{
    const {nombre,puesto,foto,id,favorito}=props.datos;
    const {eliminarColaborador, manejarLike}=props;
    
    return <div className='colaborador'>
        <div className='colaborador__boton--borrar' title='Eliminar Colaborador' onClick={()=>eliminarColaborador(id)}><AiFillCloseCircle/></div>
        <div className='colaborador__encabezado' style={{background:`linear-gradient(${props.colorDestaque} 50%, transparent 50%)`}}>
            <img className="colaborador__encabezado__imagen" src={foto} alt={nombre}/>
        </div>
        <div className='colaborador__info'>
            <h4 className='colaborador__info__titulo'>{nombre}</h4>
            <h5 className='colaborador__info__subtitulo'>{puesto}</h5>
            {favorito?<AiFillHeart color='red' onClick={()=>manejarLike(id)}/>:<AiOutlineHeart onClick={()=>manejarLike(id)}/>}
        </div>

    </div>

}

export default Colaborador;