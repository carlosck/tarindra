import Image from 'next/image'
import styles  from './clients.module.css'

export default function Clients(){
    return(
        <div className={styles.fullcontainer}>
            <div className={styles.containerHeader}>
                <div className={styles.stageHeader}>
                    <h3 className={styles.title}>
                        Tenemos la experiencia de entregar tarimas a grandes empresas, con gran demanda y calidad
                    </h3>
                    <p className={styles.description}>
                        <span>Tarimas Industriales Ramos SA de CV</span> es una empresa creada en 2006 con la expectativa de producir productos de madera para servicio de empresas y negocios para el mejoramiento de embalaje y empaque para envíos locales y de exportación. De un negocio modesto se ha convertido en una empresa especializada en tarimas y empaques de madera.
                    </p>
                </div>
            </div>
            <div className={styles.containerclients}>
                <div className={styles.containerBG}></div>
                <div className={styles.stageclients}>
                    
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/zappa.png"
                            alt="Zapa"
                            className={styles.clientLogo}
                            width={160}
                            height={160}
                            priority
                        />
                    </div>
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/FlambeauOG.png"
                            alt="FlambeauOG"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    
                    
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/ZF_Sachs_logo.svg.png"
                            alt="ZF_Sachs_logo"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/santa-anita-logo-D723FBE8D5-seeklogo.com.png"
                            alt="Santa Anita"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/PaceIndustries-Corporate-Logo.png"
                            alt="Pace"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/Nutec.png"
                            alt="Nutec"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    
                    
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/MAhle.webp"
                            alt="MAhle"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/AceroPrime.png"
                            alt="AceroPrime"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/askoll-logo2.png"
                            alt="askoll-logo2"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/Bic logo.png"
                            alt="Bic logo"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    
                    
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/TitanX simple.png"
                            alt="TitanX"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    
                    
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/IMMI.jpeg"
                            alt="IMMI.jpeg"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/Mubea_logo.svg.png"
                            alt="Mubea_logo"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/Delfingen Industry.gif"
                            alt="Delfingen Industry"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/Penoles_Logo.svg.png"
                            alt="Penoles_Logo"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/logo maprid.jpg"
                            alt="logo maprid"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    <div className={styles.client}>
                        <Image
                            src="/clients/png/LOGO WINDSOR.jpg"
                            alt="LOGO WINDSOR"
                            className={styles.clientLogo}
                            width={161}
                            height={137}
                            priority
                        />
                    </div>
                    
                    
                    
                </div>
            
            </div>
        </div>
        
    )
}