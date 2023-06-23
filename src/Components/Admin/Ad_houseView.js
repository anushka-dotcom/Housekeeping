import React, { useEffect, useState } from 'react'
import Nav from './Admin_main'
import{getHkById,verifyHk} from './Helper'


function Ad_houseView(props) {
  const[housekeeper,setHousekeeper]=useState();
  
  const Verification=(hkId)=>{
    verifyHk(hkId).then((data)=>{

       console.log(data)
       props.false();
       window.location.reload(false)
     })
  }

  useEffect(() => {
     getHkById(props.hkid).then((data)=>{
      setHousekeeper(data.data)
       console.log(data)
     })
    
  }, [])
  

    return ( 
        <>
        
      <div class="container bg-primary my-5 p-5">
        <div class="card mb-3" >
            <div class="row no-gutters">
              <div class="col-md-4 ">
                  <img src={housekeeper?housekeeper.image:""} class="card-img" alt="..."></img>
              </div>
            <div class="col-md-8">
              <div class="card-body">
                  <h1 class="card-title">Housekeeper View</h1>
                  <hr/>
                 
                  <ul >
                  <div>
                     <li className='d-flex flex-row justify-content-between ms-2'>
                       <h5> Name:</h5>
                       <input disabled="true" type="text" className="form-control ms-2" id="hkName" placeholder={housekeeper?housekeeper.username:""}/>
                    </li>                
                    </div>
                    <hr/>
                    
                  <div class="my-4">
                    <li className='d-flex flex-row justify-content-between  ms-3'>
                       <h5>Salary:</h5>
                       <input disabled="true" type="text"  className="form-control m-2" id="salary" placeholder={housekeeper?housekeeper.salary:""}/>

                    </li>
                    <li className='d-flex flex-row justify-content-between  m-3'>
                       <h5>Address:</h5>
                       <input disabled="true" type="text"  className="form-control m-2" id="address" placeholder={housekeeper?housekeeper.custAddress:""}/>
                    </li>
                    <li className='d-flex flex-row m-3'>
                       <h5>Ratings:</h5>
                       <div>
                       <i class="bi star bi-star-fill ms-2"></i>
                       <i class="bi star bi-star-fill "></i>
                       <i class="bi star bi-star-fill "></i>
                       <i class="bi star bi-star-fill "></i>
                       <i class="bi star bi-star-half"></i>
                       
                       </div>
                       
                     
                    </li>
                  </div>
                <hr/>
                  <div class="my-4 gap-2">
                    <h2>Verified:{housekeeper?housekeeper.verified==="verified"?<i className=" verify bi bi-patch-check-fill"></i>:<i className=" notVerify bi bi-x-octagon-fill"></i>:null} 
                    
                    {housekeeper?housekeeper.verified==="verified"?null:<><button className='m-3' 
                      onClick={()=>Verification(housekeeper.id)}>Verify</button></>:null}
                    
                    
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

export default Ad_houseView;