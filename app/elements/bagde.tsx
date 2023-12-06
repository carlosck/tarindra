import Image from 'next/image'
import styles from './badge.module.css'

export default function Badge(){
    return(
        <div className={styles.container}>
            <div className={styles.stageBG}></div>
            <div className={styles.stage}>
                <div className={styles.badgecontainer}>
                    <Image
                        src="/tarindra-certificado.png"
                        alt="Tarindra Badge"
                        className={styles.badge}
                        width={252}
                        height={205}
                        priority
                        />
                </div>
                <div className={styles.contentcontainer}>
                    <h3 className={styles.contentTitle}>MX-343</h3>
                    <p className={styles.contentDescription}>
                    Tenemos Horno Propio  el cual estamos autorizados ante la SEMARNAT 
                    Para aplicar Tratamientos Térmicos  para Exportación de sus Productos
                    Teniendo nuestra marca  para ese propósito MX HT 343.

                    </p>
                    <a href="#" className={styles.masinfoButton}>Mas Info ----</a>
                </div>
            </div>
            
        </div>
    )
}