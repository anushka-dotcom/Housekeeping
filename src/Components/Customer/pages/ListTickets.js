import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TicketService from './TicketService'
import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';
const ListTickets = () => {
    const [tickets, setTickets] = useState([])
    const issuer_id = JSON.parse(localStorage.getItem('id'));

    useEffect(() => {
      
        TicketService.getTicketList(issuer_id).then((response) => {
            setTickets(response.data)
            console.log(response.data);
        }).catch(error => {console.log(error);
    })
    }, [])
    

    return (
        <>
        <Navbar/>
        <Sidebar>
        <div className='container-fluid rounded my-1 p-5'>
            <h2 className='text-center'>All Tickets</h2>
            <Link to = "/customer/add-ticket" className='btn btn-primary mb-2'>Raise new Ticket</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th class="h5" scope="col"> Ticket Id </th>
                    <th class="h5" scope="col"> Issuer Id </th>
                    <th class="h5" scope="col"> Issue </th>
                    <th class="h5" scope="col"> Status </th>
                </thead>
                <tbody>
                    {
                        tickets.map(
                            ticket =>
                            <tr key = {ticket.ticket_id}> 
                                <td> {ticket.ticket_id} </td>
                                <td>{ticket.issuer_id}</td>
                                <td>{ticket.issue}</td>
                                <td>{ticket.status}</td>
                               
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

export default ListTickets