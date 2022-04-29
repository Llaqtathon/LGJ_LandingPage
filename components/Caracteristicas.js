export default function Caracteristicas({}){
    const sections = [
        {
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },{
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },{
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },{
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },{
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },{
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },{
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },{
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },{
            title: 'Lorem ipsum dolor sit amet',
            image: '/caracteristicas/1.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
        },

    ]

    return (
    <section class="feature-section" id="caracteristicas">
        <h1 class="white-text centered-text">Caracteristicas</h1>
        <div class="container grid-3">
            {sections.map(({ title, image, description }, index) => (
                <div key={index} className="feature-card">
                    <p className="body-big">{title}</p>
                    <img src={image} alt="" />
                    <p className="text">{description}</p>
                </div>
            ))}
        </div>
    </section>
    )
}
/*Illustration by <a href="https://icons8.com/illustrations/author/CkHJmwURlxnt">Olha Khomich</a> from <a href="https://icons8.com/illustrations">Ouch!</a>*/