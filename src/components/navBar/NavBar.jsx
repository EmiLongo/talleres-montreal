import './navBar.css'
import logo from './talleres-montreal.svg'
const NavBar = () => {
  return (
    <header>
      <img src={logo} alt="Logo de Talleres Montreal" height="50" />
      <div className='text'>TALLERES MONTREAL</div>
    </header>
  )
}

export default NavBar