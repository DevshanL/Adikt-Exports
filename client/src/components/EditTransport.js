import React, {Component} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import moment from 'moment';

export default class EditTransport extends Component {
  
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
    if(!this.state.ShipmentID){
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
    const id = this.props.match.params.id;

    const {TransportID,VehicleID,VehicleType,Destination,TransportDate,ShipmentID} = this.state;
   
    const data ={
      TransportID:TransportID,
      VehicleID:VehicleID,
      VehicleType:VehicleType,
      Destination:Destination,
      TransportDate:TransportDate,
      ShipmentID:ShipmentID,
    }
  

  //if validation succussesfully pass
  if(isValid){  
  console.log(data);

  //Put data to back end using the Http link
  axios.put(`/transport/update/${id}`,data).then((res)=>{
    if(res.data.success){
      Swal.fire('Updated','Updated Successfully','success')
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

  //load data from a remote endpoint
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/transport/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          TransportID:res.data.transport.TransportID,
          VehicleID:res.data.transport.VehicleID,
          VehicleType:res.data.transport.VehicleType,
          Destination:res.data.transport.Destination,
          TransportDate:res.data.transport.TransportDate,
          ShipmentID:res.data.transport.ShipmentID,
      
        });

        console.log(this.state.transport);
      }

    });


  }
  
   //gather outputs
  render() {
    const id =this.props.match.params.id;
    return (
      //component organizer
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-nomal">Update TR details</h1>

      {/* custom navigation        */}
    <nav class="navbar navbar-expand-lg rounded-3"style={{ backgroundColor: "#006a4e" }}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a   style={{textDecoration:'none',color:'white'}} class="nav-link" href="/posttr">TR Details</a>
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
        <lable style={{marginBottom:'5px'}}> Transport ID</lable>
        <input type="text"
        className="form-control"
        maxlength="5"
        name=" TransportID"
        placeholder="Enter  Transport ID"
        value={this.state.TransportID}
        onChange={this.handleInputChange}
        required
        readOnly
        />
         <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.TransportIDError}
                   </div>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Vehicle ID</lable>
          <input type="text"
          className="form-control"
          maxlength="8"
          name="VehicleID"
          placeholder="Enter Vehicle ID"
          value={this.state.VehicleID}
          onChange={this.handleInputChange}
          required
          readOnly
          />
           <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.VehicleIDError}
                   </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Vehicle Type</lable>
          <input type="text"
          className="form-control"
          name="VehicleType"
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
          placeholder="Enter Transport Date"
          value={this.state.TransportDate}
          onChange={this.handleInputChange}
          min={moment().format("YYYY-MM-DD")}
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
          maxlength="6"
          name="ShipmentID"
          placeholder="Enter Shipment ID"
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
            &nbsp; Update
          </button>
        </form>
        </div>
     
     
    )
  }
}


