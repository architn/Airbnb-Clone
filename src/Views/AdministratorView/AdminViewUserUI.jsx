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
          <button className='btn btn-danger' type='button' data-toggle="modal" data-target="#exampleModal">DELETE</button>
          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete this user?
      </div>
      <div class="modal-footer">
        <button id='closeBtnn' type="button" className="btn btn-light" data-dismiss="modal">CLOSE</button>
        <button type="submit" className="btn btn-danger" onClick={deleteUser}>DELETE USER</button>
      </div>
    </div>
  </div>
</div>
        </td>
        </tr>
        </tbody>
        </table>
    </div>
  )
}

export default AdminViewUserUI