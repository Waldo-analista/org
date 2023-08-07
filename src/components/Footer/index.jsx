import './Footer.css'

const Footer=()=>{
    return <footer className='footer' >
    <div className='footer__contenedor'>
        <a className='footer__logo' href='/' title="Aplicación Organización"><img src="/img/Logo.png" alt='Organización'/></a>
        <div className='footer__iconos'>
            <a className="footer_iconos--redes" href="https://www.facebook.com/waldohidalgooyarcej" title='Facebook de Waldo' target='_blank'>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/>
            </a>
            <a className="footer_iconos--redes" href="https://www.instagram.com/clasestutoriaswaldo/" title='Instagram de Waldo' target='_blank'>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram"/>
            </a>
            <a className="footer_iconos--redes" href="https://www.linkedin.com/in/waldo-hidalgo-oyarce/" title='LinkedIn de Waldo' target='_blank'>
                <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            </a>
            <a className="footer_iconos--redes" href="https://github.com/Waldo-analista/" title='GitHub de Waldo' target='_blank'>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>
            </a>
        </div>
        
    </div>
    <strong className='footer__datosDev'>Desarrollado por <a title="Sitio Web de Waldo Hidalgo"className='footer__link--waldo'href="https://www.waldohidalgo.cl/" target='_blank'>Waldo Hidalgo</a> vía Cursos de AluraLatam</strong>
    </footer>

}

export default Footer;