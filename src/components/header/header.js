import logo from '../../images/logoheadermobile.png'
import './header.css'

function Header() {
  return (
    <nav>
      <img src={logo} alt="logo kasa" />

      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">A Propos</a></li>
      </ul>
    </nav>
  )
}

export default Header;