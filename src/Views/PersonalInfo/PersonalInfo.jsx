import axios from "axios";
import React, { useEffect, useState } from "react";
//import InfoJumbotron from '../../components/Jumbotron/InfoJumbotron'
import Divider from "../../components/Divider/Divider";
import Navbar from "../../components/Navbar/Navbar";
import "../PersonalInfo/PersonalInfo.css";

function displayEditColumns() {
  var elements = document.getElementsByClassName("onEdit");
  var readOnlyElements = document.getElementsByClassName("text-muted");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }

  for (var index = 0; index < readOnlyElements.length; index++) {
    readOnlyElements[index].style.display = "none";
  }
}

function cancelChanges() {
  var elements = document.getElementsByClassName("onEdit");
  var readOnlyElements = document.getElementsByClassName("text-muted");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

  for (var index = 0; index < readOnlyElements.length; index++) {
    readOnlyElements[index].style.display = "block";
  }
}

function PersonalInfo() {
  //   const [userDetails, setUserDetails] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    address: "",
    mobile: "",
    bio: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3002/getUserDetails", {
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data[0]);
        if (response.status === 200) {
          // setUserDetails(response.data)
          const user = response.data[0];
          console.log(user);
          setDetails({
            ...details,
            name: user?.name,
            email: user?.email,
          });
        }
      });
  }, []);

  const submitHandler = (e) => {
    console.log(details);
    axios.post("http://localhost:3002/editUser" , details, 
	{
        withCredentials: true,
      })
    .then( (response) => {
		if (response.status === 201) {
			console.log("Profile Updated Successfully");
			cancelChanges();
			alert("User profile updated successfully");
		}
    } )
	.catch((err) => {
		console.log(err);	
	  });
  }

  return (
    <div className="container">
      <Navbar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container col-sm col-md col-lg">
          <div className="row">
            <div className="col-8">
              <div>
                <h2 className="display-20">
                  Personal Info{" "}
                  <button className="btn btn-link" onClick={displayEditColumns}>
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/000/330/430/small/2_-_1_-_Pencil.jpg"
                      alt="edit"
                      className="editBtn"
                    />
                  </button>
                  <span className="onEdit">
                    <button
                      id="cancelBtn"
                      className="btn btn-secondary"
                      onClick={cancelChanges}
                    >
                      CANCEL
                    </button>
                  </span>
                </h2>
                <br />
                <br />
                <br />

                <form className="form-group">
                  <div className="h6">
                    Name: <br />
                    <small className="text-muted">{details.name}</small>
                    <div className="onEdit">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            name: e.target.value,
                          })
                        }
                        value={details.name}
                      />
                    </div>
                  </div>
                  <Divider />
                  <div className="h6">
                    Email Address:
                    <br />
                    <small className="text-muted">{details.email}</small>
                  </div>
                  <div className="onEdit">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          email: e.target.value,
                        })
                      }
                      value={details.email}
                    />
                  </div>
                  <Divider />
                  <div className="h6">
                    Mobile Number: <br />
                    <small className="text-muted">{details.mobile}</small>
                  </div>
                  <div className="onEdit">
                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          mobile: e.target.value,
                        })
                      }
                      value={details.mobile}
                    />
                  </div>
                  <Divider />
                  <div className="h6">
                    Street Address:
                    <br />
                    <small className="text-muted">{details.address}</small>
                  </div>
                  <div className="onEdit">
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          address: e.target.value,
                        })
                      }
                      value={details.address}
                    />
                  </div>
                  <Divider />
                  <div className="h6">
                    About Me:
                    <br />
                    <small className="text-muted">{details.bio}</small>
                  </div>
                  <div className="onEdit">
                    <input
                      type="text"
                      name="bio"
                      className="form-control"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          bio: e.target.value,
                        })
                      }
                      value={details.bio}
                    />
                  </div>
                  <Divider />
                  <div className="onEdit">
                    <button
                      onClick={submitHandler}
                      type="button"
                      className="btn btn-secondary"
                    >
                      SAVE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
