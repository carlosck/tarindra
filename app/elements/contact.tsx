import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {useState, useRef, useEffect} from 'react';
import ContactMap from "./contact_map";
import styles from './contact.module.css'

export default function Contact(props:any){
    const render = (status: Status) => {
        return <h1>{status}</h1>;
      };
       

      
    return(
        <div className={styles.container} ref={props.contactoRef}>
            <div className={styles.stage}>
                <div className={styles.title}>
                    Competitivos en calidad y precio
                </div>
                <div className={styles.locationInfo}>
                    <div className={styles.locationcontainer}>
                        <div className={styles.locationleft}>
                        Carretera Los Pinos # 1700 Col La Esmeralda, CP 25902 Ramos Arizpe, Coah. MEX
                            <div className={styles.contactItem}>
                                <div className={styles.contactPhone}>844 2711782</div>
                                <a href='mailto:administracion@tarindra.com' className={styles.contactmail}>administracion@tarindra.com</a>
                            </div>
                        </div>
                        <div className={styles.locationright}>
                            <Wrapper apiKey={process.env.GOOGLE_API_KEY?? ''} render={render}>
                                <ContactMap >
                                    <Marker position={{
                                    lat: 25.5359513,
                                    lng: -100.9736716
                                }} />
                                </ContactMap>
                            </Wrapper>
                        
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = useState<google.maps.Marker>();
  
    useEffect(() => {
      if (!marker) {
        setMarker(new google.maps.Marker());
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
  
    useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
  
    return null;
  };