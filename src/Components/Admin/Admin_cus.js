import React, { useState,useEffect } from 'react'
import Admin_main from './Admin_main'
import "./admin.css";
import Nav from './Admin_main'
import Ad_cusView from './Ad_cusView';
import { getAllCus } from './Helper';
export default function Admin_cus() {

const[view,setView]=useState(false)
const [cusid,setCusid]=useState();
const[customers,setCustomers]=useState([]);


useEffect(() => {
  getAllCus().then((data)=>{
   console.log(data)
   setCustomers(data.data)
   

   
  })
 
}, [])

  return (
    <>
    <Nav/>
    <nav class="navbar navbar-light" style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid ">
               {view?<button style={{width:'100px',backgroundColor:'black'}}><a href="/admin/customers">Back</a></button>:<h2 class="ms-5">All Customers</h2>} 
            
                 <form class="d-flex">
                     <input class="form-control me-2" type="text" />
                    <button class="btn btn-outline-primary bg-secondary" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
        </nav>
   {view?<Ad_cusView cusid={cusid} false={()=>setView(false)}/> : <div className='container-fluid  my-4 p-4'>
      
      <table class="table bg-table  table-responsive table-hover ">
        <thead style={{ backgroundColor: '#ff8533' }}>
          <tr >
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cus)=>{
            return(
              <tr onClick={()=>{
                
                setCusid(cus.id)
                setView(true)}} style={{cursor:'pointer'}}>
              <th scope="row">{cus?cus.id:""}</th>
  
              <td>{cus?cus.username:""}</td>
              <td>{cus?cus.email:""}</td>
              <td>{cus?cus.phoneNo:""}</td>
              <td>{cus?cus.gender:""}</td>
              <td>{cus?cus.verified:""}</td>
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
}    </>
    
  )
}
