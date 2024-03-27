import './banner.css'

/**
 * Function to render a banner with an image and overlay text.
 */
const Banner = ({url, className, altText}) => {
  return (
    <header className="banner">
      <img src={url} alt={altText} />
      <div className={`image-overlay ${className}`}></div>
      <h2 className={className}>Chez vous,<br></br> partout et ailleurs</h2>
    </header>
  )
}

export default Banner
