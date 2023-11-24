import styles from './facilities.module.css'

export default function Facilities(){
    return(
        <div className={styles.container}>
            <div className={styles.stage}>
                <div className={styles.title}>
                    Nuestras Instalaciones
                </div>
                <div className={styles.videocontainer}>
                <video className={styles.video} autoPlay loop muted playsinline>
                    <source src="/Video vista general aerea Patio TARINDRA.mp4" />
                </video>
                </div>
            </div>
        </div>
    )
}