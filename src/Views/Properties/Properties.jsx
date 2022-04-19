import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PropertiesJumbotron from "../../components/Jumbotron/PropertiesJumbotron.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";


function createPropertiesJumbotron(properties) {
  return (
    <PropertiesJumbotron
          roomid={properties._id}
          type={properties.ApartmentType}
          title={properties.Title}
          img1='https://a0.muscache.com/im/pictures/631c8926-9ed6-4226-b5c4-c5452e84e6ba.jpg?im_w=720'
          img2={properties.img2}
          img3={properties.img3}
          img4={properties.img4}
          img5={properties.img5}
          numberOfGuests={properties.Guests}
          numberOfBedrooms={properties.Beds}
          numberOfBeds={properties.Beds}
          numberOfBaths={properties.Bathrooms}
          streetaddress={properties.Street}
          price={properties.Price}
          rating={3.2}
          reviews={22}
          features={properties.features}
          userid={properties.user}
          searchParam={properties.SearchParam}
    />
  );
}

function Properties() {
  const [properties, setProperty] = useState([]);
  let [searchParams] = useSearchParams();
  let city = searchParams.get("searchCity");
  console.log(city);
    useEffect( () => {
       axios
        .get(
          "http://localhost:3002/getPropertyByLocation",
        { params: { search: city } },
          { 
            withCredentials: true,
          }
      )
      .then((response) => {
        if (response.status === 200) {
          setProperty(response.data)
        }
      })
      .catch((err) => {
        console.log(err);
        //setError(err.response.data.msg);
      });
 }, [properties._id, city]);

  //const filteredProperties = searchedCity(city);
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        {properties.map(createPropertiesJumbotron)}
      </div>
    </div>
  );
}

export default Properties;
