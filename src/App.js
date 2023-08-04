import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Formulario from "./components/Formulario/Formulario.js";
import MiOrg from "./components/MiOrg";

function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(true);

  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario);
  };

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Formulario />}
      <MiOrg actualizarFormulario={cambiarMostrar} />
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
