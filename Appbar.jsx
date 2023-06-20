import* as  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import './Category.css';


  export default function ButtonAppBar() {

    const navigate=useNavigate();
    const handleMen=()=>{
        navigate("/men");
    }
    const handleWomen=()=>{
        navigate("/women");
    };
    const handleAddress=() =>{
        navigate("/AddressForm");
    };
    const handleChildren=()=>{
        navigate("/children");
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fashion Fusion
          </Typography>
          <div>
            <center>
              <center><h1>ALL PRODUCTS</h1><br/><br/><br/></center>
          <Button color="inherit" onClick={handleMen}>Men</Button>
          <Button color="inherit" onClick={handleWomen}>Women</Button>
          <Button color="inherit" onClick={handleChildren}>Children</Button>
          </center></div>
        </Toolbar>
      </AppBar><br></br>
      <div class="row">
        <div class="column">
      
      <img style={{display:"inline-block"}} src="https://m.media-amazon.com/images/I/51mbaE1hxNL._SX679_.jpg" height={300} width={300}></img>

      <h5 className="card-title">WOMEN DRESS</h5>
    <p className="card-text">wear's clothes</p>
    <p>price:1000/-</p>
    
    </div>
    <div class="column1">
    <img style={{display:"inline-block"}}src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc14d7849/images/hi-res/502760NMXAB28_1.jpg?sw=640&sh=640" height={300} width={300}></img>
      <h5 className="card-title">JEWELLARY</h5>
    <p className="card-text">wear</p>
    <p>price:1200/-</p>
    
    </div><div class="column2">
    <img src="https://img3.gadgetsnow.com/gd/images/products/additional/large/G221395_View_1/computer-laptop/laptops/lenovo-ideapad-slim-3i-81wq003lin-intel-celeron-n4020-integrated-4gb-256gb-ssd-windows-10-home-basic.jpg" height={300} width={300}></img>
      <h5 className="card-title">LENOVO LAPTOP</h5>
    <p className="card-text">Display Size -15.6 Inches,
Processor- Intel</p>
    <p>price:62300/-</p>
    
    </div>
<div class="column3">
    <img src="https://cdn.shopify.com/s/files/1/0137/0292/2286/products/ninja-fit-beige_1_1800x1800.png?v=1683185247" height={300} width={300}></img>
      <h5 className="card-title">WATCHES</h5>
    <p className="car<d-text">Ninja Fit</p>
    <p>price:1070/-</p>
  
    </div>
    <div class="column4">
    <img src="https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1" height={300} width={300}></img>
      <h5 className="card-title">MOBLIE PHONE</h5>
    <p className="car<d-text">README NOTE 12pro</p>
    <p>price:25000/-</p>
    
    </div>
    <div class="column5">
    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-sCWWlo99JDBob5KeAQsaRNUOTx-xMh5MN_2HKNbnlOOm5pv1fXxkc_CfUXC16wGkWD6ZHbBlqQK1rjCBcGxelgAt07jJamU3MCntDSI&usqp=CAE" height={300} width={300}></img>
      <h5 className="card-title">MENS WEAR</h5>
    <p className="car<d-text"> </p>
    <p>price:499/-</p>
    
    </div>
    <div class="column6">
    <img src="https://img1.exportersindia.com/product_images/bc-full/2020/1/6738321/girls-frock-1578636360-5247519.jpeg" height={300} width={300}></img>
      <h5 className="card-title">Kid's wear</h5>
    <p className="car<d-text"> </p>
    <p>price:799/-</p>
    
    </div>
    <div class="column7">
    <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLWROJFAahOW0W46Z5q5GEzg56Ekb3BG119E84kWQBQMOfXFEVYnJ3JK_apLYIQju_u14Euh5FRJImtKTc10hI2oSXOLhIJANyHf4wcPve&usqp=CAE" height={300} width={300}></img>
      <h5 className="card-title">Foot Wear</h5>
    <p className="car<d-text"> </p>
    <p>price:399/-</p>
    
    </div>
    <div class="column8">
    <img src="https://rukminim1.flixcart.com/image/450/500/xif0q/sari/c/k/l/free-gp-flowervelly-red-lichi-soft-silk-jacquard-woven-saree-original-imagh3rwye32gzqd.jpeg?q=90&crop=false" height={300} width={300}></img>
      <h5 className="card-title">wedding saree</h5>
    <p className="car<d-text"> </p>
    <p>price:8000/-</p>
    </div>
    <div class="column8">
    <img src="https://www.tapathi.com/pub/media/catalog/product/cache/e5c5a84ca7200b1fdddd537435eb2f91/t/a/tap-g-long-frock-for-kids-and-girls_5.jpg" height={300} width={300}></img>
      <h5 className="card-title">baby dress</h5>
    <p className="car<d-text"> </p>
    <p>price:699/-</p>
    </div>
  
  
    </div>
    </Box>
  );
}