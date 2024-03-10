import logo from '../../images/logo-header-mobile.png'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo kasa"/>
      </a>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">A Propos</a></li>
      </ul>
    </nav>
  )
}

export default Nav;