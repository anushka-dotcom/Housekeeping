import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';
import CustomerService from './CustomerService';

const Profile = () => {
  const [customer, setCustomer] = useState();



  useEffect(() => {
    CustomerService.getCustomerById().then((data) => {
      setCustomer(data.data)
      console.log(data)
    })

  }, [])

  return(
  <>
        <Navbar/>
        <Sidebar>
        <div class="justify-content-center">

      <nav class="navbar navbar-light " style={{ backgroundColor: '#ff9933' }}>
        <div class="container-fluid mx-2 ">
          <h1 class="ms-5">Profile</h1>
        </div>
      </nav>
      <div class="text-center my-5">
        <img src={customer ? customer.image : ""} class="rounded m-3" width="210" height="250" alt="..." />
        
      </div>

      <form>
        <center>

          <div class="row g-3 align-items-center p-2 justify-content-center ">
            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>FirstName</h4></label>
            </div>
            <div class="col-auto">
              <input disabled="true" type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={customer ? customer.firstName : ""} />
            </div>

            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>Last Name</h4></label>
            </div>

            <div class="col-auto">
              <input disabled="true" type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={customer ? customer.lastName : ""} />
            </div>


          </div>
          <div class="row g-3 align-items-center p-2 justify-content-center ">
            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>UserName</h4></label>
            </div>

            <div class="col-auto">
              <input disabled="true" type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={customer ? customer.username : ""} />
            </div>

            <div class="col-auto">
              <label for="inputdate" class="col-form-label"><h4>Date of Birth</h4></label>
            </div>
            <div class="col-auto">
              <input disabled="true" type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={customer ? customer.dob : ""} />
            </div>


          </div>


          <div class="row g-3 align-items-center p-2 justify-content-center">
            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>Gender</h4></label>
            </div>
            <div class="col-auto">
              <input disabled="true" type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={customer ? customer.gender : ""} />
            </div>
            <div class="col-auto">
              <label for="inputmail" class="col-form-label"><h4>Email</h4></label>
            </div>
            <div class="col-auto">
              <input disabled="true" type="email" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={customer ? customer.email : ""} />
            </div>

          </div>

          <div class="row g-3 align-items-center p-2 justify-content-center">
            <div class="col-auto">
              <label for="inputcontact" class="col-form-label"><h4>Contact No</h4></label>
            </div>
            <div class="col-auto">
              <input disabled="true" type="tel" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={customer ? customer.phoneNo : ""} />
            </div>

            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>Address</h4></label>
            </div>

            <div class="col-auto">
              <input disabled="true" type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={customer ? customer.address : ""} />
            </div>


          </div>




        </center>
      </form>
      <br></br>
      <br></br>
      <div>
      <Link to = "/customer/editprofile" style={{ boxShadow: '1px 1px 4px 1px orange' }} className='btn btn-primary mb-2'>Edit profile</Link>
      </div>
    </div>
     </Sidebar>
    </>
  )
  };
  
  export default Profile;