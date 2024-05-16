import './hero.css'
import hero1 from './img/01-cnc-lathe-machine-guide.png'
import hero2 from './img/02-machinetool.png'
import hero3 from './img/03-torno.png'

const Hero = () => {
  return (
    <main>
        <h1>Somos TALLERES MONTREAL. Nos dedicamos a la fabricación y reparación de piezas y equipos para la industria, según planos, muestras o ingeniería propia.</h1>
      <div className="hero-left">
        <h2>Fabricación y reparación de piezas</h2>
        <h3>Hacé tus piezas <i>a partir de muestras o planos.</i></h3>
      </div>
      <div className="hero-right">
        <div className="mask">
          <div className="img-container">
            <img src={hero3} alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero