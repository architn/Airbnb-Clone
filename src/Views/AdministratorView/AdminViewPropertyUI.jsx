import React from 'react'
import axios from 'axios'

function AdminViewPropertyUI(props) {

    function deleteProperty(){
        axios.delete(`http://localhost:3002/deleteProperty/${props.id}`, {withCredentials: true})
        .then( (response) => {
          if(response.status === 201){
            alert('Successfully deleted!')
          }
        })
    }
  return (
    <div>
         <p>{props.title}</p>
        <p>{props.address}</p>
        <p>{props.city}, {props.state}, {props.country}</p>
        <p>{props.cost}</p>
        <p><button className='btn btn-danger' onClick={deleteProperty}>DELETE</button></p>
    </div>
  )
}

export default AdminViewPropertyUI