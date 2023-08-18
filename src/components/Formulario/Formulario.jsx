import './Formulario.css'

const Formulario = () => {
  return (
    <div className="container-background-form">
      
      <div className="form-desktop">
        <div className="background-form">
          <div className="padding">
            <span className='sub-text'>¡Dejanos tu número y nos pondremos en notacto!</span> 
            <br />
            <span>¡Contrata WIN!</span>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="form-mobile">
        <form className="form-container" action="">
            <span>¡Dejanos tu número y nos pondremos en notacto!</span>
            <br /> 
            <span>¡Contrata WIN!</span>
            <br /> 
            <input type="text" />
        </form>
      </div>
    </div>
  )
}

export default Formulario
