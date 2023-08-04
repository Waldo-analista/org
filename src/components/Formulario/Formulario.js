import Boton from "../Boton";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import "./Formulario.css"
import { useState } from "react";


const Formulario = ()=>{

    const [nombre,actualizarNombre]=useState('');
    const [puesto,actualizarPuesto]=useState('');
    const [foto,actualizarFoto]=useState('');
    const [equipo, actualizarEquipo]=useState('Selecciona una opción');

    const manejarEnvio=(e)=>{
            e.preventDefault();
            if(equipo==='Selecciona una opción'){alert('Debes seleccionar un Equipo')}
            else{
            let datosAEnviar={
                nombre,puesto,foto,equipo
            }
            console.log('Manejar el envío',datosAEnviar);
        }
            
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <CampoTexto titulo="Foto" placeholder="Ingresar Foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones required valor={equipo} actualizarValor={actualizarEquipo}/>
            <Boton >Crear Colaborador</Boton>
        </form>
    </section>
}


export default Formulario;