import React, {Component} from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export default class CreateTransport extends Component {
  
    //Binding event handler method
  constructor(props){
    super(props);
    this.state={
      TransportID:"",
      VehicleID:"",
      VehicleType:"",
      Destination:"",
      TransportDate:"",
      ShipmentID:""
      
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
      
    let TransportIDError="";
    let VehicleIDError="";
    let VehicleTypeError="";
    let DestinationError="";
    let TransportDateError="";
    let ShipmentIDError="";
  
  
    if(!this.state.TransportID){
      TransportIDError="*Transport ID is Required!"
   }
  
   if(!this.state.VehicleID){
    VehicleIDError="*Vehicle ID is Required!"
   }

   if(!this.state.VehicleType){
    VehicleTypeError="*Vehicle Type is Required!"
   }

   if(!this.state.Destination){
    DestinationError="*Destination is Required!"
   }

   if(!this.state.TransportDate){
    TransportDateError="*Transport Date is Required!"
   }

   if(!this.state. ShipmentID){
    ShipmentIDError="*Shipment ID is Required!"
   }
   


   if(TransportIDError||VehicleIDError||VehicleTypeError||DestinationError||TransportDateError||ShipmentIDError){
    this.setState({TransportIDError,VehicleIDError,VehicleTypeError,DestinationError,TransportDateError,ShipmentIDError});
    return false;

}

return true;

}

  //on submit method
  onSubmit = (e) =>{
    e.preventDefault();
    const isValid= this.validate();
    const {TransportID,VehicleID,VehicleType,Destination,TransportDate,ShipmentID} = this.state;
   
   
    const data ={
      TransportID:TransportID,
      VehicleID:VehicleID,
      VehicleType:VehicleType,
      Destination:Destination,
      TransportDate:TransportDate,
      ShipmentID:ShipmentID
    }
  
     

  //if validation succussesfully pass
  if(isValid){
  console.log(data);

  axios.post("/transport/save",data).then((res)=>{
    if(res.data.success){
      Swal.fire('Added','Added Successfully','success')
      this.setState(
        {
          TransportID:"",
          VehicleID:"",
          VehicleType:"",
          Destination:"",
          TransportDate:"",
          ShipmentID:""
        }
      )
    }
  })

  }

  }


   //Demo button
   btnDemo = (e) => {
    e.preventDefault();
  
    const {TransportID,VehicleID,VehicleType,Destination,TransportDate,ShipmentID} = this.state;
  
    const data = {
      
      TransportID: TransportID,
      VehicleID: VehicleID,
      VehicleType: VehicleType,
      Destination: Destination,
      TransportDate: TransportDate,
      ShipmentID: ShipmentID,
    }
  
    console.log(data)
  
    this.setState(
        {
          
          TransportID: "TR001",
          VehicleID: "WP3627",
          VehicleType: "Van",
          Destination: "Colombo Harbour",
          TransportDate: "06.03.2022",
          ShipmentID: "SHI003",
          
        }
    )
  }

  btnClear = (e) => {
    e.preventDefault();
  
    const {TransportID,VehicleID,VehicleType,Destination,TransportDate,ShipmentID} = this.state;
  
    const data = {
      
      TransportID: TransportID,
      VehicleID: VehicleID,
      VehicleType: VehicleType,
      Destination: Destination,
      TransportDate: TransportDate,
      ShipmentID: ShipmentID
    }
  
    console.log(data)
  
    this.setState(
        {
          
          TransportID: "",
          VehicleID: "",
          VehicleType: "",
          Destination: "",
          TransportDate: "",
          ShipmentID: ""
          
        }
    )
  }


  //gather outputs
  render() {
    return (
      //component organizer
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-nomal">Add New Transport Card</h1>
      <form className="needs-validation" noValidate>

        {/* custom navigation        */}
    <nav class="navbar navbar-expand-lg rounded-3"style={{ backgroundColor: "#006a4e" }}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/dashtr">TR Dashboard</a>
      </li>
      <li class="nav-item">
        <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/addtr"> &#62; Add TR Details  <span class="sr-only">(current)</span> </a>
      </li>
      
   
    </ul>
  </div>
</nav> 
<hr/>


        <div className="form-group" style={{marginBottom:'15px'}}>
        <lable style={{marginBottom:'5px'}}>Transport ID</lable>
        <input type="text"
        className="form-control"
        name="TransportID"
        placeholder="Enter Transport ID"
        value={this.state.TransportID}
        onChange={this.handleInputChange}
        required
        />
        <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.TransportIDError}
                   </div>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Vehicle ID</lable>
          <input type="text"
          className="form-control"
          name="VehicleID"
          placeholder="Enter Vehicle ID"
          value={this.state.VehicleID}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.VehicleIDError}
                   </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Vehicle Type</lable>
          <input type="text"
          className="form-control"
          name="Vehicle Type"
          placeholder="Enter Vehicle Type"
          value={this.state.VehicleType}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.VehicleTypeError}
                     </div>
            </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Destination</lable>
          <input type="text"
          className="form-control"
          name="Destination"
          placeholder="Enter Destination"
          value={this.state.Destination}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.DestinationError}
                   </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Transport Date</lable>
          <input type="date"
          className="form-control"
          name="TransportDate"
          placeholder="Enter Transpor Date"
          value={this.state.TransportDate}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.TransportDateError}
                   </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Shipment ID</lable>
          <input type="text"
          className="form-control"
          name="ShipmentID"
          placeholder="Enter Shipment D"
          value={this.state.ShipmentID}
          onChange={this.handleInputChange}
          required
          />
          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.ShipmentIDError}
                   </div>
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
   
  
   
    