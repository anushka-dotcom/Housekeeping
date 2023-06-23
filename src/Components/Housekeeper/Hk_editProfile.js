import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import HousekeeperService from './Services/HousekeeperService';


const Hk_editProfile = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const [image, setImage] = useState('')
  const [dob, setDob] = useState('')
  const history = useNavigate();
  const { id } = useParams();

  const saveOrUpdateHousekeeper = (e) => {
    e.preventDefault();

    const Housekeeper = { firstName, lastName, emailId, image }

    if (id) {
      HousekeeperService.updateHousekeeper(Housekeeper).then((response) => {
        console.log(response.data)
        history.push('/housekeeper/profile')
      }).catch(error => {
        console.log(error)
      })

    } else {
      HousekeeperService.createHousekeeper(Housekeeper).then((response) => {

        console.log(response.data)

        history.push('/housekeeper/profile');

      }).catch(error => {
        console.log(error)
      })
    }

  }

  useEffect(() => {

    HousekeeperService.getHousekeeperById(id).then((response) => {
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setEmailId(response.data.emailId)
      setImage(response.data.image)
      setDob(response.data.dob)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const title = () => {

    if (id) {
      return <h2 className="text-center">Update profile</h2>
    } else {
      return <h2 className="text-center">Add Housekeeper</h2>
    }
  }

  return (
    <div>
      <br /><br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {
              title()
            }
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
                  <label className="form-label"> Phone no :</label>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
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
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  >
                  </input>
                </div>

                <button className="btn btn-success" onClick={(e) => saveOrUpdateHousekeeper(e)} >Submit </button>
                <Link to="/housekeeper/profile" className="btn btn-danger"> Cancel </Link>
              </form>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hk_editProfile