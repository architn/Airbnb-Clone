import React from 'react'
//import InfoJumbotron from '../../components/Jumbotron/InfoJumbotron'
import Divider from '../../components/Divider/Divider'
import '../PersonalInfo/PersonalInfo.css'


function PersonalInfo() {
  return (
      <div className="jumbotron jumbotron-fluid">
		  <hr style={{color: "grey" }} /><br/>
      <div className="container col-sm col-md col-lg">
      <div className="row">
		  <div className="col-8">
		  <h2 className="display-20">Personal Info</h2><br/><br/><br/>
             <div className="h6">Legal Name <br/><small className="text-muted">Aishwarya Balyaya</small>
			 <button className='btn btn-sm' id="button">Edit</button></div>
			 <Divider />
			 <div className="h6">Gender<br/><small className="text-muted">Female</small>
			 <button className='btn btn-sm' id="button">Edit</button></div>
			 <Divider />
			 <div className="h6">Date of Birth <br/><small className="text-muted">19th february</small>
			 <button className='btn btn-sm' id="button">Edit</button></div>
			 <Divider />
			 <div className="h6">Contact Number<br/><small className="text-muted">8253625840</small>
			 <button className='btn btn-sm' id="button">Edit</button></div>
			 <Divider />
			 <div className="h6">Email Address<br/><small className="text-muted">gahbs@gmail.com</small>
			 <button className='btn btn-sm' id="button">Edit</button></div>
			 <Divider />
		  </div>
	  </div>
    </div>
  </div>

  )
}

export default PersonalInfo