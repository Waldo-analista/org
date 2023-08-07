import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Formulario from "./components/Formulario";
import MiOrg from "./components/MiOrg";
import CrearEquipo from "./components/CrearEquipo";
import Footer from "./components/Footer";
import { v4 as uuid } from 'uuid';

function App() {
  
  const [mostrarFormulario, actualizarFormulario] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id:uuid(),
      nombre: "Waldo Hidalgo",
      puesto: "Ingeniero/Dev",
      foto: "https://github.com/Waldo-analista.png",
      equipo: "Programación",
      favorito:true
    },
    {
      id:uuid(),
      nombre: "Waldo Hidalgo",
      puesto: "Ingeniero/Dev",
      foto: "https://github.com/Waldo-analista.png",
      equipo: "Front End",
      favorito:false
    },
    {
      id:uuid(),
      nombre: "Waldo Hidalgo",
      puesto: "Ingeniero/Dev",
      foto: "https://github.com/Waldo-analista.png",
      equipo: "UX y Design",
      favorito:false
    },
    {
      id:uuid(),
      nombre: "Waldo Hidalgo",
      puesto: "Ingeniero/Dev",
      foto: "https://github.com/Waldo-analista.png",
      equipo: "Data Science",
      favorito:false
    },
    {
      id:uuid(),
      nombre: "Waldo Hidalgo",
      puesto: "Ingeniero/Dev",
      foto: "https://github.com/Waldo-analista.png",
      equipo: "Innovación y Gestión",
      favorito:false
    },
    {
      id:uuid(),
      nombre: "Harland Lohora",
      puesto: "Ingeniero/Instructor",
      foto: "https://github.com/harlandlohora.png",
      equipo: "Programación",
      favorito:false
    },
  ]);

  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario);
  };

  

  const [equipos,actualizarEquipos ]= useState([
    { id:uuid(),titulo: "Programación", colorDestaque: "#57C278", colorFondo: "#D9F7E9" },
    { id:uuid(),titulo: "Front End", colorDestaque: "#82CFFA", colorFondo: "#E8F8FF" },
    { id:uuid(),titulo: "Data Science", colorDestaque: "#A6D157", colorFondo: "#F0F8E2" },
    { id:uuid(),titulo: "DevOps", colorDestaque: "#E06B69", colorFondo: "#FDE7E8" },
    { id:uuid(),titulo: "UX y Design", colorDestaque: "#DB6EBF", colorFondo: "#FAE9F5" },
    { id:uuid(),titulo: "Móvil", colorDestaque: "#FFBA05", colorFondo: "#FFF5D9" },
    { id:uuid(),titulo: "Innovación y Gestión",colorDestaque: "#FF8A29",colorFondo: "#FFEEDF"},
  ]);

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores=colaboradores.filter(colaborador=>colaborador.id!==id);
    actualizarColaboradores(nuevosColaboradores);
  };

  const actualizarColorEquipo=(color,id)=>{
    const equiposActualizados=equipos.map((equipo)=>{
      if(equipo.id===id){equipo.colorDestaque=color}
      return equipo;
     });
     actualizarEquipos(equiposActualizados);

  }

  const crearEquipo=(nuevoEquipo)=>{
    actualizarEquipos([...equipos,{id:uuid(),...nuevoEquipo}]);
  }

  const manejarLike=(id)=>{
    const colaboradoresActualizados=colaboradores.map(colaborador=>{
      if(colaborador.id===id){
        colaborador.favorito=!colaborador.favorito;
      }
      return colaborador;
    })
    
   actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && (
        <Formulario
          datos={equipos}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg actualizarFormulario={cambiarMostrar} />
      {equipos.map((equipo) => (
        <CrearEquipo
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          key={equipo.titulo}
          datos={equipo}
          eliminarColaborador={eliminarColaborador}
          actualizarColorEquipo={actualizarColorEquipo}
          manejarLike={manejarLike}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;


