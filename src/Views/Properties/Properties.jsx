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
