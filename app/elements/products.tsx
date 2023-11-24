import Image from 'next/image'
import styles from './products.module.css'

export default function Products(){
    return(
        <div className={styles.container}>
            <div className={styles.stage}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestros Productos</h2>
                    <p className={styles.description}>
                        Contamos con mas de 20 a;os de trayectoria dando atencion a equipos de todas las marcas y capacidades
                    </p>
                </div>
                <div className={styles.itemsContainer}>
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/producto.png"
                                alt="Tarindra Producto"
                                className={styles.product}
                                width={427}
                                height={211}
                            />
                        </div>
                        <div className={styles.name}>Abierta</div>
                        <div className={styles.productDescription}>
                            <p>2 vias de entrada</p>
                            <p>Extremidades cortadas</p>
                            (Almacenes)
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/producto.png"
                                alt="Tarindra Producto"
                                className={styles.product}
                                width={427}
                                height={211}
                            />
                        </div>
                        <div className={styles.name}>Abierta</div>
                        <div className={styles.productDescription}>
                            <p>2 vias de entrada</p>
                            <p>Extremidades largas</p>
                            (Almacenes)
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/producto.png"
                                alt="Tarindra Producto"
                                className={styles.product}
                                width={427}
                                height={211}
                            />
                        </div>
                        <div className={styles.name}>Cerrada</div>
                        <div className={styles.productDescription}>
                            <p>2 vias de entrada</p>
                            <p>(Terminal cargo)</p>
                            
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/producto.png"
                                alt="Tarindra Producto"
                                className={styles.product}
                                width={427}
                                height={211}
                            />
                        </div>
                        <div className={styles.name}>Cerrada</div>
                        <div className={styles.productDescription}>
                            <p>2 vias de entrada</p>
                            <p>(Export Almacenes)</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/producto.png"
                                alt="Tarindra Producto"
                                className={styles.product}
                                width={427}
                                height={211}
                            />
                        </div>
                        <div className={styles.name}>Con techo</div>
                        <div className={styles.productDescription}>
                            <p>2 vias de entrada</p>
                            <p>(Export)</p>
                            
                        </div>
                    </div>
                    
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/producto.png"
                                alt="Tarindra Producto"
                                className={styles.product}
                                width={427}
                                height={211}
                            />
                        </div>
                        <div className={styles.name}>US Stringer cerrada</div>
                        <div className={styles.productDescription}>
                            <p>4 vias de entrada</p>
                            <p>(Export, almacenes)</p>
                            
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/producto.png"
                                alt="Tarindra Producto"
                                className={styles.product}
                                width={427}
                                height={211}
                            />
                        </div>
                        <div className={styles.name}>Doble cara</div>
                        <div className={styles.productDescription}>
                            <p>4 vias de entrada</p>
                            <p>(Export, almacenes)</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/producto.png"
                                alt="Tarindra Producto"
                                className={styles.product}
                                width={427}
                                height={211}
                            />
                        </div>
                        <div className={styles.name}>Doble cara</div>
                        <div className={styles.productDescription}>
                            <p>4 vias de entrada</p>
                            <p>(Export, almacenes)</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/producto.png"
                                alt="Tarindra Producto"
                                className={styles.product}
                                width={427}
                                height={211}
                            />
                        </div>
                        <div className={styles.name}>Euro cerrada</div>
                        <div className={styles.productDescription}>
                            <p>4 vias de entrada</p>
                            <p>(Export, almacenes)</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        
    )
}