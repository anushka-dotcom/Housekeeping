import React, { useEffect, useState } from 'react'
import { getHkById } from './Helper1';
import { useParams } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';
export default function Hk_profile() {

  const [housekeeper, setHousekeeper] = useState();
  const [img, setImg] = useState("");
  const[makeDis,setMakeDis]=useState(true)
  const[fn,setFn]=useState("")
  const[ln,setLn]=useState("")
  const[ph,setPh]=useState("")
  const[gmail,setGmail]=useState("")
  const[ad,setAd]=useState("")
  const[gender,setGender]=useState("")
  const[date,setDate]=useState("")
  const[view,setView]=useState(false)
  const { hkid } = useParams();


  useEffect(() => {
    getHkById(hkid).then((data) => {
      setHousekeeper(data.data)
      setFn(data.data.firstName)
      setLn(data.data.lastName)
      setAd(data.data.custAddress)
      setDate(data.data.date)
      setGender(data.data.gender)
      setGmail(data.data.gmail)
      setPh(data.data.phNo)
      setImg(data.data.image)

      console.log(data)
    })

  }, [])

  return (
    <>
    <Navbar/>
        <Sidebar>
    <div class="justify-content-center">
      <nav class="navbar navbar-light " style={{ backgroundColor: '#ff9933' }}>
        <div class="container-fluid mx-2 ">
          <h1 class="ms-5">Profile</h1>
        </div>
      </nav>
      <div class="text-center my-5">
        <img src={img} class="rounded m-3" width="210" height="250" alt="..." />
        
      </div>

      <form>
        <center>

          <div class="row g-3 align-items-center p-2 justify-content-center ">
            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>FirstName</h4></label>
            </div>
            <div class="col-auto">
              <input disabled={makeDis} onChange={(e)=>setFn(e.target.value)}  type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={housekeeper ? housekeeper.firstName : ""} />
            </div>

            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>Last Name</h4></label>
            </div>

            <div class="col-auto">
              <input disabled={makeDis} onChange={(e)=>setLn(e.target.value)} type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={housekeeper ? housekeeper.lastName : ""} />
            </div>


          </div>


          <div class="row g-3 align-items-center p-2 justify-content-center ">
            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>UserName</h4></label>
            </div>

            <div class="col-auto">
              <input disabled="true" type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={housekeeper ? housekeeper.username : ""} />
            </div>

            <div class="col-auto">
              <label for="inputdate" class="col-form-label"><h4>Date of Birth</h4></label>
            </div>
            <div class="col-auto">
              <input disabled={makeDis} onChange={(e)=>setDate(e.target.value)} type="date" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={housekeeper ? housekeeper.dob : ""} />
            </div>


          </div>


          <div class="row g-3 align-items-center p-2 justify-content-center">
            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>Gender</h4></label>
            </div>
            <div class="col-auto">
              <input disabled={makeDis} onChange={(e)=>setGender(e.target.value)} type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={housekeeper ? housekeeper.gender : ""} />
            </div>
            <div class="col-auto">
              <label for="inputmail" class="col-form-label"><h4>Email</h4></label>
            </div>
            <div class="col-auto">
              <input disabled={makeDis} onChange={(e)=>setGmail(e.target.value)} type="email" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={housekeeper ? housekeeper.email : ""} />
            </div>

          </div>

          <div class="row g-3 align-items-center p-2 justify-content-center">
            <div class="col-auto">
              <label for="inputcontact" class="col-form-label"><h4>Contact No</h4></label>
            </div>
            <div class="col-auto">
              <input disabled={makeDis} onChange={(e)=>setPh(e.target.value)} type="tel" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={housekeeper ? housekeeper.phNo : ""} />
            </div>

            <div class="col-auto ">
              <label for="inputname" class="col-form-label"><h4>Salary</h4></label>
            </div>

            <div class="col-auto">
              <input disabled={makeDis} type="text" style={{ boxShadow: '1px 1px 4px 1px orange' }} class="form-control" id="exampleInputPassword1" placeholder={housekeeper ? housekeeper.salary : ""} />
            </div>


          </div>
        


        </center>
      </form>
    </div>
    </Sidebar>
    </>


  )
}
