import Image from 'next/image'
import styles from './products.module.css'

export default function Products(props:any){
    return(
        <div className={styles.container} id='productos' ref={props.productosRef}>
            <div className={styles.stage}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestros Productos</h2>
                    <p className={styles.description}>
                        Contamos con mas de 20 años de trayectoria dando atención a equipos de todas las marcas y capacidades
                    </p>
                </div>
                <div className={styles.itemsContainer}>
                    <div className={styles.item}>
                        <div className={styles.productcontainer}>
                            <Image
                                src="/tarimas/tarindra-productos-_0000_Abierta-Cortadas.png"
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
                                src="/tarimas/tarindra-productos-_0001_Abierta-Largas.png"
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
                                src="/tarimas/tarindra-productos-_0002_Cerrada-Cargo.png"
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
                                src="/tarimas/tarindra-productos-_0003_Cerrada-7.png"
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
                                src="/tarimas/tarindra-productos-_0004_Con-Techo.png"
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
                                src="/tarimas/tarindra-productos-_0005_Us-Stringer.png"
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
                                src="/tarimas/tarindra-productos-_0006_Doble-Cara-5.png"
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
                                src="/tarimas/tarindra-productos-_0007_Doble-Cara-8.png"
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
                                src="/tarimas/tarindra-productos-_0008_Euro-Cerrada.png"
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