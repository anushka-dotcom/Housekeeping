import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate } from 'react-router-dom';
import TicketService from './TicketService';
import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';

const AddTicket = () => {


const[issue, setIssue] = useState('')
const issuer_id = JSON.parse(localStorage.getItem('id'));
const history =useNavigate();
const saveTicket = (e) => {
    e.preventDefault();

    const ticket = {issue, issuer_id}
    TicketService.createTicket(ticket).then((response) => {
        console.log(response.data)
        history('/customer/getsupport');
    }).catch(error=>{
        console.log(error)
    })
}
  return (
    <>
    <Navbar/>
    <Sidebar>
    
    <div className='container'>
        <br></br><br></br>
        <div className='row'>
            <div className='card'>
                <h2 className='text-center'>Raise new ticket</h2>
                <div className='card-body'>
                    <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Issue: </label>
                                    <input
                                        type = "textarea"
                                        placeholder = "Enter the issue"
                                        name = "issue"
                                        className = "form-control"
                                        value = {issue}
                                        onChange = {(e) => setIssue(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => saveTicket(e)} >Save </button>
                                <Link to="/customer/book" className="btn btn-danger"> Cancel </Link>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>  
    </Sidebar>
    </>
    )
}

export default AddTicket;