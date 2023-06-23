import axios from 'axios'

const MARK_BASE_REST_API_URL = 'http://localhost:8084/Housekeeper';
const token=localStorage.getItem("jwt");

class MarkAttendanceService{

    updateHousekeeper(housekeeper_id){
        console.log("token=="+token)
        return axios.put(`http://localhost:8084/Housekeeper/${housekeeper_id}`,{},{
        headers: {"Authorization" : `Bearer ${token}`}
        

    })
    }
   
  
}



export default new MarkAttendanceService();