import React, { useState } from 'react';
import './Men';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const Men = (props) => {
  const navigate=useNavigate();
  const handleAddressForm=()=>{
    navigate("/AddressForm");
  };
    return (
        <div> 
            
            <center><h1 className="text-center text-info">Fashion Fusion </h1></center>
          
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-4 md-4">
                              <div class="column">
                    
  <img style={{display:"inline-block"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMPDc0_rYHv7hvCWIl0XvWwKfWd29xmCCWg&usqp=CAU"height={300} width={300}></img>

    <h5 className="card-title">MEN T-SHIRT</h5>
    <p className="card-text">wear's clothes</p>
    <p>price:1000/-</p>
    <button className="btn btn-dark" onClick={handleAddressForm}>Buy now</button>
    
  </div>
  <div class="column1">
  <img style={{display:"inline-block"}}src="https://m.media-amazon.com/images/I/61PgOZ-IH0L._UX569_.jpg"height={300} width={300}></img>
    <h5 className="card-title">Men t-shirts</h5>
    <p className="card-text">wear's clothes</p>
    <p>price:1000/-</p>
    <button className="btn btn-dark"onClick={handleAddressForm}>Buy now</button>
    </div>
    <div class="column2">
    <img src="https://m.media-amazon.com/images/I/31DunX1BPYL.jpg"height={300} width={300}></img>
    <h5 className="card-title">Men glasses</h5>
    <p className="card-text">Glasses</p>
    <p>price:150/-</p>
    <button className="btn btn-dark"on Click={handleAddressForm}>Buy now</button>
    </div>
    <div class="column3">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbku4wJY_6ivDlfGZs8zSc3iofjiZM6Yttjg&usqp=CAU"height={300} width={300}></img>
    <h5 className="card-title">Men Wallet</h5>
    <p className="card-text"></p>
    <p>price:999/-</p>
    <button className="btn btn-dark" on Click={handleAddressForm}>Buy now</button>
    </div>
    <div class="column4">
    
    <img src="https://rukminim1.flixcart.com/image/800/800/k0r15e80/kids-shoe/w/g/j/1-kids-shoes-tryviz-original-imafkggdbvhf2zvv.jpeg?q=90"height={300} width={300}></img>
  
    <h5 className="card-title">Men Shoes</h5>
    <p className="card-text"></p>
    <p>price:1999/-</p>
    <button className="btn btn-dark"onClick={handleAddressForm}>Buy now</button>
    </div>
    <div class="column5">
    <img src="https://tse4.mm.bing.net/th?id=OIP.A2ZmcST5jv1DCowqR8g0-wHaIt&pid=Api&P=0&h=180"height={300} width={300}></img>
    <h5 className="card-title">Men Shirt</h5>
    <p className="card-text"></p>
    <p>price:899/-</p>
    <button className="btn btn-dark"on Click={handleAddressForm}>Buy now</button>
    </div>
    <div class="column6">
</div>
  </div>
</div>
</div>
</div>
</div>

                                
                                
  </div>
  );
}
export default Men;