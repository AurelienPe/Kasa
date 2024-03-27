import error from '../../images/404.png'
import './error.css'

/**
 * Renders an error page with a 404 error message and a link to the home page.
 */
const Error = () => {
  return (
    <main className="error">
      <img src={error} alt="404error" />
      <p>Oups! La page que<br></br> vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d’accueil</a>
    </main>
  )
}

export default Error
