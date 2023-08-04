import './MiOrg.css'

const MiOrg = (props)=>{
    
    return <section className="orgSection">
        <h3 className='titulo'>Mi Organización </h3>
        <img onClick={props.actualizarFormulario} src="/img/add.png" alt='add'/>
    </section>

}

export default MiOrg;