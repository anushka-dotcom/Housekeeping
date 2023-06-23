import React, { useState } from 'react'
import BookingService from './BookingService';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';

const Cust_Booking = () => {
  
  const [cusAdd, setCusAdd] = useState('')
  const [bookingDate, setBookingDate] = useState('')
  const history = useNavigate();
  const { hkid } = useParams();
  const { salary } = useParams();
  const cusid = JSON.parse(localStorage.getItem('id'));
  const saveBooking = (e) => {
    e.preventDefault();
    const booking={cusid,cusAdd,bookingDate,hkid,salary}

    BookingService.createbooking(booking).then((response) =>{
        console.log(booking)
        history('/customer/book');
        

    }).catch(error=>{
        console.log(error)
  })

}
  return (
    <>
    <Navbar/>
        <Sidebar>
    <div>
      <div className='container'>
        <br></br><br></br>
        <div className='row'>
            <div className='card'>
                <h2 className='text-center'>Book Housekeeper</h2>
                <div className='card-body'>

                    <form>
                                <div className='form-group mb-2'>
                        <label className = "form-label">Customer Address</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter your address"
                                        name = "cusAdd"
                                        className = "form-control"
                                        value = {cusAdd}
                                        onChange = {(e) => setCusAdd(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                        <label className = "form-label">Date</label>
                                    <input
                                        type = "date"
                                        placeholder = "Enter The Date"
                                        name = "bookingDate"
                                        className = "form-control"
                                        value = {bookingDate}
                                        onChange = {(e) => setBookingDate(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => saveBooking(e)}>Submit </button>
                                <button className="btn btn-danger" style={{marginLeft:"10px"}}> Cancel </button>
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

export default Cust_Booking