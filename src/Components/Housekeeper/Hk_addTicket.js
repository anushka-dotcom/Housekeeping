import React,{useEffect,useState} from 'react'
import Nav_bar from './nav_bar'
import {useNavigate,Link} from 'react-router-dom'
import {postTickets} from './Helper'

export default function Hk_addTicket() {
  




    const[issue, setIssue] = useState('')
    const issuer_id = JSON.parse(localStorage.getItem('id'));
    const history =useNavigate();
    const saveTicket = (e) => {
        e.preventDefault();
    
        const tic = {issue, issuer_id}
        console.log(tic)
        postTickets(tic).then((response) => {
            console.log(response)
            history('/housekeeper/ticket');
        }).catch(error=>{
            console.log(error)
        })
    }
      return (
        <>
         <Nav_bar/>

<nav class="navbar navbar-light " style={{backgroundColor: '#ff9933' }}>
     <div class="container-fluid mx-5 ">
        <h1 class="ms-5">Booking Details</h1>
    
         <form class="d-flex">
             <input class="form-control me-2" type="text" />
            <button class="btn btn-outline-light bg-secondary"  type="submit"><i class="bi bi-search"></i></button>
        </form>
    </div>
</nav>
        
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
                                    <Link to="/housekeeper/ticket" className="btn btn-danger"> Cancel </Link>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>  
      
        </>
        )
}
