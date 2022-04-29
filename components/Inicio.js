import Header from '@components/Header'
import Navbar from '@components/Navbar'

export default function Inicio({socialIcons}){
    const subtitle = 'Una plataforma diseñada para apoyar a los participantes y organizadores del Lima Game Jam. Y crear una experiencia unica para todos.'
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
