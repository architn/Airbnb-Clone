import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import InfoJumbotron from '../../components/Jumbotron/InfoJumbotron'
import Divider from '../../components/Divider/Divider'
import Navbar from '../../components/Navbar/Navbar'
import '../PersonalInfo/PersonalInfo.css'

function displayEditColumns(){
	var elements = document.getElementsByClassName('onEdit')
	var readOnlyElements = document.getElementsByClassName('text-muted')
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "block"
	}

	for(var index = 0; index < readOnlyElements.length; index++){
		readOnlyElements[index].style.display = "none";
	}
}

function cancelChanges(){
	console.log("hii")
	var elements = document.getElementsByClassName('onEdit')
	var readOnlyElements = document.getElementsByClassName('text-muted')
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none"
	}

	for(var index = 0; index < readOnlyElements.length; index++){
		readOnlyElements[index].style.display = "block";
	}
}

function saveEdits(){
	axios.patch(`http://localhost:3002/editUser/` , {})
	.then( (response) => {
	} )
	
}

function createProfilePage(profile){
	return (
		<div>
			  <h2 className="display-20">Personal Info <button className='btn btn-link' onClick={displayEditColumns}> 
			  
				  <img src='https://static.vecteezy.com/system/resources/thumbnails/000/330/430/small/2_-_1_-_Pencil.jpg' alt='edit' className='editBtn'/></button>
				  <span className='onEdit'>
							<button id='cancelBtn' className='btn btn-secondary' onClick={cancelChanges}>CANCEL</button>
						</span>
					  </h2><br/><br/><br/>
					  
			<form className='form-group' onSubmit={saveEdits}>
				<div className="h6">Name: <br/>
				<small className="text-muted">{profile.name}</small>
				<div className='onEdit'>
					<input type="text" defaultValue={profile.name} name="name" className='form-control' />
				</div>
				</div>
				<Divider />
				<div className="h6">Email Address:<br/><small className="text-muted">{profile.email}</small>
				</div>
				<div className='onEdit'>
					<input type="text" defaultValue={profile.email} name="email" className='form-control' />
				</div>
				<Divider />
				<div className="h6">Mobile Number: <br/><small className="text-muted">{profile.mobile}</small>
				</div>
				<div className='onEdit'>
					<input type="text" defaultValue={profile.mobile} name="mobile" className='form-control' onChange={ (e) => {}} />
				</div>
				<Divider />
				<div className="h6">Street Address:<br/><small className="text-muted">{profile.address}</small>
				</div>
				<div className='onEdit'>
					<input type="text" defaultValue={profile.address} name="address" className='form-control' onChange={ (e) => {}} />
				</div>
				<Divider />
				<div className="h6">About Me:<br/><small className="text-muted">{profile.bio}</small>
				</div>
				<div className='onEdit'>
					<input type="text" defaultValue={profile.bio} name="bio" className='form-control' onChange={ (e) => {}} />
				</div>
				<Divider />
				<div className='onEdit'>
				<button className='btn btn-secondary'>SAVE</button>
				
				</div>
				
			</form>
			
			
		</div>
	)
}


function PersonalInfo() {
	const[userDetails, setUserDetails] = useState([]);
	useEffect( () => {
		axios.get('http://localhost:3002/getUserDetails', {
			withCredentials: true,
		})
		.then( (response) => {
			if(response.status === 200){
				setUserDetails(response.data)
			}
		})
	}, [])
  return (
	  <div className='container'>
		  <Navbar />
		<div className="jumbotron jumbotron-fluid">
      <div className="container col-sm col-md col-lg">
      <div className="row">
		  <div className="col-8">
		{ userDetails && userDetails.map(createProfilePage)}
		  </div>
	  </div>
    </div>
  </div>
	  </div>
      

  )
}

export default PersonalInfo