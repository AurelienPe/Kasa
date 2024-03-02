import error from '../../images/404.png'
import './404error.css'

function Error() {
  return (
    <div className="error">
      <img src={error} alt="404error" />
      <p className="mobile-error-text">Oups! La page que</p>
      <p className="mobile-error-text">vous demandez n'existe pas.</p>
      <p className="desktop-error-text">Oups! La page que vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d’accueil</a>
    </div>
  )
}

export default Error