import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'

function UserProperties() {
    // const [user, setUser] = useState([]);
    // let name = '';
    // useEffect( () => {
    //     setUser(
    //         axios.get('/propertyFind', user, {
                
    //         })
    //     )
       
    // }, [user]);
  return (
    <div className='container'>
        <Navbar />
        <h3>Hi Archit!</h3>

        <h4>Your reservations</h4>




    </div>
  )
}

export default UserProperties