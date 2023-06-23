import React,{useEffect,useState} from 'react'
import Nav_bar from './nav_bar'
import { getTickets } from './Helper'
import Hk_addTicket from './Hk_addTicket';
import {useNavigate,Link} from 'react-router-dom'

export default function Hk_ticket() {
  
  const [ticket,setTicket]=useState([]);
  const[view,setView]=useState(false)
  const history =useNavigate();

  useEffect(() => {
    getTickets().then((data) => {
      setTicket(data.data)
      console.log(data.data)
    })

  }, [])
  
  
  
  
  
  return (
    <div>
        <Nav_bar/>

        <nav class="navbar navbar-light " style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid mx-5 ">
                <h1 class="ms-5">Tickets</h1>
            
                 
            </div>
        </nav>
        <div className='container-fluid  my-1 p-5'>
    <button onClick={()=>history("/housekeeper/addticket")} className='mb-4'>Raise New Ticket</button>
        
        <table class="table ">
          
  <thead>
    <tr>
      <th class="h4" scope="col">Ticket Id</th>
      <th class="h4" scope="col">Issuer id</th>
      <th class="h4" scope="col">Issue</th>
      <th class="h4" scope="col">Status</th>

    </tr>
  </thead>
  <tbody>
  {ticket.map((tick)=>
          {
            return(
              <tr>
              <td scope="row">{tick.ticket_id}</td>
  
              <td>{tick.issuer_id}</td>
              <td>{tick.issue}</td>
              <td>{tick.status}</td>

              
            </tr>
            )
            
          })}
    
  </tbody>
</table>
        </div>
        
        </div>
  )
}