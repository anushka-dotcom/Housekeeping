import axios from "axios";
const id=localStorage.getItem("id");
const token=localStorage.getItem("jwt");



export const getHkById=(hkid)=>{
   return axios.get(`http://localhost:8084/Housekeeper/${hkid}`,{
    headers: {"Authorization" : `Bearer ${token}`} 
   })
   
  
}
export const getCusById=(cusid)=>{
   return axios.get(`http://localhost:8090/customers/${cusid}`,{
    headers: {"Authorization" : `Bearer ${token}`} 
   })
   
  
}

export const getAllTickets=()=>{
   return axios.get(`http://localhost:8082/Tickets`)
   }

export const getAllCus=()=>{
   return axios.get(`http://localhost:8090/customers`)
   }

export const getAllHou=()=>{
   return axios.get(`http://localhost:8084/Housekeeper`)
   
  
}

export const getAllBooking=()=>{
   return axios.get(`http://localhost:8083/booking/getallBooking`)
}

export const verifyHk=(hkId)=>{
   return axios.put(`http://localhost:8084/Housekeeper/verify/${hkId}`,{},{
    headers: {"Authorization" : `Bearer ${token}`} 
   })
}

export const verifyCus=(cusId)=>{
   return axios.put(`http://localhost:8090/customers/verify/${cusId}`,{},{
    headers: {"Authorization" : `Bearer ${token}`} 
   })
}

export const resolve=(tid)=>{
   return axios.put(`http://localhost:8082/Tickets/resolve/${tid}`,{},{
    headers: {"Authorization" : `Bearer ${token}`} 
   })
}