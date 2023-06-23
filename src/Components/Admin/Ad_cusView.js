import React, { useEffect, useState } from 'react'
import Nav from './Admin_main'
import{getCusById,verifyCus} from './Helper'

export default function Ad_cusView(props) {
    const[customer,setCustomer]=useState();
    const[img,setImg]=useState("");
  
    const Verification=(cusId)=>{
      verifyCus(cusId).then((data)=>{
  
         console.log(data)
         props.false();
         window.location.reload(false)
       })
    }
    useEffect(() => {
       getCusById(props.cusid).then((data)=>{
        console.log(data)
        setCustomer(data.data)
        setImg(data.data.image)

        
       })
      
    }, [])
    
  
      return ( 
          <>
          
        <div class="container bg-primary my-5 p-5">
          <div class="card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-4 ">
                    <img src={img} class="card-img" alt="..."></img>
                </div>
              <div class="col-md-8">
                <div class="card-body">
                    <h1 class="card-title">customer View</h1>
                    <hr/>
                   
                    <ul >
                    <div>
                       <li className='d-flex flex-row justify-content-between ms-2'>
                         <h5> UserName:</h5>
                         <input disabled="true" type="text" className="form-control ms-2" id="hkName" placeholder={customer?customer.username:""}/>
                      </li>                
                      </div>
                      <hr/>
                      
                    <div class="my-4">
                      <li className='d-flex flex-row justify-content-between  ms-3'>
                         <h5>Email</h5>
                         <input disabled="true" type="text"  className="form-control m-2" id="salary" placeholder={customer?customer.email:""}/>
  
                      </li>
                      <li className='d-flex flex-row justify-content-between  m-3'>
                         <h5>Address:</h5>
                         <input disabled="true" type="text"  className="form-control m-2" id="address" placeholder={customer?customer.address:""}/>
                      </li>
                      <li className='d-flex flex-row m-3'>
                         <h5>Gender</h5>
                         <input disabled="true" type="text"  className="form-control m-2" id="address" placeholder={customer?customer.gender:""}/>
                      </li>
                    </div>
                  <hr/>
                  <div class="my-4 gap-2">
                    <h2>Verified:{customer?customer.verified==="verified"?<i className=" verify bi bi-patch-check-fill"></i>:<i className=" notVerify bi bi-x-octagon-fill"></i>:null} 
                    
                    {customer?customer.verified==="verified"?null:<><button className='m-3' 
                      onClick={()=>Verification(customer.id)}>Verify</button></>:null}
                    
                    
                    </h2>
                    
                  </div>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  
          </>
       );
}
