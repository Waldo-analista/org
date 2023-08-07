import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Formulario from "./components/Formulario";
import MiOrg from "./components/MiOrg";
import CrearEquipo from "./components/CrearEquipo";
import Footer from "./components/Footer";



function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(true);
  const [colaboradores,actualizarColaboradores]=useState([
    {nombre:'Waldo Hidalgo',puesto:'Ingeniero/Dev',foto:'https://github.com/Waldo-analista.png',equipo:'Programación'},
          {nombre:'Waldo Hidalgo',puesto:'Ingeniero/Dev',foto:'https://github.com/Waldo-analista.png',equipo:'Front End'},
          {nombre:'Waldo Hidalgo',puesto:'Ingeniero/Dev',foto:'https://github.com/Waldo-analista.png',equipo:'UX y Design'},
        {nombre:'Waldo Hidalgo',puesto:'Ingeniero/Dev',foto:'https://github.com/Waldo-analista.png',equipo:'Data Science'},
      {nombre:'Waldo Hidalgo',puesto:'Ingeniero/Dev',foto:'https://github.com/Waldo-analista.png',equipo:'Innovación y Gestión'},
    {nombre:'Harland Lohora',puesto:'Ingeniero/Instructor',foto:'https://github.com/harlandlohora.png',equipo:'Programación'}]);

  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario);
  };

  const equipos = [
    {titulo:"Programación",colorDestaque:'#57C278',colorFondo:'#D9F7E9'},
    {titulo:"Front End",colorDestaque:'#82CFFA',colorFondo:'#E8F8FF'},
    {titulo:"Data Science",colorDestaque:'#A6D157',colorFondo:'#F0F8E2'},
    {titulo:"DevOps",colorDestaque:'#E06B69',colorFondo:'#FDE7E8'},
    {titulo:"UX y Design",colorDestaque:'#DB6EBF',colorFondo:'#FAE9F5'},
    {titulo:"Móvil",colorDestaque:'#FFBA05',colorFondo:'#FFF5D9'},
    {titulo:"Innovación y Gestión",colorDestaque:'#FF8A29',colorFondo:'#FFEEDF'}
  ];

  const registrarColaborador=(colaborador)=>{
    actualizarColaboradores([...colaboradores,colaborador]);
  }

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Formulario datos={equipos} registrarColaborador={registrarColaborador}/>}
      <MiOrg actualizarFormulario={cambiarMostrar} />
      {equipos.map((equipo)=><CrearEquipo colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)} key={equipo.titulo} datos={equipo}/>
      )}
      <Footer/>
      
      
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo con Reactjs
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>
*/
