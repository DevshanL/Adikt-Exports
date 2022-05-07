import React, { Component } from 'react'
import axios from 'axios'
import './styleSideNav.css';
import Swal from 'sweetalert2';
import moment from 'moment';

export default class ProductionEdit extends Component {

    //Binding event handler method
    constructor(props){
      super(props);
      this.state={
        slotID:"",
        slotName:"",
        slotLocation:"",
        slotManager:"",
        capacity:"",
        category:"",
        description:"",
        slotIDError:"",
        slotNameError:"",
        slotLocationError:"",
        slotManagerError:"",
        capacityError:"",
        categoryError:"",
        descriptionError:""

     }
  } 

  handleInputChange = (e) =>{
      const{name,value} = e.target;

      this.setState({
          ...this.state,
          [name]:value
      })

  } 

  //validation
  validate= ()=>{
    let slotIDError="";
   
    let slotNameError="";
    let slotLocationError="";
    let slotManagerError="";
    let capacityError="";
    let categoryError="";
    let descriptionError="";

   
   
    if(!this.state.slotName){
        slotNameError="*Slot Name is Required!"
    }
    if(!this.state.slotLocation){
        slotLocationError="*Slot Location is Required"
    }
   
    if(!this.state.slotManager){
        slotManagerError="*Slot Manager is Required"
    }
   if(!this.state.capacity){
    capacityError="*Capacity is Required"
    }
   
    if(!this.state.category){
     categoryError="*Category is Required"
   }
   
  
   
   if(!this.state.description){
      descriptionError="Description is Required"
    }
   
    if(slotIDError||slotNameError||slotLocationError||slotManagerError||capacityError||categoryError||descriptionError){
     this.setState({slotIDError,slotNameError,slotLocationError,slotManagerError,capacityError,categoryError,descriptionError});
     return false;
   
    }  

 return true;

}
  //onsubmit method
  onSubmit =(e) =>{
      e.preventDefault();
      const isValid= this.validate();
      const id =this.props.match.params.id;

      const {slotID,slotName,slotLocation,slotManager,capacity,category,description} = this.state;

      const data = {
        slotID:slotID,
        slotName:slotName,
        slotLocation:slotLocation,
        slotManager:slotManager,
        capacity:capacity,
        category:category,
        description:description

      }
      //if validation succussesfully pass
      if(isValid){
      console.log(data)
     //Put data to back end using the Http link
      axios.put(`http://localhost:8000/production/updateproduction/${id}`, data).then((res) =>{
          if(res.data.success){
            Swal.fire('Updated','Slot Card Updated Successfilly','success')
              this.setState(
                  {
                    slotID:"",
                    slotName:"",
                    slotLocation:"",
                    slotManager:"",
                    capacity:"",
                    category:"",
                    description:""
                  }
              )
          }
      })
    }

  }
  //load data from a remote endpoint
  componentDidMount(){

      const id =this.props.match.params.id;

      axios.get(`http://localhost:8000/production/${id}`).then((res) =>{
          if(res.data.success){
              this.setState({
                 slotID:res.data.production.slotID,
                 
                 slotName:res.data.production.slotName,
                 slotLocation:res.data.production.slotLocation,
                 slotManager:res.data.production.slotManager,
                 capacity:res.data.production.capacity,
                 category:res.data.production.category,
                 description:res.data.production.description
              });

              console.log(this.state.production);
          }
      });
  }
  render() {
    const id =this.props.match.params.id;
    return (
      //component organizer
      <div id="wrapper" className="toggled">
      <div  style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
      <div className="container-fluid">

       
    
          {/* custom navigation        */}
          <nav class="navbar navbar-expand-lg rounded-3" style={{ backgroundColor: "#006a4e" }}>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
  <li class="nav-item active">
    <a style={{textDecoration:'none',color:'white'}} class="nav-link" href="">Dashboard </a>
  </li>
  <li class="nav-item">
    <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/"> &#62;Slot Cards</a>
  </li>
  <li class="nav-item">
    <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href=""> &#62; Update Slot Card <span class="sr-only">(current)</span> </a>
  </li>
</ul>
</div>
</nav> 

<hr/>

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

{/* Title        */}
<div class="p-3 mb-2  text-dark rounded-3" style={{ backgroundColor: "#faf0e6" }}>
        <div className="col-md-8 mt-4 mx-auto">
          <center>
        <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>EDIT SLOT CARD</b></h1>
           </center>
        <hr/>


            {/* Edit form */}
            <form className="needs-validation" noValidate>

<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Slot ID</label>
<input type="text" class="form-control" name="slotID" placeholder="Enter Slot ID"
value={`PRO${id.substr(0,7)}`}
readOnly
onChange={this.handleInputChange}
/>
<div style={{fontSize:15 ,color:"red"}}>
                       {this.state.slotIDError}
               </div>
</div>


</div>


<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Slot Name</label>
<input type="text" class="form-control" name="slotName" placeholder="Enter Slot Name"
value={this.state.slotName}
readOnly
onChange={this.handleInputChange}
required
/>
<div style={{fontSize:15 ,color:"red"}}>
                       {this.state.slotNameError}
               </div>
</div>

<div class="col">
<label style={{marginBottom:'5px'}} >Slot Location</label>
<input type="text" class="form-control" name="slotLocation"  placeholder="Enter Slot Location"
 value={this.state.slotLocation}
 readOnly
 onChange={this.handleInputChange}
 required
 />
 <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.slotLocationError}
               </div>
</div>
</div>




<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Slot Manager</label>
<input type="text" class="form-control" name="slotManager" placeholder="Enter Slot Manager"
value={this.state.slotManager}
readOnly
onChange={this.handleInputChange}
required
/>
<div style={{fontSize:15 ,color:"red"}}>
                       {this.state.slotManagerError}
               </div>
</div>

<div class="col">
<label style={{marginBottom:'5px'}} >Capacity</label>
<input type="number" class="form-control" name="capacity" placeholder="Enter Capacity"
 value={this.state.capacity}
 onChange={this.handleInputChange}
 required
 />
 <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.capacityError}
               </div>
</div>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Category</label>
                    <input type="text"
                    className="form-control"
                    name="category"
                    placeholder="Enter Category"
                    value={this.state.category}
                    
                    onChange={this.handleInputChange}
                    required/>
                    <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.categoryError}
               </div>
                    </div>






                    
                    

                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Description</label>
                    <textarea 
                    className="form-control"
                    name="description"
                    placeholder="Enter Description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    required/>
                    <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.descriptionError}
               </div>
                    </div>
                     
                     <hr/>
                    <button className="btn btn-success" type="submit"  style={{backgroundColor: "#0E3662"}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update Slot Card
                    </button>

                </form>    
        </div>
        </div>
        </div>
        </div>
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
