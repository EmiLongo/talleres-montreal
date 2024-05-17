import './navBar.css'
import logo from './talleres-montreal.svg'
import copy from './copy.svg'
import { useState } from 'react'

const NavBar = () => {
  // dirigir a las secciones
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  
  // enviar correo
  const handleEmailClick = () => {
    window.location.href = `mailto:"talleresmontrealsrl@gmail.com"`;
  }

  // copiar mail al portapapeles
  const [alertMsg, setAlertMsg] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('talleresmontrealsrl@gmail.com')
      .then(() => {
        setAlertMsg(true);
        setTimeout(() => {
          setAlertMsg(false);
        }, 3000); //
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
      });
  };
  
  
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo de Talleres Montreal" height="50" />
        <div className='text'>TALLERES MONTREAL</div>
      </div>

      <div className='nav-items'>
        <ul>
          <li className='menu-hover' onClick={() => handleScroll('services')}>Servicios</li>
          <li className='menu-hover' onClick={() => handleScroll('about-us')}>Quiénes Somos</li>
          <li className='menu-hover' onClick={() => handleScroll('contact')}>Contacto</li>
        </ul>
      </div>
      <div className='nav-items'>
        <p onClick={handleEmailClick}>talleresmontrealsrl@gmail.com</p>
        <img onClick={handleCopy} src={copy} alt="botón de copiar mail" width='20' />
        {alertMsg && <span>¡Email copiado al portapapeles!</span>}
      </div>
    </header>
  )
}

export default NavBar