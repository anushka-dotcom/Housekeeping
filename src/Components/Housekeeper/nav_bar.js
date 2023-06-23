import React,{useEffect,useState} from 'react'
import applogo from './images/applogo.jfif';
import profile from './images/profile.jfif';
import {getHkById} from "./Helper";


export default function Housekeeper_main() {

  const[name,setName]=useState([]);
useEffect(() => {
  getHkById().then((data)=>{
   setName(data.data)
  

    console.log(data)
  })
 
}, [])

  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-topbar text-light">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item1">
              <i className='bi-justify' style={{ fontSize: '30px' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls='offcanvasWithBackdrop' />
            </li>
            <li>
              <li className='nav-item2'>
                <img src={applogo} alt="" width="60" height="40" class="d-inline-block align-text-top" />
              </li>
            </li>

            <li class="nav-item ">
              <h5 class="nav-link text-light" >Manage my House</h5>
            </li>

          </ul>

          <span class="nav-link text-light">Welcome {name?name.username:""}</span>
          <li className='list-unstyled'>
            <img src={profile} alt="" width="35" height="35" className='rounded-circle' />
            <i class="bi bi-caret-down-fill mx-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls='offcanvasWithBackdrop'/>
          </li>
        </div>
      </nav>


      <div class="offcanvas offcanvas-start bg-sidebar" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
        <div class="offcanvas-header bg-topbar">

          <a className='list-unstyled' href="#">
            <img src={applogo} alt="" width="60" height="40" class="d-inline-block align-text-top" />
          </a>
          <a class="nav-link text-light bg-topbar" href="#">
          <h5 class="offcanvas-title text-light bg-topbar" id="offcanvasWithBackdropLabel">Manage My House</h5>
          </a>

        </div>

        <div class="offcanvas-body bg-sidebar">

          <ul class="nav flex-column text-light my-5 hover gap-3 bg-sidebar">
            <li class="nav-item">
              <a class="nav-link text-light" href="/housekeeper/booking"><h5>My Bookings</h5></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/housekeeper/attendance"><h5>Attendance</h5></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/housekeeper/ticket"><h5>Get Support</h5></a>
            </li>
            <li class="nav-item nav-item-hover bg-sidebar">
              <a class="nav-link text-light" href="/housekeeper/profile"><h5>My Profile</h5></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/login"><h5>Logout</h5></a>
            </li>
          </ul>

        </div>
      </div>

    </div>
  )

}