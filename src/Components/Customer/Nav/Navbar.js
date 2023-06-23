import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import Logo from "./Logo.png";
import CustomerService from "../pages/CustomerService";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState();



  useEffect(() => {
    CustomerService.getCustomerById().then((data) => {
      setCustomer(data.data)
      console.log(data)
    })

  }, [])
  return (
    <>
    <div className="Navbar">
      <div className="logo">
        <img src={Logo} height="50" width="50" />
        
        <Link className="heading" to="/" variant="light" style={{textDecoration: 'none'}}>
        MANAGE MY HOUSE
        </Link>
        
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/customer/profile">Welcome {customer ? customer.firstName : ""}</a>
        <form action="#" className="drop">
          <label for="lang"></label>
          <select name="languages" id="lang">
            <option value="javascript"></option>
            <option value="Profile">Profile</option>
            <option value="Logout">Logout</option>
          </select>
        </form>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </> 
  );
};

export default Navbar;
