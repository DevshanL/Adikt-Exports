import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import './styleSideNav.css';
import moment from 'moment';

export default class CreateInventory extends Component {

  constructor(props){
    super(props);
    this.state={
     
       
        cusID:"",
        proName:"",
        stockedDate:"",
        scheduledDate:"",
        category:"",
        qty:"",
        price:"",
        description:"",
        matNameError:"",
        cusIDError:"",
        proNameError:"",
        stockedDateError:"",
        scheduledDateError:"",
        categoryError:"",
        qtyError:"",
        priceError:"",
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

 
 let cusIDError="";
 let proNameError="";
 let stockedDateError="";
 let scheduledDateError="";
 let categoryError="";
 let qtyError="";
 let priceError="";
 let descriptionError="";



 if(!this.state.cusID){
  cusIDError="*Customer ID is Required!"
 }
 if(!this.state.proName){
    proNameError="*Product name is Required"
 }

 if(!this.state.stockedDate){
  stockedDateError="*Stocked date is Required"
 }
if(!this.state.scheduledDate){
  scheduledDateError="*Scheduled date is Required"
 }

 if(!this.state.category){
  categoryError="*Category is Required"
}

if(!this.state.qty){
  qtyError="*QTY is Required"
}

   else if (!this.state.qty.match('^[1-9]+[0-9]*$')){
    qtyError= '*Please Enter a Valid QTY Range '
} 
 if(!this.state.price){
   priceError="*Price is Required"
 }

   else if (!this.state.price.match('^[1-9]+[0-9]*$')){
     priceError= '*Please Enter a Valid Price Range '
   } 

if(!this.state.description){
   descriptionError="Description is Required"
 }

 if(cusIDError||proNameError||stockedDateError||scheduledDateError||categoryError||qtyError||priceError||descriptionError){
  this.setState({cusIDError,proNameError,stockedDateError,scheduledDateError,categoryError,qtyError,priceError,descriptionError});
  return false;

 }  

return true;

}

//onsubmit method
onSubmit =(e) =>{
    e.preventDefault();
    const isValid= this.validate();
    const {cusID,proName,stockedDate,scheduledDate,category,qty,price,description} = this.state;

    const data = {
       
    
        cusID:cusID,
        proName:proName,
        stockedDate:stockedDate,
        scheduledDate:scheduledDate,
        category:category,
        qty:qty,
        price:price,
        description:description

    }


   //if validation succussesfully pass
   if(isValid){
    console.log(data)
    //Post data to back end using the Http link
    axios.post("http://localhost:8000/inventory/save", data).then((res) =>{
        if(res.data.success){
       Swal.fire('Added','Inventory Card Added Successfilly','success')
            this.setState(
                {
                 
                
                 cusID:"",
                 proName:"",
                 stockedDate:"",
                 scheduledDate:"",
                 category:"",
                 qty:"",
                 price:"",
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

const { cusID, proName, stockedDate, scheduledDate, category, qty, price, description} = this.state;

const data = {


cusID: cusID,
proName: proName,
stockedDate: stockedDate,
scheduledDate: scheduledDate,
category: category,
qty: qty,
price: price,
description: description,
}

console.log(data)

this.setState(
{
 // matID: "MAT003",

 cusID: "SUP002",
 proName: "Xiong",
 stockedDate: "11/10/2021",
 scheduledDate: "11/10/2021",
 category: "int",
 qty: "10000",
 price: "1000",
 description: "Wool lustrous",
}
)
}
//Demo button
btnClear = (e) => {
  e.preventDefault();
  
  const { cusID, proName, stockedDate, scheduledDate, category, qty, price, description} = this.state;
  
  const data = {
  
  
  cusID: cusID,
  proName: proName,
  stockedDate: stockedDate,
  scheduledDate: scheduledDate,
  category: category,
  qty: qty,
  price: price,
  description: description,
  }
  
  console.log(data)
  
  this.setState(
  {
   // matID: "MAT003",
  
   cusID: "",
   proName: "",
   stockedDate: "",
   scheduledDate: "",
   category: "",
   qty: "",
   price: "",
   description: "",
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
 <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="">Dashboard </a>
</li>
<li class="nav-item">
 <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/"> &#62;Inventory Cards</a>
</li>
<li class="nav-item">
 <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/intadd"> &#62; Add a Inventory Card <span class="sr-only">(current)</span> </a>
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
<img src="%PUBLIC_URL%../../lmo1.png" class="card-img-bottom" alt="..."/>
</div>




{/* Title        */}
<div class="p-3 mb-2 text-dark  rounded-3"  style={{ backgroundColor: "#faf0e6" }}>
     <div className="col-md-8 mt-4 mx-auto">
       <center>
     <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>ADD NEW INVENTORY CARD</b></h1>
      </center>

      <hr/>

       

        {/* Material add form */}
         <form className="needs-validation" noValidate>
             

         
             


<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Customer ID</label>
<input type="text" class="form-control" maxlength="6" name="cusID" placeholder="Enter Customer ID"
value={this.state.cusID}
onChange={this.handleInputChange}
required
/>
<div style={{fontSize:15 ,color:"red"}}>
                    {this.state.cusIDError}
            </div>
</div>



<div class="col">
<label style={{marginBottom:'5px'}} >Product Name</label>
<input type="text" class="form-control" name="proName"  placeholder="Enter Product Name"
value={this.state.proName}
onChange={this.handleInputChange}
required
/>
<div style={{fontSize:15 ,color:"red"}}>
                    {this.state.proNameError}
            </div>
</div>



</div>

<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Stocked Date</label>
<input type="date" class="form-control" name="stockedDate" placeholder="Enter Stocked Date"
value={this.state.stockedDate}
onChange={this.handleInputChange}
max={moment().format("YYYY-MM-DD")}
required
/>
<div style={{fontSize:15 ,color:"red"}}>
                    {this.state.stockedDateError}
            </div>
</div>



</div>







<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Scheduled Date</label>
<input type="date" class="form-control" name="scheduledDate" placeholder="Enter Scheduled Date"
value={this.state.scheduledDate}
onChange={this.handleInputChange}
min={moment().format("YYYY-MM-DD")}
required
/>
<div style={{fontSize:15 ,color:"red"}}>
                    {this.state.scheduledDateError}
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

                 <div class="col">
<label style={{marginBottom:'5px'}} >Qty</label>
<input type="number" min="0" class="form-control" name="qty" placeholder="Enter Qty"
value={this.state.qty}
onChange={this.handleInputChange}
required
/>
<div style={{fontSize:15 ,color:"red"}}>
                    {this.state.qtyError}
            </div>
</div>




<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Price (Rs.)</label>
<input   type="number" min="0.00" max="1000000.00" step="0.01"   class="form-control" name="price" placeholder="Enter Price"
value={this.state.price}
onChange={this.handleInputChange}
required
/>
<div style={{fontSize:15 ,color:"red"}}>
                    {this.state.priceError}
            </div>
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
                     &nbsp; Add Inventory Card
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
