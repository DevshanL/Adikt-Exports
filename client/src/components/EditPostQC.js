import React, {Component} from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export default class EditPostQC extends Component {
  
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
    const id = this.props.match.params.id;

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

  //Put data to back end using the Http link
  axios.put(`/post/update/${id}`,data).then((res)=>{
    if(res.data.success){
      Swal.fire('Updated','Updated Successfully','success')
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

  //load data from a remote endpoint
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          ProductID:res.data.post.ProductID,
          BuyerID:res.data.post.BuyerID,
          ProductType:res.data.post. ProductType,
          QTY:res.data.post.QTY,
          CheckedDate:res.data.post.CheckedDate,
          RequirementSatisfication:res.data.post.RequirementSatisfication,
          QualityRate:res.data.post.QualityRate,
          Description:res.data.post.Description,
        });

        console.log(this.state.post);
      }

    });


  }
  
   //gather outputs
  render() {
    const id =this.props.match.params.id;
    return (
      //component organizer
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-nomal">Update QC details</h1>

      {/* custom navigation        */}
    <nav class="navbar navbar-expand-lg rounded-3"style={{ backgroundColor: "#006a4e" }}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/">QC Details</a>
      </li>
      <li class="nav-item">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href=""> &#62; Update/Edit Details  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
<hr/>
      
      {/* Edit form */}
      <form className="needs-validation" noValidate>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <lable style={{marginBottom:'5px'}}> Product ID</lable>
        <input type="text"
        className="form-control"
        name=" ProductID"
        placeholder="Enter  Product ID"
        value={this.state. ProductID}
        onChange={this.handleInputChange}
        required
        readOnly
        />
         <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.ProductIDError}
                   </div>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Buyer ID</lable>
          <input type="text"
          className="form-control"
          name="BuyerID"
          placeholder="Enter BuyerID"
          value={this.state.BuyerID}
          onChange={this.handleInputChange}
          required
          readOnly
          />
           <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.BuyerIDError}
                   </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Product Type</lable>
          <input type="text"
          className="form-control"
          name="ProductType"
          placeholder="Enter Product Type"
          value={this.state.ProductType}
          onChange={this.handleInputChange}
          required
          />
            <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.ProductTypeError}
                   </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>QTY</lable>
          <input type="text"
          className="form-control"
          name="QTY"
          placeholder="Enter QTY"
          value={this.state.QTY}
          onChange={this.handleInputChange}
          required
          />
           <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.QTYError}
                   </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Checked Date</lable>
          <input type="date"
          className="form-control"
          name="CheckedDate"
          placeholder="Enter Checked Date"
          value={this.state.CheckedDate}
          onChange={this.handleInputChange}
          required
          />
           <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.CheckedDateError}
                   </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
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

          <div className="form-group" style={{marginBottom:'15px'}}>
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
            &nbsp; Update
          </button>
        </form>
        </div>
     
     
    )
  }
}


