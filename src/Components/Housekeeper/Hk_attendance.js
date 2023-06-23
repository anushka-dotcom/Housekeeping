import React, { useEffect, useState } from 'react'
import Nav_bar from './nav_bar';
import {getHkById,getBookingById} from "./Helper";


export default function Hk_booking() {

const[atten,setAtten]=useState([]);
useEffect(() => {
  getHkById().then((data)=>{
   setAtten(data.data)
  

    console.log(data)
  })
 
}, [])

const[booking,setBooking]=useState();
  


  useEffect(() => {
     getBookingById().then((data)=>{
      setBooking(data.data)
     

       console.log(data)
     })
    
  }, [])

  
  return (
    <div>
        <Nav_bar/>

        <nav class="navbar navbar-light " style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid mx-5 ">
                
            
                 <form class="d-flex">
                    <h3>Attendance</h3>
                     <input disabled="true" class="form-control me-2 mx-3" type="percentage" placeholder={atten ? atten.attendance : ""}/>
                    
                </form>

                <form class="d-flex">
                    <h5>Total Salary</h5>
                     <input disabled="true" class="form-control p-2 mx-3" type="number" placeholder={atten?(atten.salary/30)*atten.attendance:""} />
                    
                </form>
            </div>
        </nav>
        <div className='container-fluid  my-1 p-5'>
        <table class="table ">
  <thead>
    <tr>
    <th class="h4" scope="col">Booking Id</th>
      <th class="h4" scope="col">Customer Id</th>
      <th class="h4" scope="col">Housekeeper Id</th>
      <th class="h4" scope="col">Date</th>
      <th class="h4" scope="col">Salary</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>{booking?booking.id:""}</td>
      <td>{booking?booking.cusid:""}</td>
      <td>{booking?booking.hkid:""}</td>
      <td>{booking?booking.bookingDate:""}</td>
      <td>{booking?booking.salary:""}</td>
      
    </tr>
  </tbody>
</table>
        </div>
        
        </div>
  )
}
