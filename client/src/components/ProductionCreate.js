import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import './styleSideNav.css';


export default class ProductionCreate extends Component {

  constructor(props){
    super(props);
    this.state={
     
       
        slotName:"",
        slotLocation:"",
        slotManager:"",
        capacity:"",
        category:"",
        description:"",
       
        slotNameeError:"",
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

 
 let slotNameeError="";
 let slotLocationError="";
 let slotManagerError="";
 let capacityError="";
 let categoryError="";
 let descriptionError="";



 if(!this.state.slotName){
    slotNameeError="*Slot Name is Required!"
 }
 if(!this.state.slotLocation){
    slotLocationError="*Slot Location is Required"
 }

 if(!this.state.slotManager){
    slotManagerError="*Slot Manager  is Required"
 }
if(!this.state.capacity){
    capacityError="*Scheduled date is Required"
 }

 if(!this.state.category){
  categoryError="*Category is Required"
}


 
if(!this.state.description){
   descriptionError="Description is Required"
 }

 if(slotNameeError||slotLocationError||slotManagerError||capacityError||categoryError||descriptionError){
  this.setState({slotNameeError,slotLocationError,slotManagerError,capacityError,categoryError,descriptionError});
  return false;

 }  

return true;

}

//onsubmit method
onSubmit =(e) =>{
    e.preventDefault();
    const isValid= this.validate();
    const {slotName,slotLocation,slotManager,capacity,category,description} = this.state;

    const data = {
       
    
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
    //Post data to back end using the Http link
    axios.post("http://localhost:8000/production/save", data).then((res) =>{
        if(res.data.success){
       Swal.fire('Added','Production Slot Added Successfilly','success')
            this.setState(
                {
                 
                
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

//Demo button
btnDemo = (e) => {
e.preventDefault();

const { slotName,slotLocation,slotManager,capacity,category,description} = this.state;

const data = {


    slotName: slotName,
    slotLocation: slotLocation,
    slotManager: slotManager,
    capacity: capacity,
    category: category,
    description: description,
}

console.log(data)

this.setState(
{


 slotName: "SN001",
 slotLocation: "E1",
 slotManager: "Sithira Ranasinghe",
 capacity: "1000",
 category: "TEA",
 description: "Coriander seeds come from the small fruits that appear after the cilantro herb flowers. They can be harvested when green, or they can be left to brown and dry out on the plant. Pounded fresh green coriander has a bright flavor that’s ideal for dressing a salad. The dried, tan pods most often found in spice cabinets have a citrusy, floral taste that is often paired with cumin in Indian cuisine, Moroccan tagines, homemade burgers, or poaching liquor for fish.",
}
)
}
//Clear button
btnClear = (e) => {
  e.preventDefault();
  
  const {slotName,slotLocation,slotManager,capacity,category,description} = this.state;
  
  const data = {
  
  
    slotName: slotName,
    slotLocation: slotLocation,
    slotManager: slotManager,
    capacity: capacity,
    category: category,
    description: description,
  }
  
  console.log(data)
  
  this.setState(
  {
   
  
                    slotName:"",
                    slotLocation:"",
                    slotManager:"",
                    capacity:"",
                    category:"",
                    description:""
  }
  )
  }
  render() {
    return (
     //component organizer
     <div id="wrapper" className="toggled">
     <div   style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
     <div className="container-fluid">


       {/* custom navigation        */}
       <nav class="navbar navbar-expand-lg  rounded-3"  style={{ backgroundColor: "#006a4e" }}>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
<li class="nav-item active">
 <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/">Dashboard </a>
</li>
<li class="nav-item">
 <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/prodash"> &#62;Production Slots Cards</a>
</li>
<li class="nav-item">
 <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/procreate"> &#62; Add a Production Slot Card <span class="sr-only">(current)</span> </a>
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
<div class="p-3 mb-2 text-dark  rounded-3"  style={{ backgroundColor: "#faf0e6" }}>
     <div className="col-md-8 mt-4 mx-auto">
       <center>
     <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>ADD NEW PRODUCTION SLOT CARD</b></h1>
      </center>

      <hr/>

       

        {/* Material add form */}
         <form className="needs-validation" noValidate>
             

         
             


<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Slot Name</label>
<input type="text" class="form-control" name="slotName" placeholder="Enter Slot Name"
value={this.state.slotName}
onChange={this.handleInputChange}
required
/>
<div style={{fontSize:15 ,color:"red"}}>
                    {this.state.slotNameeError}
            </div>
</div>



<div class="col">
<label style={{marginBottom:'5px'}} > Slot Location</label>
<input type="text" class="form-control" name="slotLocation"  placeholder="Enter Slot Location"
value={this.state.slotLocation}
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
<input type="text" class="form-control" name="slotManager" placeholder="Enter Slot Manager Name"
value={this.state.slotManager}
onChange={this.handleInputChange}

required
/>
<div style={{fontSize:15 ,color:"red"}}>
                    {this.state.slotManagerError}
            </div>
</div>



</div>







<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Capacity</label>
<input type="number"  min="0" class="form-control" name="capacity" placeholder="Enter Capacity"
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
                 required
                 />

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
                 required
                 />
                  <div style={{fontSize:15 ,color:"red"}}>
                    {this.state.descriptionError}
            </div>
                 </div>

                

                 <hr/>
             <div>
                 <button className="btn btn-success" type="submit" style={{ backgroundColor: "#0E3662" }} onClick={this.onSubmit}>
                     <i className="far fa-check-square"></i>
                     &nbsp; Add Slot Card
                 </button>
                 <br/>
                 <br/>
                 <button type="submit" className="btn btn-dark"  style={{ backgroundColor: "#2D5F97"}}  onClick={this.btnDemo}>Demo</button>
                 &nbsp;
                 &nbsp;
                 <button type="submit" className="btn btn-dark"  style={{ backgroundColor: "#2D5F97"}}  onClick={this.btnClear}>Clear</button>
                 </div>
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
