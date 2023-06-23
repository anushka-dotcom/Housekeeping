import React,{useEffect,useState} from 'react'
import Nav_bar from './nav_bar';
import { getBookingById } from './Helper';

export default function Hk_booking() {
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
                <h1 class="ms-5">Booking Details</h1>
            
                
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