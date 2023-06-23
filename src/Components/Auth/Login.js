import React, {useState,useEffect} from 'react' 
import applogo from '../Housekeeper/images/applogo.jfif'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Nav_bar from './Nav_bar';
function Login() {

const [name,setName] = useState("");
const [password,setPassword] = useState("");
 const[role,setRole]=useState("");
 const navigate=useNavigate();

 const submit=(e)=>{
  console.log(name,password,role);
e.preventDefault();
if(!name || !password || !role)
{
  alert("Please fill all the details!!!!")
}
else{
  axios.post("http://localhost:8081/auth/login",{
  "userName": name,
  "password" : password,
}).then((res)=>{
  const details=res.data.split(" ")
  console.log(res.data)
  localStorage.setItem('jwt', details[0]);
  localStorage.setItem('id',details[1]);
  localStorage.setItem('role',role);
  //navigate("/login");
  if (role==="customer"){
    navigate("/customer/book");
  }
  else if(role==="housekeeper"){
    navigate("/housekeeper/booking");
  }
  else{
    navigate("/admin/dashboard");
  }


}).catch((err)=>{
  alert("wrong credentials!!!!")
  console.log(err)
}
)
}
}



    return ( 
      <>
      <div class="row m-5">
      <div class="col">
      <img className='ml-5'   src={applogo} height='200px'/>
      <h3 className='mt-3 ' style={{color:'#ff9933',fontWeight:'bold'}}>Manage My House</h3>
      </div>
      <div class="col card d-flex justify-content-center" >
<div class="card-body">
      <form>
      <h3>Sign In</h3>
      <div class="mb-3">
        <label>Username</label>
        <input value={name} 
    onChange={(e)=>setName(e.target.value)}
          type="text"
          class="form-control"
          placeholder="Enter Username"
        />
      </div>
      <div class="mb-3">
        <label>Password</label>
        <input value={password} 
    onChange={(e)=>setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter password"
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
<div class="form-check form-check-inline">
  <input  onChange={(e)=>setRole("admin")}
  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label class="form-check-label" for="inlineRadio3">Admin</label>
</div>
</div>
      
      
      <div className="d-grid">
        <button type="submit" class="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </div>
      <p>
       If not already registered <a href="signup">click here</a> 
      </p>
    </form>
    </div>
    </div>
    </div>
    </>
     );
}

export default Login;