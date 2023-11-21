import Image from 'next/image'
import styles from './header.module.css'
export default function Header(){
    return(

        <div className={styles.container}>
            <div className={styles.stage}>
                <div className={styles.logocontainer}>
                    <Image
                        src="/tarindra_header_logo.png"
                        alt="Tarindra Logo"
                        className={styles.logo}
                        width={537}
                        height={61}
                        priority
                        />
                    <div className={styles.title}>
                        <h1>Tarimas Industriales Ramos S.A de C.V</h1>
                    </div>

                </div>
                <div className={styles.productcontainer}>
                    <Image
                        src="/producto.png"
                        alt="Tarindra Producto"
                        className={styles.product}
                        width={427}
                        height={211}
                        priority
                        />
                </div>

                <div className={styles.description}>
                    <h2 className={styles.descriptionTitle}>
                        Rapidez y calidad garantizada
                    </h2>
                    <p  className={styles.descriptionContent}>Somos fabricantes de tarimas y empaques industriales a la medida y necesidad de cada cliente.</p>
                </div>
            </div>
        </div>
    )
}