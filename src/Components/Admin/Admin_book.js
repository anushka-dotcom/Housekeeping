import React, { useEffect, useState } from 'react'
import Nav from './Admin_main'
import {getAllBooking} from './Helper';
function Admin_book() {

  const[booking,setBooking]=useState([]);
 

  useEffect(() => {
    getAllBooking().then((data)=>{
     setBooking(data.data)
      console.log(data)
    })
   
 }, [])

    return ( 
        <>
        <Nav/>   
        <nav class="navbar navbar-light" style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid ">
                <h1 class="ms-5">Bookings</h1>
            
                 <form class="d-flex">
                     <input class="form-control me-2" type="text" />
                    <button class="btn btn-outline-primary bg-secondary" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
        </nav>

        <div className='container-fluid  my-4 p-4'>
      
      <table class="table bg-table table-responsive table-hover col-sm-12">
        <thead style={{ backgroundColor: '#ff8533' }}>
          <tr >
            <th scope="col">Booking ID</th>
            <th scope="col">Customer Id</th>
            <th scope="col">Housekeeper Id</th>
            <th scope="col">Date</th>
            <th scope="col">Salary</th>
            
          </tr>
        </thead>
        <tbody>
        {booking.map((book)=>{
          return (
            <tr>
            <th scope="row">{book.id}</th>
            <td>{book.cusid}</td>
            <td>{book.hkid}</td>
            <td>{book.bookingDate}</td>
            <td>{book.salary}</td>
          
          </tr>
          )
        })}
          
          
          
        </tbody>
      </table>

      <nav aria-label="..." className='my-5 d-flex justify-content-center'>
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
    </>
     );
}

export default Admin_book;