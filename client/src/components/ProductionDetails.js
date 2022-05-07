import React, { Component } from 'react'
import axios from 'axios';

export default class ProductionDetails extends Component {

   //Binding event handler method
   constructor(props){
    super(props);

    this.state={
      production:{}
    };
}
//load data from a remote endpoint
componentDidMount(){

    const id =this.props.match.params.id;
    //get server side http module to get data to client side Http request
    axios.get(`http://localhost:8000/production/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
                production:res.data.production
            });

            console.log(this.state.production);
        }
    });
}
  render() {

    const id =this.props.match.params.id;

    const{slotName,slotLocation,slotManager,capacity,category,description} = this.state.production;
    return (
       //component organizer
       <div  style={{ backgroundColor: "#e3dac9" }} id="wrapper" className="toggled">
       <div  id="page-content-wrapper">
       <div className="container-fluid">

       <nav class="navbar navbar-expand-lg   rounded-3"  style={{ backgroundColor: "#006a4e" }}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/">Dashboard </a>
      </li>
      <li class="nav-item">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/prodash"> &#62;Slot Cards</a>
      </li>
      <li class="nav-item">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href=""> &#62;Slot Card Details <span class="sr-only">(current)</span> </a>
      </li>
    </ul>
  </div>
</nav> 
<hr/> 

<div style={{ backgroundColor: "#faf0e6" }}>
    
      <div class="card-body">
      
      <h5 class="card-title"></h5>

    
            <div style={{marginTop:'20px'}}>
            
            <h4>  <i class="fas fa-angle-double-up"></i> &nbsp; {`PRO${id.substr(0,5)}`}</h4>
            <hr/>
            
            <dl className="row ">
                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Slot Name</b></dt>
                <dd className="col-sm-9">{slotName}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Slot Location</b></dt>
                <dd className="col-sm-9">{slotLocation}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Slot Manager</b></dt>
                <dd className="col-sm-9">{slotManager}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Capacity</b></dt>
                <dd className="col-sm-9">{capacity}</dd>

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Category</b></dt>
                <dd className="col-sm-9">{category}</dd>

             

                <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Description</b></dt>
                <dd className="col-sm-9">{description}</dd>

                

                

            </dl>
            
        </div>
        </div>
        </div>
        {/* Instruction section */}
<div class="card">
<div class="card-body">
<h5 class="card-title">INSTRUCTIONS</h5>

<div class="spinner-grow text-info" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<p class="card-text">Imagine having just the right number of products for a certain SKU, given demand -- but your team is working with old data and, based on that data, projects that your inventory will fall short of demand in a month. It is obvious what your team would do: begin the process of acquiring more inventory to make up the difference. Now there will be excess inventory, and you will be in an Overstock situation.</p>
<p class="card-text"><small class="text-muted">Latest Regulations</small></p>
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

<img src="%PUBLIC_URL%../../white.png" class="rounded-circle" width="40" height="40"  alt=""/>
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
