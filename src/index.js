
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import Cus from "./Components/Admin/Admin_cus";
import Dashboard from "./Components/Admin/Admin_dashboard";
import Tickets from "./Components/Admin/Admin_tickets";
import Booking from "./Components/Admin/Admin_book";
import Views from "./Components/Admin/Admin_bookView";
import TicketView from "./Components/Admin/Ad_TicketView";
import HouseList from "./Components/Admin/Ad_houseList";
import HouseView from "./Components/Admin/Ad_houseView"
import Adminprofile from './Components/Admin/Admin_profile';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hk_booking from './Components/Housekeeper/Hk_booking';
import Hk_profile from './Components/Housekeeper/Hk_profile';
import Hk_logout from './Components/Housekeeper/Hk_logout';
import Hk_ticket from './Components/Housekeeper/Hk_ticket';
import Hk_addTicket from './Components/Housekeeper/Hk_addTicket';
import Hk_attendance from './Components/Housekeeper/Hk_attendance';
import Login from './Components/Auth/Login';
import Signup from "./Components/Auth/Signup"


import BookHousekeeper from './Components/Customer/pages/Book Housekeeper';
import ListTickets from './Components/Customer/pages/ListTickets';
import Profile from './Components/Customer/pages/Profile';
import Logout from './Components/Customer/pages/Logout';
import AddTicket from './Components/Customer/pages/AddTicket';
import MarkAttendance from './Components/Customer/pages/MarkAttendance';



import './main.css';
import Hk_editProfile from './Components/Housekeeper/Hk_editProfile';
import EditProfile from './Components/Customer/pages/EditProfile';
import Cust_Booking from './Components/Customer/pages/Cust_Booking';
import HkProfileTest from './Components/Customer/pages/HkProfileTest';
import MyBookings from './Components/Customer/pages/MyBookings';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
      <Routes>
      <Route path="/" element = {<Login/>}/>
        <Route path="/admin/dashboard" element={<Dashboard />}/>
        <Route path="/admin/customers" element={<Cus />}/>
        <Route path="/admin/tickets" element={<Tickets />}/>
        <Route path="/admin/bookings" element={<Booking />}/>
        <Route path="/admin/profile" element={<Adminprofile />}/>
        <Route path="/admin/views" element={<Views />}/>
        <Route path="/admin/ticketViews" element={<TicketView />}/>
        <Route path="/admin/houseList" element={<HouseList />}/>
        <Route path="/admin/houseView" element={<HouseView />}/>
     
    
        <Route path="/housekeeper/booking" element = {<Hk_booking/>}/>
        <Route path="/housekeeper/profile" element = {<Hk_profile/>}/>
        <Route path="/housekeeper/logout" element = {<Hk_logout/>}/>
        <Route path="/housekeeper/ticket" element = {<Hk_ticket/>}/>
         <Route path="/housekeeper/addticket" element = {<Hk_addTicket/>}/>
        <Route path="/housekeeper/attendance" element = {<Hk_attendance/>}/>
        <Route path="/housekeeper/editProfile" element = {<Hk_editProfile/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>




        <Route path="/customer/book" element={<BookHousekeeper />}></Route>
        <Route path="/customer/book/booking/:hkid/:salary" element={<Cust_Booking />}></Route>
        <Route path="/housekeeper/profile/:hkid" element={<HkProfileTest />}></Route>
        

          <Route path="/customer/getsupport" element={<ListTickets />} />
          <Route path="/customer/profile" element={<Profile />} />
          <Route path="/customer/logout" element={<Logout />} />
          <Route path="/customer/editprofile" element = {<EditProfile/>}></Route>
          <Route path="/customer/add-ticket" element = {<AddTicket/>}></Route>
          <Route path="/customer/bookings" element = {<MyBookings/>}></Route>
          <Route path="/customer/mark" element = {<MarkAttendance/>}></Route>
    </Routes>

  </BrowserRouter>

  
);

