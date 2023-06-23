import axios from "axios";

const HOUSEKEEPER_BASE_REST_API_URL="http://localhost:8084/Housekeeper";
// const token=localStorage.getItem("jwt");

class HousekeeperService{
    getAllHousekeeper(){
        return axios.get(HOUSEKEEPER_BASE_REST_API_URL)
    }


    // updateHousekeeper(Housekeeper){
    //     return axios.put(HOUSEKEEPER_BASE_REST_API_URL, Housekeeper,
    //         { headers: {"Authorization" : `Bearer ${token}`}}   
    //         );
    // }
    
}

export default new HousekeeperService();