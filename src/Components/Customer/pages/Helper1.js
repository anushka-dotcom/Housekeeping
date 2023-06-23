import axios from "axios";
const token=localStorage.getItem("jwt");





export const getHkById=(id)=>{
   return axios.get(`http://localhost:8084/Housekeeper/${id}`,
      { headers: {"Authorization" : `Bearer ${token}`}}
   )
   
}

