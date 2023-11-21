'use client';
import styles from './menu.module.css';
import { useRef } from 'react';
export default function Menu(){

    const quienesSomosMenu = useRef(null);
    
    function gotoQuienesSomos(){
        console.log('gotoQuienesSomos');
    }
    function gotoProductos(){
        console.log('gotoProductos');
    }
    function gotoContacto(){
        console.log('gotoContacto');
    }
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
                        <div className={styles.menuSection} onClick={gotoQuienesSomos}>
                            Quienes Somos
                        </div>
                        <div className={styles.menuSection} onClick={gotoProductos}>
                            Productos
                        </div>
                        <div className={styles.menuSection} onClick={gotoContacto}>
                            Contacto
                        </div>
                    </div>
                    <div className={styles.phonecontainer}>
                        <p>844 2444 44 44</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}