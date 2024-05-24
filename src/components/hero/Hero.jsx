import { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './hero.css'
import hero1 from './img/01-cnc-lathe-machine-guide.png'
import hero2 from './img/02-machinetool.png'
import hero3 from './img/03-torno.png'

const Hero = () => {
  const [slider, setSlider] = useState(1)
  const title = ['','Hacé tus piezas a partir de muestras o planos.', 'Obtené mecanizados de piezas de alta precisión y calidad', 'Variedad de materiales en fresados, roscados, soldadura']
  useEffect(() => {
    setTimeout(()=>{
      if(slider == 3){
        setSlider(1)
      } else {
        setSlider(slider+1)
      }
    },7000)
  

  }, [slider])
  

  return (
    <main>
        <h1>Somos TALLERES MONTREAL. Nos dedicamos a la fabricación y reparación de piezas y equipos para la industria, según planos, muestras o ingeniería propia.</h1>
          <div className="hero-left">
            <h2>Fabricación y reparación de piezas</h2>
            {/* <div className="points-container">
              <div className={slider == 1 ? "points active" : "points"} onClick={()=>{setSlider(1)}}></div>
              <div className={slider == 2 ? "points active" : "points"} onClick={()=>{setSlider(2)}}></div>
              <div className={slider == 3 ? "points active" : "points"} onClick={()=>{setSlider(3)}}></div>
            </div> */}
            <SwitchTransition>
              <CSSTransition
                key={slider}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
                classNames="slide"
              >
              <h3>{title[slider]}</h3>

              </CSSTransition>
            </SwitchTransition>
          </div>
      <div className="hero-right">
        <div className="mask">
          <div className="img-container">
            <div className='blue-filter'></div>
            <SwitchTransition>
              <CSSTransition
                key={slider}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
                classNames="fade"
              >
                <img id='slider-img' src={slider == 1 ? hero1 : slider == 2 ? hero2 : hero3} alt="imagen de portada" />

              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero