import React, {useEffect, useState} from 'react'
import {MapContainer, TileLayer, Marker} from "react-leaflet"
import * as L from "leaflet";
import osm from '../Maps/osm-providers'
import '../Maps/Maps.css'
import 'leaflet/dist/leaflet.css'
import {useRef} from 'react';
const MapView = (props) => {
  const[center, setCenter] = useState([props.lat, props.lng])

  const mapRef= useRef();
   //  Create the Icon
   const LeafIcon = L.Icon.extend({
    options: {}
  });
  const blueIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
  })
  const [icon, setIcon] = useState(blueIcon);
  const ZOOM_LEVEL = 25;
  return (
    <div className='row'>
           <div className='col text-center'>
             <div className='col'>
               {/* <MapContainer center={center} zoom={ZOOM_LEVEL} maxZoom={18} ref={mapRef} /> */}
               <MapContainer className='mapView' center={center} zoom={ZOOM_LEVEL}>
               <TileLayer attribution={osm.attribution} url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=eNO88H6GQr1nWALF6UPH`}/>
               <Marker position={center} icon={icon}></Marker>
               </MapContainer>
             </div>
           </div>
    </div>
  )
}

export default MapView;