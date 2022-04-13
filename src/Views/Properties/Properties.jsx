import React from 'react'
import { useSearchParams } from "react-router-dom";
import PropertiesJumbotron from '../../components/Jumbotron/PropertiesJumbotron.jsx';
import properties from '../../data/properties.js'

function searchedCity(city){
       return properties.filter( property => 
          property.searchParam.includes(city) 
       )
};
  
function createPropertiesJumbotron(properties){
    return <PropertiesJumbotron 
                  roomid={properties.id}
                  type={properties.type} 
                  title={properties.title} 
                  img1={properties.img1} 
                  img2={properties.img2} 
                  img3={properties.img3} 
                  img4={properties.img4} 
                  img5={properties.img5} 
                  numberOfGuests={properties.numberOfGuests} 
                  numberOfBedrooms={properties.numberOfBedrooms}
                  numberOfBeds={properties.numberOfBeds} 
                  numberOfBaths={properties.numberOfBaths} 
                  streetaddress={properties.streetAddress} 
                  price={properties.price}
                  rating={properties.rating}
                  reviews={properties.reviews}
                  features={properties.features}
                  userid={properties.userid}
                  searchParam={properties.searchParam}
          />
}

function Properties() {
    let [searchParams] = useSearchParams();
    let city = searchParams.get("searchCity");
    const filteredProperties = searchedCity(city);
  return (
    <div className='container'>
        <div className='row'>
            {filteredProperties.map(createPropertiesJumbotron)}
        </div>
        
    </div>
  )
}

export default Properties