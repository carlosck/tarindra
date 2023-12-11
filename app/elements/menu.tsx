
import styles from './menu.module.css';

export default function Menu(props:any){

    
    return(
        <div className={styles.menu}>
            <div className={styles.menuStage}>
                <div className={styles.menuLeft}>
                    <div className={styles.logocontainer}>
                        Tarindra
                    </div>
                </div>
                <div className={styles.menuRight}>
                    <div className={styles.menuSectionContainer}>
                        <a className={styles.menuSection} onClick={props.gotoQuienesSomos}>
                            Quienes Somos
                        </a>
                        <div className={styles.menuSection} onClick={props.gotoProductos}>
                            Productos
                        </div>
                        <div className={styles.menuSection} onClick={props.gotoContacto}>
                            Contacto
                        </div>
                    </div>
                    <div className={styles.phonecontainer}>
                        <p>844 2711782</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}