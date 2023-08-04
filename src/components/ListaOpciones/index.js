import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "DevOps",
    "UX y Design",
    "Móvil",
    "Innovación y Gestión",
  ];

  const actualizarValue=(e)=>{
    props.actualizarValor(e.target.value);
  }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={actualizarValue} required={props.required}  >
        <option disabled hidden value="Selecciona una opción">
          Selecciona una opción
        </option>
        {equipos.map((elemento,index)=><option key={index} value={elemento}>{elemento}</option>
        )}
        
      </select>
      
    </div>
  );
};

export default ListaOpciones;
