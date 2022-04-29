import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Acerca from '@components/Acerca'

export default function Home() {
  const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur molestie urna, a facilisis tortor ultricies gravida. '

  const socialIcons = [
    { name: 'facebook', url: 'https://facebook.com/limagamejam' },
    { name: 'twitter', url: 'https://twitter.com/limagamejam' },
    { name: 'instagram', url: 'https://instagram.com/limagamejam' },
    { name: 'linkedin', url: '/' }
  ]

  return (
    <>
    <div id="Inicio" className="container">
      <Head>
        <title>Lima Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <Navbar />
      <Header 
        title="Llaqtathon " 
        subtitle={subtitle}
        buttonText="Acceder"
        socialIcons={socialIcons}
      />      
    </div>
    <hr className="divider"/>
    <Acerca/>
    <Footer 
      socialIcons={socialIcons}
    />
    </>
  )
}
