import React from 'react';
import './home.css';
// import "bootstrap/dist/css/bootstrap.min.css";


function Home()  {
    return (
        <div>
          <h3>Cretae new student card</h3>
            <form>
              <div className="form-group"> 
                  <label>Username: </label>
                  <input type="text" />
                </div>
                <div className="form-group"> 
                  <label>Email: </label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Contact No: </label>
                  <input type="text" />
                </div>
                <div className="form-group">
                    <label>Resume/CV link: </label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User Log" className="btn btn-primary" />
               </div>
          </form>
    </div>
    )
}


export default Home;