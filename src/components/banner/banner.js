import './banner.css'

const Banner = ({ banner, style }) => {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <div style={style} class="image-overlay"></div>
      <h2 style={style} className="banner-desktop">Chez vous, partout et ailleurs</h2>
      <h2 style={style} className="banner-mobile">Chez vous,</h2>
      <h2 style={style} className="banner-mobile">partout et ailleurs</h2>
    </div>
  )
}

export default Banner