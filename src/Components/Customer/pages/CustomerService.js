import axios from "axios";

const CUSTOMER_BASE_REST_API_URL="http://localhost:8090/customers";
const token=localStorage.getItem("jwt");
const id=localStorage.getItem("id");

class CustomerService{
    getCustomerById(){
        return axios.get(`http://localhost:8090/customers/${id}`,
        {headers: {"Authorization" : `Bearer ${token}`}}
        );
    }

    updateCustomer(Customer){
        return axios.put(CUSTOMER_BASE_REST_API_URL, Customer,
            { headers: {"Authorization" : `Bearer ${token}`}}   
            );
    }


    
}

export default new CustomerService();