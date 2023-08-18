import img1 from '../../assets/img/WEB1.webp';
import img2 from '../../assets/img/WEB2.webp';
import img3 from '../../assets/img/WEB3.webp';
import Imagen from '../Reutilizables/ShadowIng/Img';
import Modal from '../Reutilizables/Modal/Modal';
import { useState } from 'react';
import './Planes.css'

const Planes = () => {
  const[estadoModal1,setEstadoModal1]=useState(false)
  const[estadoModal2,setEstadoModal2]=useState(false)
  const[estadoModal3,setEstadoModal3]=useState(false)
  return (
    <div className='container-box'>
      <div className='img-galery'>
        <Imagen 
        img={img1} 
        text='Planes Gamer'
        onclick={()=>setEstadoModal1(!estadoModal1)}
        />
        <Modal
            estado={estadoModal1}
            cambiarEstado={setEstadoModal1}
        >
          <div className='content-modal'>
          <h1>Vestana Modal</h1>
          <p>Reutilizable y con opciones de personalización</p>
          </div>
        </Modal>
      </div>
      <div className='img-izquierda'>

      <div className='img-galery'>
        <Imagen 
        img={img2}
        text='Planes Duo'
        onclick={()=>setEstadoModal2(!estadoModal2)}
        />
        <Modal
            estado={estadoModal2}
            cambiarEstado={setEstadoModal2}
        >
          <div className='content-modal'>
          <h1>Vestana Modal</h1>
          <p>Reutilizable y con opciones de personalización</p>
          </div>
        </Modal>
      </div>

      <div className='img-galery'>
        <Imagen img={img3}
        text='Planes Trio'
        onclick={()=>setEstadoModal1(!estadoModal3)}
        />
        <Modal
            estado={estadoModal3}
            cambiarEstado={setEstadoModal3}
        >
          <div className='content-modal'>
          <h1>Vestana Modal</h1>
          <p>Reutilizable y con opciones de personalización</p>
          </div>
        </Modal>
      </div>

      </div>
    </div>
  )
}

export default Planes
