import logo from '../../images/logo-footer.png'
import './footer.css'

/**
 * Defines the Footer component, which renders the footer section of the website.
 */
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer