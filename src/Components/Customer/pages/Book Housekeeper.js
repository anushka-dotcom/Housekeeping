import Navbar from '../Nav/Navbar';
import Sidebar from '../Side/Sidebar';
import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import HousekeeperService from '../pages/HousekeeperService'

const BookHousekeeper = () => {
    const [housekeeper, setHousekeeeeper] = useState([])
    useEffect(() => {

        HousekeeperService.getAllHousekeeper().then((response) => {
            setHousekeeeeper(response.data)
            console.log(response.data);

        }).catch(error =>{
            console.log(error);

        })
      
    }, [])
    
  return (
    <>
    <Navbar/>
        <Sidebar>
    <div className="container">
        <h2 className="text-center">List Housekeeper</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Housekeeper Id</th>
                <th>Image</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Verification</th>
                <th>Salary</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    housekeeper.map(
                        housekeeper =>    //creating alis for each housekeeper
                        <tr key={housekeeper.id}>
                            <td>{housekeeper.id}</td>
                            <td><img src={housekeeper.image} height="100"></img></td>
                            <td>{housekeeper.firstName}</td>
                            <td>{housekeeper.lastName}</td>
                            <td>{housekeeper.verified}</td>
                            <td>{housekeeper.salary}</td>
                            <td>
                                <Link className="btn btn-primary" to={`/customer/book/booking/${housekeeper.id}/${housekeeper.salary}`}>Book Now</Link>
                                <Link to={`/housekeeper/profile/${housekeeper.id}`} className=" btn btn-primary" style={{marginLeft:"10px"}}>View Profile</Link>
                            </td>
                       
                        </tr>

                    )
                }
            </tbody>
        </table>
    </div>
    </Sidebar>
        </>
  )
}

export default BookHousekeeper