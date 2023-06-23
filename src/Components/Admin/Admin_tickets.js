import React, { useState,useEffect } from 'react'
import Nav from './Admin_main'
import { getAllTickets ,resolve} from './Helper';

export default function Admin_tickets() {

const [tickets,setTickets]=useState([]);
const [resolved,setResolved]=useState(false);
const [id,setId]=useState(0)
const resolveTic = (tid) =>{
  setId(tid)
  console.log(tid)
  resolve(tid).then((res)=>{
    console.log(res.data)
    setResolved(true)
    window.location.reload(false)
  }
  )
}

useEffect(() => {
  getAllTickets().then((res=>{
    setTickets(res.data);
    console.log(res.data)
  }))
}, []);
  return (
    <>
    <Nav/>
    <nav class="navbar navbar-light" style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid ">
                <h2 class="ms-5">My Tickets</h2>
            
                 <form class="d-flex">
                     <input class="form-control me-2" type="text" />
                    <button class="btn btn-outline-primary bg-secondary" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
        </nav>
    <div className='container-fluid  my-4 p-4'>
      
      <table class="table bg-table   table-responsive table-hover ">
        <thead style={{ backgroundColor: '#ff8533' }}>
          <tr >
            <th scope="col">Ticket ID</th>
            <th scope="col">Issuer Id</th>
            <th scope="col">Issue</th>
            <th scope="col">Status</th>
            <th scope="col">Click to Solve</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((tick)=>
          {
            return(
              <tr>
              <th scope="row">{tick.ticket_id}</th>
  
              <td>{tick.issuer_id}</td>
              <td>{tick.issue}</td>
              <td>{tick.status}</td>
              <td>{tick.status==="not resolved"?<button type="button" onClick={()=>resolveTic(tick.ticket_id)} class="w-50 btn btn-danger bg-danger text-light">Not Resolved</button>:
              <button type="button" disabled="true" class="w-50 btn btn-green bg-green text-light">Resolved</button>}</td>
            </tr>
            )
            
          })}
          
        </tbody>
      </table>

      <nav aria-label="..." className='my-5 d-flex justify-content-center'>
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
    </>
    
    )
}
