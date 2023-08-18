/* eslint-disable react/prop-types */
import './Img.css'
const Imagen = ({ img,text,onclick }) => {
  return (
    <div className='imagen-container' onClick={onclick}>
      <img src={img} alt="" />
      <div className='overlay' >
        <span className='text-plan'><strong>{text}</strong></span>
      </div>
    </div>
  )
}

export default Imagen
