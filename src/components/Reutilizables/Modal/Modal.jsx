import './Modal.css'
const Modal = ({children,estado,cambiarEstado}) => {
  return (
    <>
      {estado &&
      <div className='overlay-modal'>
      <div className='container-modal'>
        <div className='header-modal'>
          <h3>Titulo</h3>
        </div>

        <div className='button-close'>
          <button onClick={()=>cambiarEstado(false)}>X</button>
        </div>
        {children}
      </div>
    </div>
      }
    </>
  )
}

export default Modal
