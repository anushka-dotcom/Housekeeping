import Nav from './Admin_main'
function Ad_TicketView() {
    return ( 
        <>
    <Nav/>
    <div className="container bg-primary mt-4 p-5 rounded-3">
    <div class="bg-light p-4 rounded-3">
    <form>
  <div class="form-group d-flex flex-row justify-content-evenly">
  <img className="adminimage" width="180px" height="190px" src="https://www.bing.com/th?id=OIP.p3GWq9o6cGrlzg8DrxS_EAHaK3&w=206&h=302&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></img>
    <ul>
        <li className='d-flex flex-row '>
          
            <h4>Ananya Mahato</h4>
        </li>
    </ul>
  </div>
  <div class="form-check d-flex flex-row gap-5 mt-5 mb-4">
  <label><h4>Query:</h4></label>
    <input disabled="true" type="password" style={{boxShadow:'1px 1px 4px 1px orange'}}  class="form-control" id="exampleInputPassword1" placeholder="Attendance not marked"/>
  </div>
  <div class="form-check d-flex flex-row gap-3 mt-5 mb-3">
  <label><h4>Statement:</h4></label>
  <textarea row="100" cols="100">
  </textarea>
  </div>
  <div class="form-check d-flex flex-row gap-5 mt-5 mb-4">
  <h4 class="">Solved:  <i className=" mx-3 solve bi bi-x-square-fill"></i></h4>
  </div>
</form>
</div>
    </div>
    </>
     );
}

export default Ad_TicketView;