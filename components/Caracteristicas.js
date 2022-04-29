export default function Caracteristicas({}){
    const sections = [
        {
            image: '/screenshots/1.png',
            description: 'Muestra tus logros en un perfil de usuario tan unico como tu. Muestra tus juegos logros anteriores, inscribite a los eventos del LGJ, conoce el tu estatus de la misma y mucho mas.'
        },
        {
            image: '/screenshots/3.png',
            description: 'Si te gusta tomar iniciativa, crea un grupo con tus amigos o con crea nuevas relaciones. Con nosotros podras crar o modifica tu grupo, idenficiate con una imagen unica y subit tu juego al final del evento'
        },
        {
            image: '/screenshots/6.png',
            description: 'Guarda en tu calendario personalizado, todos los eventos, charlas y talleres que te gustaria participar y recibe notificaciones cuando estos esten por iniciar. Nunca mas te pierdas un evento!'
        },
        {
            image: '/screenshots/4.png',
            description: 'Nunca mas te quedes sin grupo! Encuentra personas con los experiencias similares a ti, que buscan tu rol y crea un grupo con ellos. Puedes unirte a un grupo que ya exista o crear uno nuevo.'
        },{
            image: '/screenshots/2.png',
            description: 'Siempre manten a tus participantes actualizados de todo lo que se viene en el LGJ. Con un calendario de eventos, puedes crear eventos, definir el tipo, quien lo dictara y mucho mas.'
        },{
            image: '/screenshots/5.png',
            description: 'Conoce a tus participantes, busca a los participantes por nombre, apellido, correo y conocer que areas son las mas populares en cada evento.'
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
            AND A LOT MORE!!
        </h2>

        <a href="/" className="centered-text button">ACCEDER</a>
    </section>
    )
}
/*Illustration by <a href="https://icons8.com/illustrations/author/CkHJmwURlxnt">Olha Khomich</a> from <a href="https://icons8.com/illustrations">Ouch!</a>*/