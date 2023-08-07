import swal from "sweetalert";
import Boton from "../Boton";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import "./Formulario.css"
import { useState } from "react";



const Formulario = (props)=>{

    const [nombre,actualizarNombre]=useState('');
    const [puesto,actualizarPuesto]=useState('');
    const [foto,actualizarFoto]=useState('');
    const [equipo, actualizarEquipo]=useState('Selecciona una opción');
    

    const manejarEnvio=(e)=>{
            e.preventDefault();
            if(equipo==='Selecciona una opción'){swal("¡ Advertencia !",'Debes seleccionar un equipo','warning');}
            else{
                let datosAEnviar={
                    nombre,puesto,foto,equipo
                }
            
                    try{
                        const formatoImagen=foto.split('.').pop().toLowerCase();
                        const formatoPermitido=['jpg','jpeg','png','webp'];
                        if(formatoPermitido.includes(formatoImagen)){
                            props.registrarColaborador(datosAEnviar);
                            console.log('Manejar el envío',datosAEnviar);
                        }else{
                            swal("¡ Advertencia !",'Ingresa una URL de imagen válida: PNG, JPEG, JPG, WEBP','warning');
                        }
                    
                
                }
                    catch{swal("¡ Advertencia !",'Ingresa una URL de imagen válida: PNG, JPEG, JPG, WEBP','warning');}
            
        }
            
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <CampoTexto titulo="Foto" placeholder="Ingresar Foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones datos={props.datos}required valor={equipo} actualizarValor={actualizarEquipo}/>
            <Boton >Crear Colaborador</Boton>
        </form>
    </section>
}


export default Formulario;