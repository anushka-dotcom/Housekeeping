import React from 'react'
import Admin_cus from './Admin_tickets'
import App_icon from "../../images/App_logo.jpeg";
import {Link} from "react-router-dom"
import './admin.css'
import { useNavigate } from 'react-router-dom';
export default function Admin_main() {
const navigate=useNavigate();
const logout=()=>{
  localStorage.removeItem("jwt");
  localStorage.removeItem("id");
  localStorage.removeItem("role");
  navigate("/login")
}

  return (
    <div>
      <nav class="navbar bg-topbar text-light">
        <div class="container-fluid container-fluid-sm">
          <ul class="flex-row navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav mx-2">
              <i className='bi-justify' style={{ fontSize: '30px' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"></i>

            </li>
            <li class="nav mx-1">
              <img src={App_icon} alt="" width="60" height="40" class="d-inline-block align-text-top" />
            </li>
            <li className='nav  text-center my-1  mx-0'>
              <h4 className="app_text">Manage My House</h4>
            </li>

          </ul>
          <span className="navbar-text mx-2 mr-lg-3">
            Hello Admin

          </span>
          <li class="nav-item dropdown ">
          <a className="nav-link dropdown-toggle mr-lg-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className="admin_image" src="https://th.bing.com/th/id/OIP.lthwitFqhzmDhxcpH7G2ZAHaHw?pid=ImgDet&w=193&h=202&c=7"></img>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/admin/profile">Profile</a></li>
            <li><a class="dropdown-item" style={{cursor:'pointer'}} onClick={logout}>Logout</a></li>
            
          </ul>
        </li>
          

        </div>
      </nav>


      <div class="offcanvas offcanvas-start bg-sidebar" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
        <div class="offcanvas-header bg-topbar">
          <h5 class="offcanvas-title text-light" id="offcanvasWithBackdropLabel">Manage My House</h5>
          <img src={App_icon} alt="" width="60" height="40" class="d-inline-block align-text-top" />
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body mt-4">
          <ul class="nav flex-column text-light hover gap-3 text-center">
            <li class="nav-item nav-item-hover flex-row d-flex justify-content-left">
            <i className='bi-bar-chart-fill' style={{ fontSize: '30px' }} type="button" ></i>
              <a class="nav-link text-light" href="/admin/dashboard"><h4>Dashboard</h4></a>
            </li>
            <li class="nav-item  flex-row d-flex justify-content-left">
            <i className='bi-person-fill' style={{ fontSize: '30px' }} type="button" ></i>
              <a class="nav-link text-light" href="/admin/customers"><h4>Customers</h4></a>
            </li>
            <li class="nav-item flex-row d-flex justify-content-left">
            <i className='bi-bag-check-fill' style={{ fontSize: '30px' }} type="button" ></i>
              <a class="nav-link text-light" href="/admin/houseList"><h4>Housekeepers</h4></a>
            </li>
            <li class="nav-item flex-row d-flex justify-content-left">
            <i className='bi-box-arrow-in-right' style={{ fontSize: '30px' }} type="button" ></i>
              <a class="nav-link text-light" href="/admin/bookings"><h4>Bookings</h4></a>
            </li>
            <li class="nav-item flex-row d-flex justify-content-left">
            <i className='bi-ticket-detailed' style={{ fontSize: '30px' }} type="button" ></i>
              <a class="nav-link text-light" href="/admin/tickets"><h4>Tickets</h4></a>
            </li>

          </ul>
          <ul class="nav my-4 text-center  flex-column text-light hover gap-3">
            {/* <li class="nav-item flex-row d-flex justify-content-left">
            <i className='bi-person-fill' style={{ fontSize: '30px' }} type="button" ></i>
            
              <a class="nav-link text-light" href="/admin/profile"><h4>Profile</h4></a>
            </li>
            <li class="nav-item flex-row d-flex justify-content-left">
            <i className='bi-box-arrow-in-left' style={{ fontSize: '30px' }} type="button" ></i>
              <a class="nav-link text-light" href="#"><h4>Logout</h4></a>
            </li> */}

            {/* <li class="nav-item flex-row d-flex justify-content-left">
            <i className='bi-person-fill' style={{ fontSize: '30px' }} type="button" ></i>
            
              <a class="nav-link text-light" href="/admin/views"><h4>BookingViews</h4></a>
            </li> 


            <li class="nav-item flex-row d-flex justify-content-left">
            <i className='bi-person-fill' style={{ fontSize: '30px' }} type="button" ></i>
            
              <a class="nav-link text-light" href="/admin/ticketViews"><h4>TicketViews</h4></a>
            </li>  */}

            {/* <li class="nav-item flex-row d-flex justify-content-left">
            <i className='bi-person-fill' style={{ fontSize: '30px' }} type="button" ></i>
            
              <a class="nav-link text-light" href="/admin/houseList"><h4>HouseList</h4></a>
            </li> 

            <li class="nav-item flex-row d-flex justify-content-left">
            <i className='bi-person-fill' style={{ fontSize: '30px' }} type="button" ></i>
            
              <a class="nav-link text-light" href="/admin/houseView"><h4>HouseView</h4></a>
            </li>  */}

          </ul>
        </div>
      </div>
      
    </div>
  )

}