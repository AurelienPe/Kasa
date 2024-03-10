import error from '../../images/404.png'
import './error.css'

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
