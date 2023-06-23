import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';
import CustomerService from './CustomerService';



const EditProfile = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [image, setImage] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [dob, setDob] = useState('')
  const id = JSON.parse(localStorage.getItem('id'));
  const history = useNavigate();

  const saveOrUpdateCustomer = (e) => {
    e.preventDefault();

    const Customer = { firstName, lastName, emailId, image, dob, phoneNo, id, gender, address}
    
    
      CustomerService.updateCustomer(Customer).then((response) => {
        console.log(Customer)
        history('/Customer/profile')
      }).catch(error => {
        console.log(error)
      })

  }
 
  return (
    <>
    <Navbar/>
        <Sidebar>
    <div>
      <div className="container">
        <div className="row">
          <div className="card">
           <h2 className="text-center">Update profile</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  >
                  </input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  >
                  </input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Gender :</label>
                  <input
                    type="text"
                    placeholder="Enter your gender"
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                  </input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Address :</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  >
                  </input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Phone no :</label>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    name="phoneNo"
                    className="form-control"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  >
                  </input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email Id :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  >
                  </input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Issue: </label>
                  <input
                    type="file"
                    placeholder="Enter the image"
                    name="image"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  >
                  </input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Birth date :</label>
                  <input
                    type="date"
                    placeholder="Enter your birth date"
                    name="dob"
                    className="form-control"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  >
                  </input>
                </div>

                <button  onClick={(e) => saveOrUpdateCustomer(e)} style={{ boxShadow: '1px 1px 4px 1px orange' }}>Submit </button>
                <Link to="/Customer/book" className="btn btn-danger" > Cancel </Link>
              </form>

            </div>
          </div>
        </div>

      </div>

    </div>
    </Sidebar>
    </>
  )
}

export default EditProfile