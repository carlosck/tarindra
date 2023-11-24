import styles from './footer.module.css'

export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.stage}>
                <div className={styles.title}>
                    Tarindra @ 2023.
                </div>
            </div>
        </div>
    )
}