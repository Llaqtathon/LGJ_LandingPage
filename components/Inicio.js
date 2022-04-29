import Header from '@components/Header'
import Navbar from '@components/Navbar'

export default function Inicio({socialIcons}){
    const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '
    return(
    <section id="Inicio">
        <div  className="container">
            <Navbar />
            <Header 
            title="Llaqtathon" 
            subtitle={subtitle}
            buttonText="Acceder"
            socialIcons={socialIcons}
            />      
        </div>
    </section>
    )
    
}
