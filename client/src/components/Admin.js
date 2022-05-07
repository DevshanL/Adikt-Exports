import React, { Component } from 'react'
import axios from 'axios'


export default class Admin extends Component {
    render() {
        return (

          
      


            
      <div id="wrapper" className="toggled">
      <div  style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
          <div className="container-fluid"></div>


        
               {/* custom navigation        */}
    <nav class="navbar navbar-expand-lg  rounded-3" style={{ backgroundColor: "#006a4e" }}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       <li class="nav-item active">
         <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/">Dashboard</a>
       </li>
      <li class="nav-item">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/admin"> &#62; Admin <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
    </nav>


<hr/>

<center>
     <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>ADMIN DASHBOARD</b></h1>
      </center>
      <hr/>
      <center></center>


<div  class="p-3 mb-2  text-dark rounded-3" style={{ backgroundColor: "#faf0e6" }}>
<div class="row">
  <div class="col-sm-6">
    <div class="card bg-light">
    
   
      <div class="card-body">
      <center>
        <h2 class="card-title">CUSTOMER MANAGEMNT REPORTS</h2>
        <p class="card-text"></p>
        <a href="/matRet" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
        </center>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-light">
      <div class="card-body">
      <center>
        <h2 class="card-title">INVENTORY REPORTS</h2>
        <p class="card-text"></p>
        <a href="/lmo" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
        </center>
      </div>
    </div>
    <br/>
  </div>
  
  

<div class="col-sm-6">
    <div class="card bg-light">
      <div class="card-body">
      <center>
        <h2 class="card-title">PRODUCTION REPORTS</h2>
        <p class="card-text"></p>
        <a href="/matreport" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
        </center>
      </div>
    </div>
    
  </div>

  <div class="col-sm-6">
    <div class="card bg-light">
      <div class="card-body">
      <center>
        <h2 class="card-title">EXPORT REPORTS</h2>
        <p class="card-text"></p>
        <a href="/matins" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
        </center>
      </div>
    </div>



    
    
  </div>

  

  
</div>
<br/>
<div class="row">
  <div class="col-sm-6">
    <div class="card bg-light">
    
   
      <div class="card-body">
      <center>
        <h2 class="card-title">QUALITY CHECK REPORTS</h2>
        <p class="card-text"></p>
        <a href="/matRet" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
        </center>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-light">
      <div class="card-body">
      <center>
        <h2 class="card-title">TRANSPORT MANAGEMNT REPORTS</h2>
        <p class="card-text"></p>
        <a href="/lmo" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
        </center>
      </div>
    </div>
    <br/>
  </div>

</div>
<br/>


</div>


<hr/>


                
            </div>

            <div class="footer">


<div class="contain">

  <br/>
<div class="col">
  <h1>ABOUT US</h1>

  
  <ul>
 
    <li><i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us</li>
    <li><i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion</li>
    
  </ul>
  
  
</div>
<div class="col">
  <h1></h1>
  <ul>
    <li></li>
  </ul>
</div>
<div class="col">
<div class="position-absolute top-50 start-50 translate-middle">
<br/>

<img src="%PUBLIC_URL%../../white.jpg" class="rounded-circle" width="40" height="40"  alt=""/>
<a href="/matDash" style={{textDecoration:'none'}}><h1>CASANOVA</h1></a>
  
  <ul>
    <li>@ Copyright reserved</li>
  </ul>
  </div>
</div>
<div class="col">
  <h1></h1>
  <ul>
  </ul>
  </div>

  <div class="position-absolute top-50 end-0 translate-middle-y">
<div class="col social">
  <h1>Help</h1>
  
  <ul>
  
    <li><i class="fas fa-envelope"></i>&nbsp; &nbsp; <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;<i class="fas fa-star"></i></li>
    
  </ul>
  
  </div>
</div>
<div class="clearfix">


</div>
</div>
</div>
            </div>
            

            

           
        )
    }
}
