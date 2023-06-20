
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate=useNavigate();

  const handleHome=()=>{
    navigate("/appbar");
  }
  return (
    <div>

      <center>
      <header>
        <h1>WELCOME  TO  OUR  Fashion Fusion</h1>
        <h2>Where style meets comfort</h2>
        <nav>
        </nav>
      </header><br/><br/><br/>
      <div>
      
        
        <div class="card">
  <img class="card-img-top" src="https://understandingecommerce.com/wp-content/uploads/2022/03/ecommerce.png"alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"><b>Let's Shop Something</b>
    </h5>
    <p class="card-text">To shop something click for the next page</p>
    <button class="btn btn-success" onClick={handleHome}>Next</button>
  </div>
</div>
</div>

          
          
      
        

      <footer>
      </footer>
      </center>
    </div>
  );
}; 

export default HomePage;