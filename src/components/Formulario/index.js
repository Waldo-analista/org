import swal from "sweetalert";
import Boton from "../Boton";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import "./Formulario.css"
import { useState } from "react";



const Formulario = (props)=>{

    const [nombre,actualizarNombre]=useState('');
    const [puesto,actualizarPuesto]=useState('');
    const [foto,actualizarFoto]=useState('');
    const [equipo, actualizarEquipo]=useState('Selecciona una opción');
    const [titulo,actualizarTitulo]=useState('');
    const [color,actualizarColor]=useState('#31ea1a');
    
    const {crearEquipo}=props;

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
                        }else{
                            swal("¡ Advertencia !",'Ingresa una URL de imagen válida: PNG, JPEG, JPG, WEBP','warning');
                        }
                    
                
                }
                    catch{swal("¡ Advertencia !",'Ingresa una URL de imagen válida: PNG, JPEG, JPG, WEBP','warning');}
            
        }
            
    }

    const manejarCrearEquipo=(e)=>{
        e.preventDefault();
     
            if(!props.datos.map(equipo=>equipo.titulo).includes(titulo)){
            crearEquipo({titulo,colorFondo:color,colorDestaque:color});
                swal("¡ Éxito !",'El equipo ha sido creado. Crea ahora un colaborador','success');
            }else{
                swal("¡ Advertencia !",'Este equipo ya ha sido ingresado','warning');
            }       

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el <span style={{fontWeight:700}}>Colaborador</span></h2>
            <Campo titulo="Nombre" placeholder="Ingresar Nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo titulo="Puesto" placeholder="Ingresar Puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar Foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones datos={props.datos}required valor={equipo} actualizarValor={actualizarEquipo}/>
            <Boton texto="Crear Colaborador">Crear Colaborador</Boton>
        </form>
        <form onSubmit={manejarCrearEquipo}>
            <h2>Rellena el formulario para crear el <span style={{fontWeight:700}}>Equipo</span></h2>
            <Campo titulo="Titulo" placeholder="Ingresar Titulo" required valor={titulo} actualizarValor={actualizarTitulo} />
            <Campo tipo="color" titulo="Color" placeholder="Ingresar el color en Hex" required valor={color} actualizarValor={actualizarColor}/>
            <Boton texto="Registrar Equipo">Registrar Equipo</Boton>
        </form>
    </section>
}


export default Formulario;