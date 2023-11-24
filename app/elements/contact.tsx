'use client';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ContactMap from "./contact_map";
import styles from './contact.module.css'

export default function Contact(){
    const render = (status: Status) => {
        return <h1>{status}</h1>;
      };
    return(
        <div className={styles.container}>
            <div className={styles.stage}>
                <div className={styles.title}>
                    Competitivos en calidad y precio
                </div>
                <div className={styles.locationInfo}>
                    <div className={styles.locationcontainer}>
                        <div className={styles.locationleft}>
                            Los Pinos 1700, Lomas de Santa Cruz, 25092 Saltillo, Coah.
                            <div className={styles.contactItem}>
                                <div className={styles.contactname}>Juan Lopez</div>
                                <div className={styles.contactPhone}>844 2711782</div>
                                <a href='mailto:administracion@tarindra.com' className={styles.contactmail}>administracion@tarindra.com</a>
                            </div>
                        </div>
                        <div className={styles.locationright}>
                            <Wrapper apiKey={"AIzaSyB7MD8Pj3wjLLDGAApkINtkAvG0FJHkCKE"} render={render}>
                                <ContactMap />
                            </Wrapper>
                        
                        </div>
                    </div>
                    <div className={styles.contactcontainer}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactname}>Juan Lopez</div>
                            <div className={styles.contactPhone}>844 2711782</div>
                            <a href='mailto:administracion@tarindra.com' className={styles.contactmail}>administracion@tarindra.com</a>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactname}>Juan Lopez</div>
                            <div className={styles.contactPhone}>844 4444 444</div>
                            <div className={styles.contactmail}>admin@tarindra.com</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}