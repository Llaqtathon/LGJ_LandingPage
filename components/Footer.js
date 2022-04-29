import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer({socialIcons}) {
  return (
    <>
      <footer class="container">
        <p>
          Made with ❤️ by Us For <a href='https://limagamejam.com/'>Lima Game Jam</a>
        </p>
      </footer>
    </>
  )
}
