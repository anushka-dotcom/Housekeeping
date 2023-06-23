import React, {useState } from 'react'
import profile from "./../images/contact.png";

import { Link, useNavigate } from 'react-router-dom'
import './../style/MarkAttendance.css';
import MarkAttendanceService from './MarkAttendanceService';
import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';

const MarkAttendance = () =>{
    const [housekeeper_id, setHousekeeperAttendance] = useState('')
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const history =useNavigate();
    
    const saveAttendance =(e) =>{
        e.preventDefault();

        MarkAttendanceService.updateHousekeeper(housekeeper_id).then((response) =>{
            console.log(response.data)
            history('/customer/book');
        }).catch(error =>{
            console.log(error)
        })
    }
    return (
      <>
        <Navbar/>
        <Sidebar>
        <div className="main">
         <div className="sub-main">
           <div>
             <div className="imgs">
               <div className="container-image">
                 <img src={profile} alt="profile" className="profile"/>
    
               </div>
    
    
             </div>
             <form>
             <div>
               <h1>Mark Attendance</h1>
               <br/>
               <div>
                 <span className="date">Date: {date}</span>
               </div>
                <br/><br/><br/>
               <div>
                 
               <input
                    type = "text"
                    placeholder = "Enter housekeeper's Id"
                    name = "housekeeper_id"
                    className = "name"
                    value = {housekeeper_id}
                    onChange = {(e) => setHousekeeperAttendance(e.target.value)}>
                </input>
               </div>
               
               <br/><br/><br/>
               <div>
               
               <button className = "btn" onClick = {(e) => saveAttendance(e)} >Submit </button>
              </div>
              
     
             </div>
             </form>
           </div>
           
    
         </div>
        </div>
        </Sidebar>
        </>
    
      )
  }

export default MarkAttendance