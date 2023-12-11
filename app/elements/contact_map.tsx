'use client';

import {useState, useRef, useEffect, Children} from 'react';
import styles from './contact_map.module.css';
import React from 'react';

export default function ContactMap({children}:any ){
    
    const [map, setMap] = useState<google.maps.Map>();
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current && !map) {
          setMap(new window.google.maps.Map(ref.current, {
            'center':{
                lat: 25.5362889,
                lng: -100.9711059
            },
            'zoom':14
        }));
        }
      }, [ref, map]);
      
    return(
      <>
      <div className={styles.map} ref={ref} />
      {React.Children.map(children,(child:any) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
    ) 
    
}

