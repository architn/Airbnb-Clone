import axios from 'axios'
import React from 'react'

function AdminViewUserUI(props) {

    function deleteUser(){
        axios.delete(`http://localhost:3002/deleteUser/${props.id}`, {withCredentials: true})
        .then( (response) => {
          if(response.status === 201){
            alert('Successfully deleted!')
          }
        })
    }
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p><button className='btn btn-danger' onClick={deleteUser}>DELETE</button></p>
    </div>
  )
}

export default AdminViewUserUI