import axios from "axios";
const TICKET_BASE_REST_API_URL = 'http://localhost:8082/Tickets';
const token=localStorage.getItem("jwt");
class TicketService{
    getAllTickets(){
        return axios.get(TICKET_BASE_REST_API_URL)
    }

    createTicket(ticket){
        return axios.post(TICKET_BASE_REST_API_URL, ticket)
    }
    getTicketList(issuer_id){
        return axios.get(`http://localhost:8082/Tickets/List/${issuer_id}`,
        {headers: {"Authorization" : `Bearer ${token}`}}
        )
    }

   
}

export default new TicketService();