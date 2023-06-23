import React, { useState,useEffect } from 'react'
import Nav from './Admin_main'
import { getAllHou } from './Helper';
import Ad_houseView from "./Ad_houseView"


export default function Ad_houseList() {
const [housekeepers,setHousekeepers]=useState([]);
const [hkid,setHkid]=useState();
const[view,setView]=useState(false)




useEffect(() => {
  getAllHou().then((data)=>{
    console.log(data)
    setHousekeepers(data.data)
    

    
   })
}, []);


  return (
    <>
    <Nav/>
    <nav class="navbar navbar-light" style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid ">
               {view?<button style={{width:'100px',backgroundColor:'black'}}><a href="/admin/houselist">Back</a></button>:<h2 class="ms-5">All Housekeepers</h2>} 
            
                 <form class="d-flex">
                     <input class="form-control me-2" type="text" />
                    <button class="btn btn-outline-primary bg-secondary" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
        </nav>
   {view?<Ad_houseView hkid={hkid} false={()=>setView(false)}/> : <div className='container-fluid  my-4 p-4'>
      
      <table class="table bg-table  table-responsive table-hover ">
        <thead style={{ backgroundColor: '#ff8533' }}>
          <tr >
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Salary</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {housekeepers.map((hou)=>{
            return(
              <tr onClick={()=>{
                
                setHkid(hou.id)
                setView(true)}} style={{cursor:'pointer'}}>
              <th scope="row">{hou?hou.id:""}</th>
  
              <td>{hou?hou.username:""}</td>
              <td>{hou?hou.email:""}</td>
              <td>{hou?hou.phNo:""}</td>
              <td>{hou?hou.salary:""}</td>
              <td>{hou?hou.verified:""}</td>
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