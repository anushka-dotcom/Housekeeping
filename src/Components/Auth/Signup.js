import React, { useState,useEffect } from 'react'
import applogo from '../Housekeeper/images/applogo.jfif'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
  const [name,setName] = useState("");
  const [fullname,setFullname]=useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const[role,setRole]=useState("");
 const navigate=useNavigate();



 useEffect(() => {
   console.log()
 }, [])


const submit=(e)=>{
  console.log(name,email,password,role);
e.preventDefault();
axios.post("http://localhost:8081/auth/signup",{
  "userName": name,
  "password" : password,
  "role": role
}).then((res)=>{
  console.log(res.data)

  if(role!="admin")
  {  
    const firstlast=fullname.split(" ");
    axios.post(role==="customer"?"http://localhost:8090/customers":"http://localhost:8084/Housekeeper",
  {
         "id": res.data.userId,
         "username": name,
         "password": password,
         "email":email,
         "firstName": firstlast[0],
         "lastName": firstlast[1]
         
     }).then((res)=>{
  console.log(res.data)
  
  navigate("/login");
})
}
navigate("/login");

 
}).catch((err)=>{
  console.log(err)
}
)}
  
  
  
  
  
  return (
    <div>
       <div className='container'>
        <div className='row'>
        <div className='col-lg-6 pt-5 mt-5 flex-column d-flex jutify-content-center align-items-center'>

<img alt='' className='ml-5'   src={applogo} height='200px'/>
<h3 className='mt-3 ' style={{color:'#ff9933',fontWeight:'bold'}}>Manage My House</h3>
</div>
<div className='col-lg-6 mt-2 container shadow p-5'>
<form className='gap-5 mt-lg-n3'>
<h1 className='mt-1 color-orange ' style={{color:'#ff9933',fontWeight:'bold'}}>Sign Up</h1>
<div className="mb-3 mt-3">
  <label>Username</label>
  <input value={name} 
    onChange={(e)=>setName(e.target.value)}
    type="text"
    className="form-control shadow"
    placeholder="Enter your username"
  />
</div>
<div className="mb-3">
  <label>Full Name</label>
  <input value={fullname} 
    onChange={(e)=>setFullname(e.target.value)}
    type="text"
    className="form-control shadow"
    placeholder="Enter your full name"
  />
  </div>
<div className="mb-3">
  <label>Email address</label>
  <input value={email} 
    onChange={(e)=>setEmail(e.target.value)}
    type="email"
    className="form-control shadow"
    placeholder="Enter your email"
  />
  </div>
  <div className='mt-3 '>
    <label className='mb-2 mt-2'>Role</label>
    <div class="form-check ml-3 form-check-inline">
  <input  
    onChange={(e)=>setRole("customer")}
     class="form-check-input ml-3" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label " for="inlineRadio1">Customer</label>
</div>
<div class="form-check form-check-inline">
  <input  onChange={(e)=>setRole("housekeeper")}
  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Housekeeper</label>
</div>
{/* <div class="form-check form-check-inline">
  <input  onChange={(e)=>setRole("admin")}
  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label class="form-check-label" for="inlineRadio3">Admin</label>
</div> */}
</div>
  
<div className="mb-3">
  <label>Password</label>
  <input value={password} 
    onChange={(e)=>setPassword(e.target.value)}
    type="password"
    className="form-control shadow"
    placeholder="Enter your password"
  />
</div>
<div className="d-grid">
  <button type="submit" onClick={submit} className="btn bg-theme font-weight-bold mt-3 shadow mb-1">
    Sign Up
  </button>
</div>
<p className="forgot-password text-right ">
  Already registered <a href="/login">sign in?</a>
</p>
</form>
</div>
        </div>
      

       </div>

    </div>
  )
}