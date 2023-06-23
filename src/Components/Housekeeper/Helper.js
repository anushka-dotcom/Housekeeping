import axios from "axios";
const id=localStorage.getItem("id");
const token=localStorage.getItem("jwt");
const role=localStorage.getItem("role");




export const getHkById=()=>{
   return axios.get(`http://localhost:8084/Housekeeper/${id}`,{
    headers: {"Authorization" : `Bearer ${token}`} 
   })
   
  
}

export const updateHk=(hou)=>{
   console.log(hou)
   return axios.put(`http://localhost:8084/Housekeeper`,hou,
  { headers: {"Authorization" : `Bearer ${token}`}}


  ) 
}



export const getBookingById=()=>{
    return axios.get(`http://localhost:8083/booking/${id}/${role}`,{
     headers: {"Authorization" : `Bearer ${token}`} 
    })
    
   
 }

 export const getTickets=()=>{
   return axios.get(`http://localhost:8082/Tickets/List/${id}`,{
    headers: {"Authorization" : `Bearer ${token}`} 
   })
   
  
}

export const postTickets=(tic)=>{
   console.log(tic)
   return axios.post(`http://localhost:8082/Tickets`,tic

  ) 
}

