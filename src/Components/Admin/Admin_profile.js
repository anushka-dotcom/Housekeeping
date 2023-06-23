import React, { useState } from 'react'
import Nav from "./Admin_main";
import "./admin.css"

export default function Admin_profile() {
  const [makedisable,setMakedisable]=useState(true);
  return (
    <>
    <Nav/>
    <div class="container bg-primary my-5 p-5">
        <div class="card mb-3" >
            <div class="row no-gutters">
              <div class="col-md-4 ">
                  <img src="https://th.bing.com/th/id/OIP.lthwitFqhzmDhxcpH7G2ZAHaHw?pid=ImgDet&w=193&h=202&c=7" height="60%" class="card-img" alt="..."></img>
              </div>
            <div class="col-md-8">
              <div class="card-body">
                <div className='d-flex flex-col justify-content-between'>
                <h1 class="card-title">Profile</h1>
                {/* <button type="button" class="h-75 btn btn-danger bg-primary text-light" onClick={()=>setMakedisable(false)}>{makedisable? <>Edit</>:<>Save</>}</button> */}
                </div>
                  
                  <hr/>
                 
                  <ul >
                  <div>
                     <li className='d-flex flex-row justify-content-between m-2 '>
                       <h5>Name:</h5>
                       <input disabled={makedisable} type="text" className="form-control m-2" id="hkName" placeholder="Admin User"/>
                    </li>
                    <li className='d-flex flex-row justify-content-between m-3'>
                       <h5>Phone:</h5>
                       <input disabled={makedisable} type="text" className="form-control m-2" id="bookId" placeholder="7001365857"/>
                    </li>
                    <li className='d-flex flex-row justify-content-between  m-3'>
                       <h5>Email:</h5>
                       <input disabled={makedisable} type="email"  className="form-control m-2" id="bookDate" placeholder="xyz@gmail.com"/>

                    </li>
                    <li className='d-flex flex-row justify-content-between  m-3'>
                       <h5>Address:</h5>
                       <input disabled={makedisable} type="text"  className="form-control m-2" id="cusName" placeholder="Ramanath sarani sb gorai road"/>
                    </li>
                    </div>
                    <hr/>
                    
                  <div class="my-4">
                    <li className='d-flex flex-row justify-content-between  m-3'>
                       <h5>Role:</h5>
                       <input disabled="true" type="text"  className="form-control m-2" id="salary" placeholder="Admin"/>

                    </li>
                    
                  </div>
                
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
