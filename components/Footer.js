import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer({socialIcons}) {
  return (
    <>
      <footer>
        <p>
          Contacto:
          <a href="mailto:contacto@limagamejam.com">
              contacto@limagamejam.com
          </a>
        </p>
        <div className='social-icons'>
          {socialIcons.map(({ name, url }) => (
            <a key={name} href={url}>
                <span>{name}</span>
                <FontAwesomeIcon icon={['fab', name]} />
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
