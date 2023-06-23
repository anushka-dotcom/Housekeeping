import axios from "axios";

const HOUSEKEEPER_BASE_REST_API_URL="http://localhost:8084/Housekeeper";

class HousekeeperService{
    getHousekeeperById(HousekeeperId){
        return axios.get(HOUSEKEEPER_BASE_REST_API_URL + '/' + HousekeeperId);
    }

    updateHousekeeper(Housekeeper){
        return axios.put(HOUSEKEEPER_BASE_REST_API_URL + '/' +Housekeeper);
    }
    
}

export default new HousekeeperService();