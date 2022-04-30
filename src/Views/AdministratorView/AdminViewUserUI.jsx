import axios from 'axios'
import React from 'react'
import '../../Views/AdministratorView/AdminViewUserUI.css'

//import { useNavigate } from "react-router-dom";

import Table from 'react-bootstrap/Table'

function AdminViewUserUI(props) {
  //let navigate = useNavigate();

    function deleteUser(){
        axios.delete(`http://localhost:3002/deleteUser/${props.id}`, {withCredentials: true})
        .then( (response) => {
          if(response.status === 201){
            window.location.reload(true)
          }
        })
    }
  return (
    <div className="container">
        {/* <p>{props.name}</p>
        <p>{props.email}</p>
        <p><button className='btn btn-danger' onClick={deleteUser}>DELETE</button></p> */}
        <table className="table table-responsive-sm">
        <tbody>
        <tr>
          <span></span>
        <td style={{width:400}}>{props.name}</td>
        <td style={{width:460}}>{props.email}</td>
        <td >
          <button className='btn btn-danger' type='button' data-toggle="modal" data-target="#exampleModal"  onClick={deleteUser}>DELETE</button>
          
        </td>
        </tr>
        </tbody>
        </table>
    </div>
  )
}

export default AdminViewUserUI