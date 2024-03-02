import logo from '../../images/logofooter.png'
import './footer.css'

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer