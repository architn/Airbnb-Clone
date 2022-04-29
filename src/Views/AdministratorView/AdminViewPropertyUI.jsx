import React from 'react'
import axios from 'axios'

function AdminViewPropertyUI(props) {
  const styleObj = {
    fontSize: 14,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "100px",
}

    function deleteProperty(){
        axios.delete(`http://localhost:3002/deleteProperty/${props.id}`, {withCredentials: true})
        .then( (response) => {
          if(response.status === 201){
            alert('Successfully deleted!')
            window.location.reload(true);
          }
        })
    }
  return (
    <div>
         {/* <p>{props.title}</p>
        <p>{props.address}</p>
        <p>{props.city}, {props.state}, {props.country}</p>
        <p>{props.cost}</p>
        <p><button className='btn btn-danger' onClick={deleteProperty}>DELETE</button></p> */}
        <table className="table table-responsive-sm">
        <tbody>
        <tr>
        <td style={{width:300,style:"italic"}}>{props.title}</td>
        <td style={{width:250, }}>{props.city}</td>
        <td style={{width:250}}>{props.state}</td>
        <td style={{width:250}}>{props.country}</td>
        <td style={{width:250}}>{props.cost}</td>
        <td ><button className='btn btn-danger'onClick={deleteProperty}>DELETE</button></td>
        </tr>
        </tbody>
        </table>
    </div>
  )
}

export default AdminViewPropertyUI