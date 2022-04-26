import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import '../../Views/AdministratorView/AdminView.css'
import AdminViewPropertyUI from './AdminViewPropertyUI.jsx';
import AdminViewUserUI from './AdminViewUserUI.jsx';


function createUserAdminView(user){
  return (
    <div>
      <AdminViewUserUI 
      name={user.name} email={user.email} id={user._id}/>
    </div>
  )
}

function createPropertyAdminView(property){
  return (
    <div>
      <AdminViewPropertyUI title={property.Title}
          address={property.Street} 
          city={property.City} 
          state={property.State} 
          country = {property.Country}
          guests = {property.Guests}
          beds = {property.Beds}
          bathroom = {property.Bathrooms}
          price = {property.Price}
          id={property._id} />
    </div>
  )
}


function AdminView() {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [isUserViews, setViews] = useState(true);

  function onChangeEvent(){
    var value = document.getElementById("drop").value;
    if(value==="Properties") {
      document.getElementById("prop").placeholder = "Search By Property";
      setViews(false)
    }
    else if(value==="Users") {
      document.getElementById("prop").placeholder = "Search By User";
      setViews('user')
    }else document.getElementById("prop").placeholder = "Search";
  }
  useEffect( () => {
    axios.get('http://localhost:3002/getAllUsers', { withCredentials: true})
    .then( (response) => {
      setUsers(response.data)
    })

    axios.get('http://localhost:3002/getAllProperties', { withCredentials: true})
    .then( (response) => {
      setProperties(response.data)
    })
  }, [])
  return (
    <div className='container'>
      <Navbar />
      <form className="form-control" action="/search">
        <div className="row g-2 my-2">
          <div className="col-4">
            <select  
            className="form-group col-6 input-group-text border-1" 
            name="searchCriteria" 
            id="drop"
           onChange={onChangeEvent}>
            <option value="1">Select</option>
            <option value="Properties">Properties</option>
            <option value="Users">Users</option>
            </select>
          </div>

          <div className="col-4">
          <div class="input-group rounded">
          <input id="prop" 
          type="search" 
          name="searchText"
          className="form-control rounded select2"
           placeholder="Search" 
           aria-label="Search" 
           aria-describedby="search-addon"
           ></input>
          <span className="input-group-text border-3" id="search-addon">
          <button id="search-button" type="submit" className="btn btn-link"> <i className="fas fa-search"></i></button>
          </span>
        </div>
        </div>

        
        </div>
      </form>

      <table>
        <th></th>
      </table>
        {isUserViews ? 
        users.map(createUserAdminView) 
        :  
        properties.map(createPropertyAdminView)}
    </div>
  )
}


// function OnChangeEvent() {
  
  
// }




export default AdminView