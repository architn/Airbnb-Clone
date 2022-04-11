import React, {useEffect, useState} from 'react'
import {MapContainer, TileLayer} from "react-leaflet"
import osm from '../Maps/osm-providers'
import '../Maps/Maps.css'
import 'leaflet/dist/leaflet.css'
import {useRef} from 'react';
const MapView = (props) => {
  const[center, setCenter] = useState([51.0, 19.0])
  
  const mapRef= useRef();
  const ZOOM_LEVEL = 9;
  return (
    <div className='row'>
           <div className='col text-center'>
             <div className='col'>
               {/* <MapContainer center={center} zoom={ZOOM_LEVEL} maxZoom={18} ref={mapRef} /> */}
               <MapContainer className='mapView' center={[42.34186, -71.10885]} zoom={15}>
               <TileLayer attribution={osm.attribution} url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=eNO88H6GQr1nWALF6UPH`}/>
               </MapContainer>
             </div>
           </div>
    </div>
  )
}

export default MapView;