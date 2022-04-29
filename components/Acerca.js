export default function Acerca({}){
    const sections = [
        {
            title: '<Game Jam>',
            subtitle: 'Un evento diferente',
            text: 'Los game jams son espacios para prototipar ideas en un corto plazo de tiempo y una excelente manera de conocer cómo se hace un videojuego. Desde 2012 organizamos anualmente el Lima Game Jam como parte del Global Game Jam para dar esta posibilidad a decenas de interesados en la creación de videojuegos.'
        },
        {
            title: '// Organización',
            subtitle: 'Conoce más acerca del LGJ',
            text: `Los game jams son espacios para prototipar ideas en un corto plazo de tiempo y una excelente manera de conocer cómo se hace un videojuego. 
        
            Desde 2012 se organiza anualmente el Lima Game Jam como parte del Global Game Jam para dar esta posibilidad a decenas de interesados en la creación de videojuegos.`
        },
        {
            title: '// Plataforma',
            subtitle: 'Una aplicación pensada para todos',
            text: `Los game jams son espacios para prototipar ideas en un corto plazo de tiempo y una excelente manera de conocer cómo se hace un videojuego.`
        }
    ]

    return (
    <section class="about-section" id="Acerca">
        <div class="container">
            <div>
            {sections.map(({ title, subtitle, text }, index) => (
                <div key={index} className="description">
                    <h1>{title}</h1>
                    <p className="body-big">{subtitle}</p>
                    <p className="text">{text}</p>
                </div>
            ))}
            </div>
            <img src="/about-image.png" alt="freelancer"/>
        </div>
    </section>
    )
}
/*Illustration by <a href="https://icons8.com/illustrations/author/CkHJmwURlxnt">Olha Khomich</a> from <a href="https://icons8.com/illustrations">Ouch!</a>*/