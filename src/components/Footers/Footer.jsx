import Logo from '../../assets/img/winLogoB.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='footer-links'>
      <div className='Logo-header-footer'>
          <img src={Logo} alt="" />
      </div>

      <div className='number-header-footer'>
       <ul>
        <li><h2>Llámanos al</h2></li>
        <li><a href="#">123</a></li>
       </ul>

      </div>
      </div>
    </div>
  )
}

export default Footer
