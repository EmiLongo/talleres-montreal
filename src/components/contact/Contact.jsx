import  '../contact/contact.css'



function Contact () {

const url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0097218949804!2d-60.74253522498566!3d-32.76547656276006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65a946189f8fd%3A0x9f853da7e2f1662a!2sJos%C3%A9%20Marquez%20856%2C%20S2200BOR%20San%20Lorenzo%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1715567713001!5m2!1ses!2sar"   

return(

<div className='cont-contacto'>

        <div className="form-contacto">

               <h2>CONTACTO</h2>
            
              <input type="text" placeholder='Ingrese su nombre' className='f-input m-bottom'/>
              <input type="text" placeholder='Ingrese su email' className='f-input m-bottom'/>
              <textarea name="" id="" placeholder='Ingrese su mensaje' className='f-texta'></textarea>
              <button className='f-enviar-cont'>Enviar</button>

        </div>

        <div className="map-datos">

            <div className='map'> 

               <iframe src={url} frameborder="0"  className='iframe-map'></iframe>
            </div>

            <div className='datos-contacto'> 

                <div className='d-lhe'>

                    <p>TELEFONOS</p>
                    <p></p>


                </div>

                <div className='d-lhe'>

                    <p>HORARIOS</p>

                </div>

                <div className='d-lhe'>

                    <p>EMAIL</p>

                </div>

            </div>

            
        </div>


</div>


);



};

export default Contact