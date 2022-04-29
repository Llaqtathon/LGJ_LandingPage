import Head from 'next/head'
import Footer from '@components/Footer'
import Inicio from '@components/Inicio'
import Acerca from '@components/Acerca'
import Caracteristicas from '@components/Caracteristicas'

export default function Home() {
  

  const socialIcons = [
    { name: 'facebook', url: 'https://facebook.com/limagamejam' },
    { name: 'twitter', url: 'https://twitter.com/limagamejam' },
    { name: 'instagram', url: 'https://instagram.com/limagamejam' },
    { name: 'linkedin', url: '/' }
  ]

  return (
    <>
    <Head>
      <title>Llaqtathon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> 
    <Inicio 
      socialIcons={socialIcons}
      />
    <hr class="divider" />
    <Acerca/>
    <Caracteristicas/>
    <Footer 
      socialIcons={socialIcons}
    />
    </>
  )
}
