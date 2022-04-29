export default function Acerca({}){
    const sections = [
        {
            title: '<Game Jam>',
            subtitle: 'Un evento diferente',
            text: 'Los game jams son espacios para prototipar ideas en un corto plazo de tiempo y una excelente manera de conocer cómo se hace un videojuego. Los participantes pueden formar parte de diferentes disciplinas relacionadas con el desarrollo de videojuegos y pueden organizarse de forma individual o por equipos.'
        },
        {
            title: '// Organización',
            subtitle: 'Conoce más acerca del LGJ',
            text: `Evento peruano de desarrollo de videojuegos y creación de juegos de mesa más importante a nivel local. Sede oficial del Global Game Jam desde el 2012. El Lima Game Jam es también una oportunidad para que los diferentes actores de la industria nacional de videojuegos se reúnan y contribuyan en torno a un fin común. Desde estudios de videojuegos a entidades públicas, pasando por instituciones educativas y comunidades, todos suman para convertir el evento en una tradición.`
        },
        {
            title: '// Plataforma',
            subtitle: 'Una aplicación pensada para todos',
            text: `Reconocemos el potencial que tienen lo Game Jam de incentivar el desarrollo, crear nuevas relaciones e incrementar el interés por la innovación y nuevas tecnologías. Por ello hemos desarrollado una aplicación que responde a las necesidades de los usuarios de LGJ y que facilite todo el proceso de participar y organizar este increíble evento.`
        }
    ]

    return (
    <section class="about-section" id="about">
        <figure class="overlay-image">
            <img src="/about-outer-image.jpg" alt="Photo of Women at the Meeting"/>
        </figure>
        <div class="container grid-2">
            <div>
            {sections.map(({ title, subtitle, text }, index) => (
                <div key={index} className="description">
                    <h1>{title}</h1>
                    <p className="body-big">{subtitle}</p>
                    <p className="text">{text}</p>
                </div>
            ))}
            </div>
            <img class="about-image" src="/about-image.png" alt="freelancer"/>
        </div>
    </section>
    )
}
/*Illustration by <a href="https://icons8.com/illustrations/author/CkHJmwURlxnt">Olha Khomich</a> from <a href="https://icons8.com/illustrations">Ouch!</a>*/

//Photo by RF._.studio: https://www.pexels.com/photo/photo-of-women-at-the-meeting-3810792/