'use client';

import {useState, useRef, useEffect} from 'react';
import styles from './contact_map.module.css';

export default function ContactMap(){
    
    const [map, setMap] = useState();
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current && !map) {
          setMap(new window.google.maps.Map(ref.current, {
            'center':{
                lat: 25.5359513,
                lng: -100.9736716
            },
            'zoom':14
        }));
        }
      }, [ref, map]);
      
    return <div className={styles.map} ref={ref} />
}