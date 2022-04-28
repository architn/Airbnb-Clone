import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import '../Error/Error.css'
function Error() {
  return (
    <div className='container'>
      <Navbar />
      
      <div className='row'>
        <div className='col-6'>
        <h1 id='errorHeading'>Oops!</h1>
        <br/><br/>
        <h4>We cant seem to find the page you're looking for</h4>
        <br/>
      <p>Error Code: 404</p>
      <p>Here are some helpful links instead</p>
      <br/>
        <ul>
          <li><a className='linksToPages' href='/'>Home</a></li>
          <li><a className='linksToPages' href='/login'>Login</a></li>
          <li><a className='linksToPages' href='/events'>Events</a></li>
        </ul>
        </div>
        <div className='col-6'>
          <img id='lost' className='rounded mx-auto d-block' alt='lostPerson' 
          src='https://media.istockphoto.com/vectors/reading-map-vector-id475551626?k=20&m=475551626&s=612x612&w=0&h=6q5d4epjdhL5L382bWgcufq5UYFuW0zfDZOx96e4UfA=' />
        </div>
      </div>
        <br/>
    </div>
    
  )
}

export default Error;