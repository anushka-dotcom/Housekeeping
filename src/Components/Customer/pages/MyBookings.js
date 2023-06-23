import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';
import {useState,useEffect} from 'react'
import BookingService from './BookingService';
const MyBookings = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {

        BookingService.mybookings().then((response) => {
            setBookings(response.data)
            console.log(response.data);

        }).catch(error =>{
            console.log(error);

        })
      
    }, [])
    
  return (
    <>
    <Navbar/>
        <Sidebar>
    <div className="container">
        <h2 className="text-center">My Bookings</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Booking Id</th>
                {/* <th>Booking Date</th> */}
                <th>Customer Id</th>
                <th>Housekeeper Id</th>
                <th>Salary</th>
            </thead>
            <tbody>
                {
                    bookings.map(
                        bookings =>
                        <tr key={bookings.id}>
                            <td>{bookings.id}</td>
                            {/* <td>{bookings.booking_date}</td> */}
                            <td>{bookings.cusid}</td>
                            <td>{bookings.hkid}</td>
                            <td>{bookings.salary}</td>        
                        </tr>

                    )
                }
            </tbody>
        </table>
    </div>
    </Sidebar>
    </>
  )
}

export default MyBookings