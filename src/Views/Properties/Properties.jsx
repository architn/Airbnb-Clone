import React from 'react'
import { useSearchParams } from "react-router-dom";
import PropertiesJumbotron from '../../components/Jumbotron/PropertiesJumbotron.jsx';
import properties from '../../data/properties.js'

function searchedCity(city){
       return properties.filter( property => 
          property.city.includes(city) 
       )
};
  
function createPropertiesJumotron(properties){
    return <PropertiesJumbotron 
    type={properties.type} title={properties.title} img={properties.baseImg} 
    numberOfGuests={properties.numberOfGuests} numberOfBedrooms={properties.numberOfBedrooms}
    numberOfBeds={properties.numberOfBeds} numberOfBaths={properties.numberOfBaths} 
    streetaddress={properties.streetAddress} price={properties.price}
    />
}

function Properties() {
    let [searchParams] = useSearchParams();
    let city = searchParams.get("searchCity");
    const filteredProperties = searchedCity(city);
  return (
    <div className='container'>
        <div className='row'>
            {filteredProperties.map(createPropertiesJumotron)}
        </div>
    </div>
  )
}

export default Properties