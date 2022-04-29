export default function Navbar() {
    const menu = ['Inicio', 'Acerca', 'Caracteristicas', 'Contacto'];

    return (
        <nav>
            <ul class="menu-bar">
                {menu.map(item => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <a className="" href="#">
                Acceder
            </a>
        </nav>
    )
  }