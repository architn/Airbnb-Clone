import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import '../../Views/AdministratorView/AdminView.css'

function onChangeEvent(){
  var value = document.getElementById("drop").value;
  if(value==="Properties") {
    document.getElementById("prop").placeholder = "Search By Property";
  }
  else if(value==="Users") {
    document.getElementById("prop").placeholder = "Search By User";
  }else document.getElementById("prop").placeholder = "Search";
}


function AdminView() {
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
    </div>
  )
}


// function OnChangeEvent() {
  
  
// }




export default AdminView