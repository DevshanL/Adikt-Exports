import React, {Component} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import moment from 'moment';

export default class CreatePostQC extends Component {
  //Binding event handler method
  constructor(props){
    super(props);
    this.state={
      ProductID:"",
      BuyerID:"",
      ProductType:"",
      QTY:"",
      CheckedDate:"",
      RequirementSatisfication:"",
      QualityRate:"",
      Description:""
    }
  }

  handleInputChange= (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }
  

  //validation
  validate= ()=>{
      
    let ProductIDError="";
    let BuyerIDError="";
    let ProductTypeError="";
    let QTYError="";
    let CheckedDateError="";
    let RequirementSatisficationError="";
    let QualityRateError="";
  
    if(!this.state.ProductID){
      ProductIDError="*Product ID is Required!"
   }
  
   if(!this.state.BuyerID){
     BuyerIDError="*Buyer ID is Required!"
   }
   if(!this.state.ProductType){
     ProductTypeError="*Product Type is Required!"
   }

    
   if(!this.state.QTY){
     QTYError="*Qty is Required!"
   }
   if(!this.state.CheckedDate){
     CheckedDateError="*Checked Date is Required!"
   }
   if(!this.state.RequirementSatisfication){
     RequirementSatisficationError="*Requirement Satisfication Rate is Required!"
   }
   if(!this.state.QualityRate){
     QualityRateError="*Quality Rate is Required!"
   }



   if(ProductIDError||BuyerIDError||ProductTypeError||QTYError||CheckedDateError||RequirementSatisficationError||QualityRateError){
    this.setState({ProductIDError,BuyerIDError,ProductTypeError,QTYError,CheckedDateError,RequirementSatisficationError,QualityRateError});
    return false;

}

return true;

}

  //on submit method
  onSubmit = (e) =>{
    e.preventDefault();
    const isValid= this.validate();
    const {ProductID,BuyerID,ProductType,QTY,CheckedDate,RequirementSatisfication,QualityRate,Description} = this.state;
   
   
    const data ={
      ProductID:ProductID,
      BuyerID:BuyerID,
      ProductType:ProductType,
      QTY:QTY,
      CheckedDate:CheckedDate,
      RequirementSatisfication:RequirementSatisfication,
      QualityRate:QualityRate,
      Description:Description
    }
  
     

  //if validation succussesfully pass
  if(isValid){
  console.log(data);

  axios.post("/post/save",data).then((res)=>{
    if(res.data.success){
      Swal.fire('Added','Added Successfully','success')
      this.setState(
        {
          ProductID:"",
          BuyerID:"",
          ProductType:"",
          QTY:"",
          CheckedDate:"",
          RequirementSatisfication:"",
          QualityRate:"",
          Description:""
        }
      )
    }
  })

  }

  }


   //Demo button
   btnDemo = (e) => {
    e.preventDefault();
  
    const {ProductID,BuyerID,ProductType,QTY,CheckedDate,RequirementSatisfication,QualityRate,Description} = this.state;
  
    const data = {
      
      ProductID: ProductID,
      BuyerID: BuyerID,
      ProductType: ProductType,
      QTY: QTY,
      CheckedDate: CheckedDate,
      RequirementSatisfication: RequirementSatisfication,
      QualityRate: QualityRate,
      Description: Description,
    }
  
    console.log(data)
  
    this.setState(
        {
          
          ProductID: "CN078",
          BuyerID: "LH78",
          ProductType: "Cinnamon",
          QTY: "120KG",
          CheckedDate: "06.03.2022",
          RequirementSatisfication: "High",
          QualityRate: "95",
          Description: "very good product",
          
        }
    )
  }

  btnClear = (e) => {
    e.preventDefault();
  
    const {ProductID,BuyerID,ProductType,QTY,CheckedDate,RequirementSatisfication,QualityRate,Description} = this.state;
  
    const data = {
      
      ProductID: ProductID,
      BuyerID: BuyerID,
      ProductType: ProductType,
      QTY: QTY,
      CheckedDate: CheckedDate,
      RequirementSatisfication: RequirementSatisfication,
      QualityRate: QualityRate,
      Description: Description,
    }
  
    console.log(data)
  
    this.setState(
        {
          
          ProductID: "",
          BuyerID: "",
          ProductType: "",
          QTY: "",
          CheckedDate: "",
          RequirementSatisfication: "",
          QualityRate: "",
          Description: "",
          
        }
    )
  }


  //gather outputs
  render() {
    return (
      //component organizer
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-nomal">Add new Check Card</h1>
      <form className="needs-validation" noValidate>

        {/* custom navigation        */}
    <nav class="navbar navbar-expand-lg rounded-3"style={{ backgroundColor: "#006a4e" }}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/dash">QC Dashboard</a>
      </li>
      <li class="nav-item">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/add"> &#62; Add QC Details  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
<hr/>


        
<div class="row">
        <div class="col">
        <lable style={{marginBottom:'5px'}}>Product ID</lable>
        <input type="text" class="form-control" maxlength="6" name="ProductID" placeholder="Enter Product ID"
        value={this.state.ProductID}
        onChange={this.handleInputChange}
        required
        />
        <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.ProductIDError}
                   </div>
        
        </div>

          <div class="col">
          <lable style={{marginBottom:'5px'}}>Buyer ID</lable>
          <input type="text" class="form-control" maxlength="6" name="BuyerID"  placeholder="Enter Buyer ID"
          value={this.state.BuyerID}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.BuyerIDError}
                   </div>
          </div>
          </div>


          <div class="row">
          <div class="col">
          <lable style={{marginBottom:'5px'}}>Product Type</lable>
          <input type="text" class="form-control" name="ProductType" placeholder="Enter Product Type"
          value={this.state.ProductType}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.ProductTypeError}
                     
               </div>
            </div>

          <div class="col">
          <lable style={{marginBottom:'5px'}}>QTY</lable>
          <input type="text" class="form-control" name="QTY" placeholder="Enter Qantity of the Product"
          value={this.state.QTY}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.QTYError}
                   
              </div>
            </div>
          </div>


          <div class="row">
          <div class="col">
          <lable style={{marginBottom:'5px'}}>Checked Date</lable>
          <input type="date"
          className="form-control"
          name="CheckedDate"
          placeholder="Enter Checked Date"
          value={this.state.CheckedDate}
          onChange={this.handleInputChange}
          max={moment().format("YYYY-MM-DD")}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.CheckedDateError}
                   </div>
          </div>

          <div class="col">
          
          <lable style={{marginBottom:'5px'}}>Requirement Satisfication</lable>
          <input type="text"
          className="form-control"
          name="RequirementSatisfication"
          placeholder="Enter Requirement Satisfication"
          value={this.state.RequirementSatisfication}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.RequirementSatisficationError}
                   
              </div>
            </div>
          </div>


          <div class="row">
          <div class="col">
          <lable style={{marginBottom:'5px'}}>Quality Rate</lable>
          <input type="number"  min="0" max="100" step="1"
          className="form-control"
          name="QualityRate"
          placeholder="Enter Quality"
          value={this.state.QualityRate}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.QualityRateError}
                   </div>
                 
          </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Description</lable>
          <input type="text"
          className="form-control"
          name="Description"
          placeholder="Enter Description"
          value={this.state.Description}
          onChange={this.handleInputChange}/>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Save
          </button>
        </form>
        
                 <br/>

        <button type="submit" className="btn btn-dark"  style={{ backgroundColor: "#2D5F97"}}  onClick={this.btnDemo}>Demo</button>
        &nbsp;
                
                 <button type="submit" className="btn btn-dark"  style={{ backgroundColor: "#2D5F97"}}  onClick={this.btnClear}>Clear</button>
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
  <h1>AdIKT EXPORTS</h1>
  
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
   
  
   
    