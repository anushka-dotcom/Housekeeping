import axios from "axios";

const Booking_BASE_REST_API_URL="http://localhost:8083/booking/createbooking";
const token=localStorage.getItem("jwt");
const id=localStorage.getItem("id");

class BookingService{
    createbooking(booking){
        return axios.post(Booking_BASE_REST_API_URL, booking,
            { headers: {"Authorization" : `Bearer ${token}`}}
            );
    }
    mybookings(){
        return axios.get(`http://localhost:8083/booking/${id}`,
            { headers: {"Authorization" : `Bearer ${token}`}}
            );
    }
    
}

export default new BookingService();