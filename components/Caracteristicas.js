export default function Caracteristicas({}){
    const sections = [
        {
            image: '/screenshots/1.png',
            description: 'Muestra tus logros en un perfil de usuario tan único como tú. Muestra tus juegos, logros anteriores, inscríbete a los eventos del LGJ, conoce el tu estatus de la misma y mucho más.'
        },
        {
            image: '/screenshots/3.png',
            description: 'Si te gusta tomar iniciativa, crea un grupo con tus amigos o crea nuevas relaciones. Con nosotros podrás crear o modifica tu grupo, identificarte con una imagen única y subir tu juego al final del evento.'
        },
        {
            image: '/screenshots/6.png',
            description: 'Guarda en tu calendario personalizado, todos los eventos, charlas y talleres que te gustaría participar y recibe notificaciones cuando estos estén por iniciar. ¡Nunca más te pierdas un evento!'
        },
        {
            image: '/screenshots/4.png',
            description: '¡Nunca más te quedes sin grupo! Encuentra personas con la experiencia similares a ti, que buscan tu rol y crea un grupo con ellos. Puedes unirte a un grupo que ya exista o generar uno nuevo.'
        },{
            image: '/screenshots/2.png',
            description: 'Siempre mantén a tus participantes actualizados de todo lo que se viene en el LGJ. Con un calendario de eventos, puedes crear eventos, definir el tipo, quien lo dictara y mucho más'
        },{
            image: '/screenshots/5.png',
            description: 'Conoce a tus participantes, busca a los participantes por nombre, apellido, correo y conocer que áreas son las más populares en cada evento.'
        }
    ]

    const participant = sections.splice(0, 4);
    const organizer = sections;
    return (
    <section class="feature-section" id="features">
        <h1 class="white-text centered-text">Features</h1>
        
        <h2 class="white-text centered-text">Participantes</h2>
        <div class="container grid-2 gap-l">
            {participant.map(({ title, image, description }, index) => (
                <div key={index} className="feature-card">
                    <p className="body-big">{title}</p>
                    <img src={image} alt="" />
                    <p className="text">{description}</p>
                </div>
            ))}
            
        </div>
        <h2 class="white-text centered-text">Organizadores</h2>
        <div class="container grid-2 gap-l">
            {organizer.map(({ title, image, description }, index) => (
                <div key={index} className="feature-card">
                    <p className="body-big">{title}</p>
                    <img src={image} alt="" />
                    <p className="text">{description}</p>
                </div>
            ))}
        </div>

        <h2 class="white-text centered-text">
            ...AND A LOT MORE!!
        </h2>

        <p className="white-text centered-text">
        Conoce Mas: <a target="_blank" href="https://www.youtube.com/watch?v=Z-HJHRHA0G4">
           About the product Video 
        </a>
        </p>
        
        <a href="/" className="centered-text button">ACCEDER</a>
    </section>
    )
}
/*Illustration by <a href="https://icons8.com/illustrations/author/CkHJmwURlxnt">Olha Khomich</a> from <a href="https://icons8.com/illustrations">Ouch!</a>*/