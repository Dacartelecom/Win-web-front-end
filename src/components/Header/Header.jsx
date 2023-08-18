import './Header.css'
import logo from '../../assets/img/winLogo.png'
const Header = () => {
  return (
    <div className="header-win">
      <div className="logo"><img src={logo} /></div>
      <div className="text-header">
        <span className="text-win">number</span>
        <span className="text-number"><a href="#"><strong>(01) 123 456 789</strong><div className='triangulo'/></a></span>
      </div>
    </div>
  )
}

export default Header
