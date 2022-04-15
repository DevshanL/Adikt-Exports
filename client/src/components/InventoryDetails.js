import React, { Component } from 'react'
import axios from 'axios';

export default class InventoryDetails extends Component {

   //Binding event handler method
   constructor(props){
    super(props);

    this.state={
      inventory:{}
    };
}
//load data from a remote endpoint
componentDidMount(){

    const id =this.props.match.params.id;
    //get server side http module to get data to client side Http request
    axios.get(`http://localhost:8000/inventory/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
              inventory:res.data.inventory
            });

            console.log(this.state.inventory);
        }
    });
}
  render() {

    const id =this.props.match.params.id;

    const{matName,cusID,proName,stockedDate,category,qty,price,description} = this.state.inventory;
    return (
       //component organizer
       <div id="wrapper" className="toggled">
       <div id="page-content-wrapper">
       <div className="container-fluid">

       <nav class="navbar navbar-expand-lg   rounded-3"  style={{ backgroundColor: "#006a4e" }}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/matDash">Dashboard </a>
      </li>
      <li class="nav-item">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/matRet"> &#62;Material Card</a>
      </li>
      <li class="nav-item">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href=""> &#62; Material MaterialDetails <span class="sr-only">(current)</span> </a>
      </li>
    </ul>
  </div>
</nav> 
    
      <div class="card-body">
      
      <h5 class="card-title"></h5>

    
            <div style={{marginTop:'20px'}}>
            
            <h4>  <i class="fas fa-angle-double-up"></i> &nbsp; {`MAT${id.substr(0,5)}`}</h4>
            <hr/>
            
            <dl className="row ">
                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Material Name</b></dt>
                <dd className="col-sm-9">{matName}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Suplier ID</b></dt>
                <dd className="col-sm-9">{cusID}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Supplier Name</b></dt>
                <dd className="col-sm-9">{proName}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Arrival Date</b></dt>
                <dd className="col-sm-9">{stockedDate}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Shipment ID</b></dt>
                <dd className="col-sm-9">{category}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Price</b></dt>
                <dd className="col-sm-9">{qty}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Qty</b></dt>
                <dd className="col-sm-9">{price}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Category</b></dt>
                <dd className="col-sm-9">{description}</dd>

                

            </dl>
            
        </div>
        </div>
        
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
       


                 {/* Footer Section */}
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
  <h1>CASANOVA</h1>
  
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
