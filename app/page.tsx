"use client"
import { useRef } from 'react';

import styles from './page.module.css'
import Menu from './elements/menu'
import Header from './elements/header'
import Badge from './elements/bagde'
import Products from './elements/products'
import Clients from './elements/clients'
import Contact from './elements/contact'
import Facilities from './elements/facilities'
import Footer from './elements/footer'
import Script from 'next/script'


export default function Home() {
  const quienesSomosRef = useRef<null | HTMLDivElement>(null);

  const productosRef = useRef<null | HTMLDivElement>(null);

  const contactoRef = useRef<null | HTMLDivElement>(null);
    
  const gotoQuienesSomos=()=>{
      
      quienesSomosRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const gotoProductos=()=>{
      
      productosRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const gotoContacto=()=>{
      
      contactoRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className={styles.main}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-BZH3YBTQ0E" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-BZH3YBTQ0E');
        `}
      </Script>
      <Menu gotoQuienesSomos={gotoQuienesSomos} gotoProductos={gotoProductos} gotoContacto={gotoContacto} />
      <Header quienesSomosRef={quienesSomosRef} />
      <Badge />
      <Products productosRef={productosRef} />
      <Clients />
      <Facilities />
      <Contact contactoRef={contactoRef}/>
      <Footer />
    </main>
  )
}
