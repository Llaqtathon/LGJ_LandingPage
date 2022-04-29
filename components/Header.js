import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header({ title, subtitle, buttonText, socialIcons }) {
  return <header class="grid-2">
    <div class="header-content">
      <h1 className="title">{title}</h1>
      <p className="subtitle body-big">{subtitle}</p >
      <a href="/" className="button">{buttonText}</a>
      <div className="social-icons">
        {socialIcons.map(({ name, url }) => (
          <a key={name} href={url}>
            <FontAwesomeIcon icon={['fab', `${name}`]} />
          </a>
        ))}
      </div>
    </div>
    <figure className='header-image'>
      <img src="/header-image.png" alt="Young man in orange headphones sitting at green table and using computer" />
    </figure>
  </header>
}


/**
 * Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
 */
