import React, { useState } from 'react';
import './Women';
import './Category.css';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
const Women = (props) => {
  const navigate = useNavigate();
  const handleAddress1 = () => {
    navigate("/addressform1");

  };
  return (
    <div>

      <center><h1 className="text-center text-info">Fashion Fusion</h1></center>

      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="colu-md-9">
            <div className="row">
              <div className="col-md-4 md-4">
                <div class="col">


                  <div class="col1">
                    <img src="https://ae01.alicdn.com/kf/HTB1i9K3ainrK1RjSsziq6xptpXaK/Women-Famous-Brand-Watches-Fashion-Women-s-Ladies-Fashion-Women-Casual-Watch-Luxury-Analog-Quartz.jpg" height={300} width={300}></img>

                    <h5 className="card-title">Watch</h5>
                    <p className="card-text"></p>
                    <p>price:499/-</p>
                    <button className="btn btn-dark" onClick={handleAddress1}>Buy now</button>
                  </div>
                  <div class="col2">

                    <img src="https://ae01.alicdn.com/kf/HTB1n2C0EDlYBeNjSszcq6zwhFXaZ/2018-Fashion-New-Flower-Bead-Kids-Sandals-Girls-Shoes-Children-Sandals-For-Little-Girls-Summer-Sandals.jpg" height={300} width={300}></img>
                    <h5 className="card-title">Women Sandals</h5>
                    <p className="card-text"></p>
                    <p>price:799/-</p>
                    <button className="btn btn-dark" onClick={handleAddress1}>Buy now</button>
                  </div>
                  <div class="col3">
                    <img src="https://2.bp.blogspot.com/-C5B-EAB36GI/UsbfUG__AvI/AAAAAAAAGAs/6fajUB26tEI/s1600/diaomnd+necklace.jpg" height={300} width={300}></img>

                    <h5 className="card-title">Women Jewellary</h5>
                    <p className="card-text"></p>
                    <p>price:799/-</p>
                    <button className="btn btn-dark" onClick={handleAddress1}>Buy now</button>


                  </div>
                  <div class="col5">
                    <img src="http://newfashionelle.com/wp-content/uploads/2017/02/Latest-Indian-Party-Wear-Dresses-2017.jpg" height={300} width={300}></img>

                    <h5 className="card-title">Women dress</h5>
                    <p className="card-text"></p>
                    <p>price:799/-</p>
                    <button className="btn btn-dark" onClick={handleAddress1}>Buy now</button>


                  </div>
                  <div class="col6">
                    <img src="https://i.pinimg.com/originals/45/9a/af/459aaf43563842473ce589730ccb49f3.jpg" height={300} width={300}></img>

                    <h5 className="card-title">Women saree</h5>
                    <p className="card-text"></p>
                    <p>price:799/-</p>
                    <button className="btn btn-dark" onClick={handleAddress1}>Buy now</button>
                  
                  
                  
                  </div>
                  <div class="col7">
                  <img src="https://cdn.shopify.com/s/files/1/0220/5433/8656/products/10hmwybdPgO5K_oFXuypsmXqGoXFdBxoE.jpg?v=1668153644&width=770" height={300} width={300}></img>

                  <h5 className="card-title">Women saree</h5>
                  <p className="card-text"></p>
                  <p>price:799/-</p>
                  <button className="btn btn-dark" onClick={handleAddress1}>Buy now</button>
                  <div class="col8"></div></div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
export default Women;